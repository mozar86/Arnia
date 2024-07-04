import { useState } from "react";
import { AppContainer } from "./App-styled";
import ProductList from "./components/ProductList/ProductList";
import ProductForm from "./components/ProductForm/ProductForm";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
    const quantity = newQuantity ? parseInt(newQuantity) : NaN;
    if (isNaN(quantity) || quantity < 0) {
      alert('Quantidade inválida.');
      return;
    }
    setProducts(products.map(product => product.id === id ? {...product, quantity} : product));
  }

  return (
    <AppContainer>
      <h1>Controle de Estoque</h1>
      <ProductForm 
        onAddProduct={addProduct}
      />
      <ProductList 
        products={products}
        onRemoveProduct={removeProduct}
        onEditProduct={editProduct}
      />
    </AppContainer>
  );
};

export default App;
