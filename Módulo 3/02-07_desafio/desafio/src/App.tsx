import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import { AppContainer, AppHeader, ThemeButton } from './App-styled';
import { Product } from './types';
import { useTheme } from './context/themeContext';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [balance, setBalance] = useState<number>(100);
  const { theme, toggleTheme } = useTheme(); 

  // Atualiza o título da aba com a quantidade total de produtos
  useEffect(() => {
    document.title = `Total de produtos: ${products.length}`;
  }, [products]);

  // Função para adicionar novos produtos
  const addProduct = (newProduct: Product) => {
    if (balance >= newProduct.price) {
      setProducts([...products, newProduct]);
      setBalance(balance - newProduct.price);
    } else {
      alert('Saldo insuficiente');
    }
  };

  // Função para remover produtos (vender produtos)
  const removeProduct = (id: number) => {
    const confirmSell = Math.random() > 0.5;
    if (confirmSell) {
      const productToRemove = products.find(product => product.id === id);
      if (productToRemove) {
        setBalance(balance + Math.min(productToRemove.price * 1.2, productToRemove.price));
      }
    }
    setProducts(products.filter(product => product.id !== id));
  };

  // Função para editar a quantidade de produtos
  const editProduct = (id: number, quantity: number) => {
    setProducts(products.map(product => product.id === id ? { ...product, quantity } : product));
  };

  // Função para buscar produtos
  const searchProducts = (searchTerm: string) => {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Função para filtrar produtos por categoria
  const filterByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return (
    <AppContainer className={theme}>
      <AppHeader>
        <h1>Controle de Estoque</h1>
        <ThemeButton onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </ThemeButton>
      </AppHeader>
      <Routes>
        <Route 
          path="/Home" 
          element={
            <Home 
              products={products} 
              onRemoveProduct={removeProduct} 
              onEditProduct={editProduct} 
              onSearchProducts={searchProducts} 
              onFilterByCategory={filterByCategory} 
            />
          } 
        />
        <Route path="/new" element={<NewProduct onAddProduct={addProduct} />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
