import React from 'react';
import { ItemContainer, ItemDetails, RemoveButton, EditButton } from './ProductItem.styled';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }

interface ProductItemProps {
    product: Product;
    onRemove: (id: number) => void;
    onEdit: (id: number) => void;
  }

  const ProductItem = ({ product, onRemove, onEdit, onEditPrice }: ProductItemProps) => {
    return (
      <ItemContainer>
        <ItemDetails>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Preço: ${product.price.toFixed(2)}</p>
          <p style={{ color: product.quantity < 5 ? 'red' : 'white' }}>
            Quantidade: {product.quantity}
          </p>
        </ItemDetails>
        <EditButton onClick={() => onEdit(product.id)}>Editar Quantidade</EditButton>
        <EditButton onClick={() => onEditPrice(product.id)}>Editar Preço</EditButton>
        <RemoveButton onClick={() => onRemove(product.id)}>Remover</RemoveButton>
      </ItemContainer>
    );
  };
    

export default ProductItem;