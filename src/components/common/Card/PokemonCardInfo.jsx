import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { capitalLetter, typesFormat } from '../../../utils';
import './PokemonCardInfo.css';
import { imageNotAvailable } from '../../../assets';

const PokemonCardInfo = ({ textColor, url }) => {
   const { fetchState: pokemon } = useFetch(url);

   return (
      <>
         {pokemon.data && (
            <div className='pokemon-card-info'>
               <figure className='pokemon-img-container'>
                  <img
                     className='pokemon-img'
                     src={
                        pokemon.data.sprites.other.dream_world.front_default ||
                        pokemon.data.sprites.front_default ||
                        imageNotAvailable
                     }
                     alt='Card profile'
                  />
               </figure>
               <hgroup>
                  <h2 className='pokemon-name' style={{ color: textColor }}>
                     {capitalLetter(pokemon.data.name)}
                  </h2>
                  <h3 className='pokemon-type'>
                     {pokemon.data.types.map((type, index) =>
                        typesFormat(pokemon.data.types, index)
                     )}
                  </h3>
                  <h4 className='pokemon-subtitle pokemon-subtitle-type'>
                     Type
                  </h4>
               </hgroup>
               <hr className='pokemon-card-info-hr' />
               <div className='pokemon-stats-container'>
                  <div className='pokemon-stat hp-stat'>
                     <h4 className='pokemon-subtitle pokemon-subtitle-stat'>
                        HP
                     </h4>
                     <p
                        className='pokemon-stat-info'
                        style={{ color: textColor }}
                     >
                        {pokemon.data.stats[0].base_stat}
                     </p>
                  </div>
                  <div className='pokemon-stat attack-stat'>
                     <h4 className='pokemon-subtitle pokemon-subtitle-stat'>
                        ATTACK
                     </h4>
                     <p
                        className='pokemon-stat-info'
                        style={{ color: textColor }}
                     >
                        {pokemon.data.stats[1].base_stat}
                     </p>
                  </div>
                  <div className='pokemon-stat defense-stat'>
                     <h4 className='pokemon-subtitle pokemon-subtitle-stat'>
                        DEFENSE
                     </h4>
                     <p
                        className='pokemon-stat-info'
                        style={{ color: textColor }}
                     >
                        {pokemon.data.stats[2].base_stat}
                     </p>
                  </div>
                  <div className='pokemon-stat speed-stat'>
                     <h4 className='pokemon-subtitle pokemon-subtitle-stat'>
                        SPEED
                     </h4>
                     <p
                        className='pokemon-stat-info'
                        style={{ color: textColor }}
                     >
                        {pokemon.data.stats[5].base_stat}
                     </p>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default PokemonCardInfo;
