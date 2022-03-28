import React from 'react';
import { capitalLetter } from '../../../utils';

const SelectInputOptions = ({
   pokemonTypes,
   defaultValue,
   changeValue,
   setIsVisible,
}) => {
   const handleChangeToDefaultValue = () => {
      changeValue('');
      setIsVisible(false);
   };

   const handleChangeValue = (e) => {
      changeValue(e.target.textContent);
      setIsVisible(false);
   };

   return (
      <div className='drop-down'>
         <p
            key={defaultValue}
            className='drop-down-option'
            onClick={handleChangeToDefaultValue}
         >
            {defaultValue}
         </p>
         {pokemonTypes.map((pokemonType) => (
            <p
               key={pokemonType.name}
               className='drop-down-option'
               onClick={handleChangeValue}
            >
               {capitalLetter(pokemonType.name)}
            </p>
         ))}
      </div>
   );
};

export default SelectInputOptions;
