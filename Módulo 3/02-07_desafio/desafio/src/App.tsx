import React, { useState } from "react";
import { AppContainer } from "./App-styled";
import ProductList from "./components/ProductList/ProductList";
import ProductForm from "./components/ProductForm/ProductForm";
import Modal from "./components/Modal/Modal";


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  isFood: boolean;
  isDrink: boolean;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [productIdToRemove, setProductIdToRemove] = useState<number | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleRemoveClick = (id: number) => {
    setProductIdToRemove(id);
    setModalVisible(true);
  };


  const confirmRemoveProduct = () => {
    if (productIdToRemove !== null) {
      removeProduct(productIdToRemove);
    }
    setModalVisible(false);
  };

  const cancelRemoveProduct = () => {
    setProductIdToRemove(null);
    setModalVisible(false);
  };

  const filteredProducts = products.filter(product => 
    (categoryFilter === '' || (categoryFilter === 'food' && product.isFood) || (categoryFilter === 'drink' && product.isDrink)) &&
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts([...products, newProduct]);
  };

  const removeProduct = (id: number) => {
    if (window.confirm('Tem certeza que deseja remover este produto?'))
      setProducts(products.filter(product => product.id !== id));
  }

  const editProduct = (id: number) => {
    const newQuantity = window.prompt('Digite a nova quantidade:');
    if (newQuantity && !isNaN(parseInt(newQuantity, 10))) {
      const quantity = parseInt(newQuantity, 10);
      setProducts(products.map(product => 
        product.id === id ? { ...product, quantity } : product
      ));
    } else {
      alert('Quantidade inválida.');
    }
  };

  const editProductPrice = (id: number) => {
    const newPrice = window.prompt('Digite o novo preço:');
    if (newPrice && !isNaN(parseFloat(newPrice))) {
      const price = parseFloat(newPrice);
      setProducts(products.map(product => 
        product.id === id ? { ...product, price } : product
      ));
    } else {
      alert('Preço inválido.');
    }
  };

  return (
    <AppContainer>
      <h1>Controle de Estoque</h1>
      <input 
        type="text" 
        placeholder="Buscar produtos..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <select onChange={(e) => setCategoryFilter(e.target.value)}>
        <option value="">Todas</option>
        <option value="food">Comida</option>
        <option value="drink">Bebida</option>
      </select>
      <ProductForm onAddProduct={addProduct} />
      <ProductList 
        products={filteredProducts} 
        onRemoveProduct={handleRemoveClick} 
        onEditProduct={editProduct} 
        onEditPrice={editProductPrice} 
      />
      {modalVisible && (
        <Modal 
          message="Tem certeza de que deseja remover este produto?" 
          onConfirm={confirmRemoveProduct} 
          onCancel={cancelRemoveProduct} 
        />
      )}
    </AppContainer>
  );
};

export default App;
