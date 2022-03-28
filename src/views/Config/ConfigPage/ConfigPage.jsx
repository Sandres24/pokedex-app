import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../../components';

const ConfigPage = () => {
   const navigate = useNavigate();

   const backTo = () => navigate(-1);

   return (
      <div>
         ConfigPage
         <CustomButton className='custom-btn back-button' handleClick={backTo}>
            <i className='fa-solid fa-arrow-left'></i>
         </CustomButton>
      </div>
   );
};

export default ConfigPage;
