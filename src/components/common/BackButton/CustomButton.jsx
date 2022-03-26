import React from 'react';
import './CustomButton.css';

const CustomButton = ({ children, className, handleClick }) => {
   return (
      <button className={className} type='button' onClick={handleClick}>
         {children}
      </button>
   );
};

export default CustomButton;
