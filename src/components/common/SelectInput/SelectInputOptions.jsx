import React from 'react';
import { changeElementsPerPage } from '../../../redux/actions';
import { capitalLetter } from '../../../utils';

const SelectInputOptions = ({
   list,
   defaultValue,
   changeValue,
   setIsVisible,
}) => {
   const handleChangeToDefaultValue = () => {
      if (changeValue.setPokemonTypeFilter)
         changeValue.setPokemonTypeFilter('');
      if (changeValue.dispatch)
         changeValue.dispatch(changeElementsPerPage(defaultValue));
      setIsVisible(false);
   };

   const handleChangeValue = (e) => {
      if (changeValue.setPokemonTypeFilter)
         changeValue.setPokemonTypeFilter(e.target.textContent);
      if (changeValue.dispatch)
         changeValue.dispatch(
            changeElementsPerPage(Number(e.target.textContent))
         );
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
         {list.map((item) => (
            <p
               key={item.name}
               className='drop-down-option'
               onClick={handleChangeValue}
            >
               {capitalLetter(item.name)}
            </p>
         ))}
      </div>
   );
};

export default SelectInputOptions;
