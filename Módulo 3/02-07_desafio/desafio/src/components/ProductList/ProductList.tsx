import React, { useState } from 'react';
import { ProductListContainer, SearchBar, SelectFilter } from './ProductList-styled';
import ProductItem from '../ProductItem/ProductItem';
import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
  onRemoveProduct: (id: number) => void;
  onEditProduct: (id: number, newQuantity: number) => void;
  onEditPrice: (id: number, newPrice: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onRemoveProduct, onEditProduct, onEditPrice }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter(product => {
    // Task #7: Sistema de busca para filtrar produtos por nome ou descrição
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              product.description.toLowerCase().includes(searchTerm.toLowerCase());
    // Task #10.2: Filtro tipo select para filtrar pelas características do produto
    const matchesFilter = filter === '' || product.category === filter;
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <ProductListContainer>
      <SearchBar 
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SelectFilter
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="Comida">Comida</option>
        <option value="Bebida">Bebida</option>
        <option value="Não comestível">Não comestível</option>
      </SelectFilter>
      {filteredProducts.map(product => (
        <ProductItem 
          key={product.id}
          product={product}
          onRemoveProduct={onRemoveProduct}
          onEditProduct={onEditProduct}
          onEditPrice={onEditPrice}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
