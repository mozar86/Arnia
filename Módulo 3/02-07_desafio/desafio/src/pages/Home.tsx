import React, { useState } from 'react';
import { HomeContainer } from './Home-styled';
import { Product } from '../types';
import ProductList from '../components/ProductList/ProductList';

type HomeProps = {
  products: Product[];
  onRemoveProduct: (id: number) => void;
  onEditProduct: (id: number, quantity: number) => void;
  onSearchProducts: (searchTerm: string) => Product[];
  onFilterByCategory: (category) => Product[];
};

const Home: React.FC<HomeProps> = ({ products, onRemoveProduct, onEditProduct, onSearchProducts, onFilterByCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<Category | ''>('');

  const filteredProducts = searchTerm
    ? onSearchProducts(searchTerm)
    : category
    ? onFilterByCategory(category as Category)
    : products;

  return (
    <HomeContainer>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value as Category)}>
        <option value="">Todas Categorias</option>
        <option value="Comida">Comida</option>
        <option value="Bebida">Bebida</option>
        <option value="NaoComestivel">Não Comestível</option>
      </select>
      <ProductList 
        products={filteredProducts} 
        onRemoveProduct={onRemoveProduct} 
        onEditProduct={onEditProduct} 
      />
    </HomeContainer>
  );
};

export default Home;
