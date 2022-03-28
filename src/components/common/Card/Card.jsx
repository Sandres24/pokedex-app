import React from 'react';
import './Card.css';

const Card = ({ children, className, backgrounds }) => {
   return (
      <div
         className={`card ${className}`}
         style={{ background: backgrounds.card }}
      >
         <div className='card-content'>
            <div
               className='card-header'
               style={{ background: backgrounds.cardHeader }}
            ></div>
            <div className='card-body'>{children}</div>
         </div>
      </div>
   );
};

export default Card;
