import React from 'react';
import './LoginPage.css';
import { userValidation } from '../../../utils';
import {
   IconPokedex,
   InputForm,
   Pokeball,
   PokeballBar,
} from '../../../components';

const LoginPage = () => {
   return (
      <div className='login-page'>
         <IconPokedex
            classes={['login-icon-pokedex-container', 'login-icon-pokedex']}
         />
         <hgroup className='to-start'>
            <h1 className='to-start-title'>¡Hi trainer!</h1>
            <h2 className='to-start-subtitle'>To start, give us your name</h2>
         </hgroup>
         <div className='login-form-container'>
            <InputForm {...userValidation()} />
         </div>
         <div className='login-pokeball-bar-container'>
            <PokeballBar />
         </div>
         <div className='login-pokeball-container'>
            <Pokeball />
         </div>
      </div>
   );
};

export default LoginPage;
