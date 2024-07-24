import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NewProduct from './pages/NewProduct';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<NewProduct />} />
    </Routes>
  </Router>
);

export default AppRoutes;
