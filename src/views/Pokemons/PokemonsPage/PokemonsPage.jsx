import React, { useEffect, useState } from 'react';
import './PokemonsPage.css';
import { useSelector } from 'react-redux';
import {
   Card,
   CustomButton,
   InputForm,
   Loader,
   Pagination,
   PokemonCardInfo,
   SelectInput,
} from '../../../components';
import {
   getByPokemonTypes,
   getPaginationRange,
   getPokemons,
   getTotalPages,
   getURL,
   pokemonValidation,
   toLowerCase,
} from '../../../utils';
import { Link, useNavigate } from 'react-router-dom';
import { configIcon, noResults } from '../../../assets';
import useFetch from '../../../hooks/useFetch';

const defaultPokemonTypeFilter = '';

const PokemonsPage = () => {
   const username = useSelector((state) => state.username);
   const theme = useSelector((state) => state.theme);
   const defaultElementsPerPage = useSelector((state) => state.elementsPerPage);
   const navigate = useNavigate();

   const [pokemonTypeFilter, setPokemonTypeFilter] = useState(
      defaultPokemonTypeFilter
   );
   const { fetchState: allPokemons } = useFetch(getURL(getPokemons()));

   let url = pokemonTypeFilter
      ? getURL(getByPokemonTypes(toLowerCase(pokemonTypeFilter)))
      : getURL(getPokemons());
   const { fetchState: pokemonTypes } = useFetch(
      getURL(getByPokemonTypes(defaultPokemonTypeFilter))
   );
   const { fetchState: pokemons } = useFetch(url);

   const initialPaginationInfo = {
      page: 1,
      elementsPerPage: defaultElementsPerPage,
      offset: 0,
      totalElements: allPokemons.data?.count || 0,
   };

   const [paginationInfo, setPaginationInfo] = useState(initialPaginationInfo);
   const totalPages = getTotalPages(
      paginationInfo.totalElements,
      paginationInfo.elementsPerPage
   );

   useEffect(() => {
      setPaginationInfo((previousState) => ({
         ...previousState,
         page: 1,
         offset: 0,
         totalElements: pokemons.data?.pokemon
            ? pokemons.data.pokemon.length
            : allPokemons.data?.count || 0,
      }));
   }, [pokemons.data, allPokemons.data?.count]);

   const goToConfig = () => navigate('/config');

   return (
      <div className='PokemonsPage'>
         <CustomButton
            className='custom-btn config-button'
            handleClick={goToConfig}
         >
            <figure className='config-icon-container'>
               <img className='config-icon' src={configIcon} alt='Config' />
            </figure>
         </CustomButton>
         <h2 className='wellcome'>
            <span className='wellcome-name'>Wellcome {username},</span>
            <span style={{ color: theme === 'light' ? '#000' : '#fff' }}>
               {' '}
               here you would find your favorite pokemon.
            </span>
         </h2>
         <div className='search-container'>
            <InputForm
               {...pokemonValidation(
                  allPokemons.data ? allPokemons.data : null
               )}
            />
            <SelectInput
               className='select-input-pokemon'
               list={pokemonTypes?.data?.results || []}
               defaultValue={defaultPokemonTypeFilter || 'All pokemons'}
               value={pokemonTypeFilter || 'All pokemons'}
               changeValue={{ setPokemonTypeFilter }}
            />
         </div>
         <div className='cards-wrapper'>
            {pokemons.isLoading && <Loader />}
            {pokemons.data?.results &&
               !pokemonTypeFilter &&
               pokemons.data.results
                  .slice(
                     paginationInfo.offset,
                     paginationInfo.offset + paginationInfo.elementsPerPage
                  )
                  .map((pokemon) => (
                     <Link
                        key={pokemon.name}
                        to={`/pokedex/${pokemon.url
                           .match(/(\/)\d+(\/)$/)[0]
                           .replace('/', '', 'g')}`}
                     >
                        <Card className='card-pokemon' url={pokemon.url}>
                           <PokemonCardInfo url={pokemon.url} />
                        </Card>
                     </Link>
                  ))}
            {pokemons.data?.pokemon &&
               pokemonTypeFilter &&
               pokemons.data.pokemon
                  .slice(
                     paginationInfo.offset,
                     paginationInfo.offset + paginationInfo.elementsPerPage
                  )
                  .map((pokemon) => (
                     <Link
                        key={pokemon.pokemon.name}
                        to={`/pokedex/${pokemon.pokemon.url
                           .match(/(\/)\d+(\/)$/)[0]
                           .replace('/', '', 'g')}`}
                     >
                        <Card
                           className='card-pokemon'
                           url={pokemon?.pokemon?.url}
                        >
                           <PokemonCardInfo url={pokemon?.pokemon?.url} />
                        </Card>
                     </Link>
                  ))}
            {pokemons.data?.pokemon?.length === 0 && (
               <div className='no-results-container'>
                  <p
                     className='pokemons-no-results'
                     style={{ color: theme === 'light' ? '#000' : '#fff' }}
                  >
                     Sorry, there are no pokemons with this type of search!
                  </p>
                  <img
                     className='no-results-img'
                     src={noResults}
                     alt='No results'
                  />
               </div>
            )}
         </div>
         {pokemons.data && (
            <Pagination
               range={getPaginationRange(9, totalPages, paginationInfo.page)}
               totalPages={totalPages}
               paginationInfo={paginationInfo}
               setPaginationInfo={setPaginationInfo}
            />
         )}
      </div>
   );
};

export default PokemonsPage;
