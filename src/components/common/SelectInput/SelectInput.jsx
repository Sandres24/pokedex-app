import React, { useState } from 'react';
import './SelectInput.css';

const SelectInput = ({ className }) => {
   const [visible, setIsVisible] = useState(false);

   const handleClick = () => setIsVisible(!visible);

   return (
      <div
         className={`select-input ${
            visible ? 'select-input-active' : ''
         } ${className}`}
      >
         <div className='select-input-header' onClick={handleClick}>
            List by pokemon type...
         </div>
         <i
            className={`down-arrow ${
               visible ? 'down-arrow-active' : ''
            } fa-solid fa-angle-down`}
            onClick={handleClick}
         ></i>
         {visible && <p className='drop-down'>List</p>}
      </div>
   );
};

export default SelectInput;
