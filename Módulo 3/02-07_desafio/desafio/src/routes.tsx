import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewProduct />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
