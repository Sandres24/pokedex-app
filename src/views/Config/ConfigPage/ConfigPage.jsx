import React, { useState } from 'react';
import './ConfigPage.css';
import { useNavigate } from 'react-router-dom';
import { CustomButton, SelectInput } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { changeElementsPerPage, changeTheme } from '../../../redux/actions';

const list = [{ name: 4 }, { name: 8 }, { name: 12 }, { name: 16 }];

const ConfigPage = () => {
   const theme = useSelector((state) => state.theme);
   const elementsPerPage = useSelector((state) => state.elementsPerPage);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [defaultElementsPerPage] = useState(20);

   const backTo = () => navigate(-1);
   const handleSwitch = () => {
      if (theme === 'light') dispatch(changeTheme('dark'));
      if (theme === 'dark') dispatch(changeTheme('light'));
   };

   return (
      <div className='ConfigPage'>
         <CustomButton className='custom-btn back-button' handleClick={backTo}>
            <i className='fa-solid fa-arrow-left'></i>
         </CustomButton>
         <div className='config-container'>
            <div className='config-theme'>
               <p className='theme light-them'>Light</p>
               <div
                  className={
                     theme === 'light'
                        ? 'theme-changer-container'
                        : 'theme-changer-container theme-changer-container-active'
                  }
                  onClick={handleSwitch}
               >
                  <div
                     className={
                        theme === 'light'
                           ? 'theme-switch'
                           : 'theme-switch theme-switch-active'
                     }
                  ></div>
               </div>
               <p className='theme dark-them'>Dark</p>
            </div>
            <SelectInput
               className='config-pagination'
               list={list}
               defaultValue={defaultElementsPerPage}
               value={elementsPerPage}
               changeValue={{ dispatch }}
            />
         </div>
      </div>
   );
};

export default ConfigPage;
