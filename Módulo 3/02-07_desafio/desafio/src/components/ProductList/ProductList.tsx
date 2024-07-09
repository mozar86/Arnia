import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { ListContainer } from './ProductList-styled';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  isFood: boolean;
  isDrink: boolean;
}

interface ProductListProps {
  products: Product[];
  onRemoveProduct: (id: number) => void;
  onEditProduct: (id: number) => void;
}

const ProductList = ({ products, onRemoveProduct, onEditProduct }: ProductListProps) => {
  return (
    <ListContainer>
      {products.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          onRemove={onRemoveProduct} 
          onEdit={onEditProduct}
        />
      ))}
    </ListContainer>
  );
};

export default ProductList;
