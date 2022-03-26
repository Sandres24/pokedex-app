import React from 'react';
import './PokemonsPage.css';
import { useSelector } from 'react-redux';
import { CustomButton, InputForm, SelectInput } from '../../../components';
import { pokemonValidation } from '../../../utils';
import { useNavigate } from 'react-router-dom';

const PokemonsPage = () => {
   const username = useSelector((state) => state.username);
   const navigate = useNavigate();

   const backTo = () => navigate(-1);

   return (
      <div className='PokemonsPage'>
         <CustomButton className='custom-btn back-button' handleClick={backTo}>
            <i className='fa-solid fa-arrow-left'></i>
         </CustomButton>
         <h2 className='wellcome'>
            <span className='wellcome-name'>Wellcome {username},</span> here you
            would find your favorite pokemon.
         </h2>
         <div className='search-container'>
            <InputForm {...pokemonValidation()} />
            <SelectInput className='select-input-pokemon' />
         </div>
      </div>
   );
};

export default PokemonsPage;
