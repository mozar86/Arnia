import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NewProductPage from './pages/NewProductPage';
import HomePage from './pages/HomePage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<NewProductPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
