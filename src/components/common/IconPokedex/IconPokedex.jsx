import React from 'react';
import { pokedex } from '../../../assets';

const IconPokedex = ({ classes }) => {
   return (
      <figure className={classes[0]}>
         <img className={classes[1]} src={pokedex} alt='Pokédex' />
      </figure>
   );
};

export default IconPokedex;
