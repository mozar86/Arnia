import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AppContainer, AppHeader, ThemeButton } from './App-styled';
import { Product } from './types';
import NewProduct from './pages/NewProduct';
import { ThemeContext, ThemeProvider } from './context/themeContext';

// Task 5: Implementar tema claro ou escuro utilizando o useContext()
const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [balance, setBalance] = useState<number>(100);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Task 6: Incluir no título de cada aba de produtos a quantidade de produtos total para aquela aba em específico utilizando o useEffect()
  useEffect(() => {
    document.title = `Total de produtos: ${products.length}`;
  }, [products]);

  // Task 2: Função para adicionar novos produtos
  const addProduct = (newProduct: Product) => {
    if (balance >= newProduct.price) {
      setProducts([...products, newProduct]);
      setBalance(balance - newProduct.price);
    } else {
      alert('Saldo insuficiente');
    }
  };

  // Task 3: Função para remover produtos (vender produtos)
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

  // Task 4: Função para editar a quantidade de produtos
  const editProduct = (id: number, quantity: number) => {
    setProducts(products.map(product => product.id === id ? { ...product, quantity } : product));
  };

  // Task 7: Função para busca de produtos
  const searchProducts = (searchTerm: string) => {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Task 8: Separar produtos por categoria
  const filterByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return (
    <ThemeProvider>
      <Router>
        <AppContainer>
          <AppHeader>
            <h1>Controle de Estoque</h1>
            <ThemeButton onClick={toggleTheme}>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </ThemeButton>
          </AppHeader>
          <Routes>
            <Route path="/" element={<Home products={products} onRemoveProduct={removeProduct} onEditProduct={editProduct} onSearchProducts={searchProducts} onFilterByCategory={filterByCategory} />} />
            <Route path="/new" element={<NewProduct onAddProduct={addProduct} />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
