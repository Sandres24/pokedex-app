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
import { configIcon } from '../../../assets';
import useFetch from '../../../hooks/useFetch';

const defaultPokemonTypeFilter = '';

const PokemonsPage = () => {
   const username = useSelector((state) => state.username);
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

   console.log(pokemons);
   console.log('ALL', allPokemons);
   console.log(paginationInfo);
   console.log(totalPages);

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
            <span className='wellcome-name'>Wellcome {username},</span> here you
            would find your favorite pokemon.
         </h2>
         <div className='search-container'>
            <InputForm {...pokemonValidation()} />
            <SelectInput
               className='select-input-pokemon'
               pokemonTypes={pokemonTypes?.data?.results || []}
               defaultValue={defaultPokemonTypeFilter || 'All pokemons'}
               value={pokemonTypeFilter || 'All pokemons'}
               changeValue={setPokemonTypeFilter}
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
                        <Card
                           className='card-pokemon'
                           backgrounds={{
                              card: 'linear-gradient(#b1dbbc, #c3dea3)',
                              cardHeader:
                                 'linear-gradient(#7ec6c5, #abdac6, #cae099)',
                           }}
                        >
                           <PokemonCardInfo
                              textColor='#416460'
                              url={pokemon.url}
                           />
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
                           backgrounds={{
                              card: 'linear-gradient(#b1dbbc, #c3dea3)',
                              cardHeader:
                                 'linear-gradient(#7ec6c5, #abdac6, #cae099)',
                           }}
                        >
                           <PokemonCardInfo
                              textColor='#416460'
                              url={pokemon.pokemon.url}
                           />
                        </Card>
                     </Link>
                  ))}
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
