import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import AddProduct from './pages/NewProductPage';
import { ThemeProvider } from 'styled-components';
import { Product } from './types';

const lightTheme = {
  body: '#FFF',
  text: '#000',
  productBackground: '#f9f9f9',
  buttonBackground: '#000',
  buttonText: '#FFF',
  modalBackground: '#FFF',
};

const darkTheme = {
  body: '#333',
  text: '#FFF',
  productBackground: '#444',
  buttonBackground: '#FFF',
  buttonText: '#000',
  modalBackground: '#333',
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [balance, setBalance] = useState(100); // Task #10.3: Implementação da carteira
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    document.title = `Produtos (${products.length})`; // Task #6: Atualizar título da aba
  }, [products.length]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  const addProduct = (product: Product) => {
    if (balance >= product.price) { // Verificação de saldo suficiente
      setProducts((prevProducts) => [...prevProducts, product]);
      setBalance((prevBalance) => prevBalance - product.price); // Subtração do valor do produto da carteira
    } else {
      alert('Saldo insuficiente!');
    }
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const editProduct = (id: number, newQuantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const editPrice = (id: number, newPrice: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, price: newPrice } : product
      )
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home products={products} onRemoveProduct={removeProduct} onEditProduct={editProduct} onEditPrice={editPrice} />} />
            <Route path="/add" element={<AddProduct onAddProduct={addProduct} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
