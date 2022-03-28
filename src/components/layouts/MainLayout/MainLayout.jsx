import React from 'react';
import './MainLayout.css';
import { Outlet } from 'react-router-dom';
import Pokeball from '../../common/Pokeball/Pokeball';
import PokeballBar from '../../common/PokeballBar/PokeballBar';
import IconPokedex from '../../common/IconPokedex/IconPokedex';
import CustomButton from '../../common/BackButton/CustomButton';
import { useDispatch } from 'react-redux';
import { exit } from '../../../redux/actions';

const MainLayout = () => {
   const dispatch = useDispatch();

   const closeSession = () => dispatch(exit(null));

   return (
      <>
         <CustomButton
            className='custom-btn exit-button'
            handleClick={closeSession}
         >
            <i className='fa-solid fa-arrow-right-from-bracket'></i>
         </CustomButton>
         <IconPokedex
            classes={[
               'main-layout-icon-pokedex-container',
               'main-layout-icon-pokedex',
            ]}
         />
         <div className='main-layout-pokeball-bar-container'>
            <PokeballBar />
         </div>
         <div className='main-layout-pokeball-container'>
            <Pokeball />
         </div>
         <Outlet />
      </>
   );
};

export default MainLayout;
