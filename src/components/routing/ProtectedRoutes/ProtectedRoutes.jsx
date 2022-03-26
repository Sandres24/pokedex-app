import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const ProtectedRoutes = () => {
   const username = useSelector((state) => state.username);

   if (username) {
      return <MainLayout />;
   } else {
      return <Navigate to='/' />;
   }
};

export default ProtectedRoutes;
