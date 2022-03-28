import React, { useState } from 'react';
import './SelectInput.css';
import SelectInputOptions from './SelectInputOptions';

const SelectInput = ({
   className,
   pokemonTypes,
   defaultValue,
   value,
   changeValue,
}) => {
   const [visible, setIsVisible] = useState(false);

   const handleClick = () => setIsVisible(!visible);

   return (
      <div
         className={`select-input ${
            visible ? 'select-input-active' : ''
         } ${className}`}
         onClick={handleClick}
      >
         <div className='select-input-header'>{value}</div>
         <i
            className={`down-arrow ${
               visible ? 'down-arrow-active' : ''
            } fa-solid fa-angle-down`}
         ></i>
         {visible && (
            <SelectInputOptions
               pokemonTypes={pokemonTypes}
               defaultValue={defaultValue}
               changeValue={changeValue}
               setIsVisible={setIsVisible}
            />
         )}
      </div>
   );
};

export default SelectInput;
