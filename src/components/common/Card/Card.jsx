import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { getColorsByType } from '../../../utils';
import './Card.css';

const Card = ({ children, className, url }) => {
   const { fetchState } = useFetch(url);
   const color = getColorsByType(fetchState.data?.types?.[0].type?.name);

   return (
      <div className={`card ${className}`} style={{ background: color.card }}>
         <div className='card-content'>
            <div
               className='card-header'
               style={{ background: color.cardHeader }}
            ></div>
            <div className='card-body'>{children}</div>
         </div>
      </div>
   );
};

export default Card;
