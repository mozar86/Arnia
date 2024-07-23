import React from 'react';
import ProductForm from '../components/ProductForm/ProductForm';
import { PageContainer } from './NewProductPage-styled';

interface AddProductProps {
  onAddProduct: (product: Product) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ onAddProduct }) => {
  return (
    <PageContainer>
      <ProductForm onAddProduct={onAddProduct} />
    </PageContainer>
  );
};

export default AddProduct;
