import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { ListContainer } from './ProductList-styled';
import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
  onRemoveProduct: (id: number) => void;
  onEditProduct: (id: number) => void;
  onEditPrice: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onRemoveProduct, onEditProduct, onEditPrice }: ProductListProps) => {
  return (
    <ListContainer>
      {products.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          onRemove={onRemoveProduct} 
          onEdit={onEditProduct}
          onEditPrice={onEditPrice}
        />
      ))}
    </ListContainer>
  );
};

export default ProductList;
