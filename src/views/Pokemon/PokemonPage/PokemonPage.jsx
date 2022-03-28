import React from 'react';
import './PokemonPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { configIcon, group232, imageNotAvailable } from '../../../assets';
import { CustomButton, Loader } from '../../../components';
import useFetch from '../../../hooks/useFetch';
import { capitalLetter, getByPokemon, getURL } from '../../../utils';

const PokemonPage = () => {
   /* window.scrollTo(0, 0); */

   const navigate = useNavigate();
   const { id } = useParams();

   const { fetchState: pokemon } = useFetch(getURL(getByPokemon(id)));

   console.log(pokemon);

   const backTo = () => navigate(-1);
   const goToConfig = () => navigate('/config');

   return (
      <div className='PokemonPage'>
         <CustomButton className='custom-btn back-button' handleClick={backTo}>
            <i className='fa-solid fa-arrow-left'></i>
         </CustomButton>
         <CustomButton
            className='custom-btn config-button'
            handleClick={goToConfig}
         >
            <figure className='config-icon-container'>
               <img className='config-icon' src={configIcon} alt='Config' />
            </figure>
         </CustomButton>
         {pokemon.isLoading && (
            <div className='loader-container'>
               <Loader />
            </div>
         )}
         {pokemon.data && (
            <>
               <section className='pokemon-info-container'>
                  <div
                     className='pokemon-background-img'
                     style={{
                        background:
                           'linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)',
                     }}
                  >
                     <figure className='pokemon-page-img-container'>
                        <img
                           className='pokemon-page-img'
                           src={
                              pokemon.data.sprites.other.dream_world
                                 .front_default ||
                              pokemon.data.sprites.front_default ||
                              imageNotAvailable
                           }
                           alt={pokemon.data.name}
                        />
                     </figure>
                  </div>
                  <div className='pokemon-description'>
                     <h2 className='pokemon-title pokemon-id'>
                        #{pokemon.data.id}
                     </h2>
                     <h2 className='pokemon-title pokemon-description-name'>
                        <hr className='pokemon-hr' />
                        {capitalLetter(pokemon.data.name)}
                        <hr className='pokemon-hr' />
                     </h2>
                     <div className='pokemon-weight-height'>
                        <div className='weight-height-stat pokemon-weight'>
                           <h3 className='pokemon-weight-height-title'>
                              Weight
                           </h3>
                           <p className='pokemon-weight-height-stat'>
                              {pokemon.data.weight}
                           </p>
                        </div>
                        <div className='weight-height-stat pokemon-height'>
                           <h3 className='pokemon-weight-height-title'>
                              Height
                           </h3>
                           <p className='pokemon-weight-height-stat'>
                              {pokemon.data.height}
                           </p>
                        </div>
                     </div>
                     <div className='pokemon-type-skills'>
                        <div className='type-skills-stat pokemon-description-type'>
                           <h3 className='pokemon-type-skills-title'>Type</h3>
                           <div className='pokemon-types'>
                              {pokemon.data.types.map((type) => (
                                 <p
                                    key={type.type.url}
                                    className='pokemon-description-types'
                                    style={{ background: 'salmon' }}
                                 >
                                    {capitalLetter(type.type.name)}
                                 </p>
                              ))}
                           </div>
                        </div>
                        <div className='type-skills-stat pokemon-description-skill'>
                           <h3 className='pokemon-type-skills-title'>
                              Abilities
                           </h3>
                           <div className='pokemon-skills'>
                              {pokemon.data.abilities.map((ability) => (
                                 <p
                                    key={ability.ability.url}
                                    className='pokemon-description-skills'
                                 >
                                    {capitalLetter(ability.ability.name)}
                                 </p>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className='pokemon-stats'>
                        <div className='pokemon-stats-header'>
                           <h2 className='pokemon-stats-title'>Stats</h2>
                           <figure className='group232-container'>
                              <img
                                 className='group232'
                                 src={group232}
                                 alt='Pokeball'
                              />
                           </figure>
                        </div>
                        <div className='pokemon-stats-bars'>
                           {pokemon.data.stats.map((stat) => {
                              if (
                                 stat.stat.name === 'hp' ||
                                 stat.stat.name === 'attack' ||
                                 stat.stat.name === 'defense' ||
                                 stat.stat.name === 'speed'
                              )
                                 return (
                                    <div
                                       key={stat.stat.url}
                                       className='bar-stat'
                                    >
                                       <div className='stat-header'>
                                          <h2 className='stat-header-title'>
                                             {capitalLetter(stat.stat.name)}
                                          </h2>
                                          <h2 className='stat-header-subtitle'>
                                             {stat.base_stat}/150
                                          </h2>
                                       </div>
                                       <progress
                                          className='pokemon-stats-bar'
                                          max='150'
                                          value={stat.base_stat}
                                       ></progress>
                                    </div>
                                 );
                              return null;
                           })}
                        </div>
                     </div>
                  </div>
               </section>
               <section className='pokemon-info-container pokemon-movements-section'>
                  <div className='pokemon-movements-info'>
                     <div className='pokemon-stats-header'>
                        <h2 className='pokemon-stats-title'>Movements</h2>
                        <figure className='group232-container'>
                           <img
                              className='group232'
                              src={group232}
                              alt='Pokeball'
                           />
                        </figure>
                     </div>
                     <div className='movements-wrapper'>
                        {pokemon.data.moves.map((move) => (
                           <p key={move.move.url} className='pokemon-movements'>
                              {capitalLetter(move.move.name)}
                           </p>
                        ))}
                     </div>
                  </div>
               </section>
            </>
         )}
      </div>
   );
};

export default PokemonPage;
