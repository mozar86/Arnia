import React, { useState } from 'react';
import { ProductContainer, InfoContainer, ProductName, ProductDescription, ProductQuantity, ProductPrice, ProductCategory, Input, RemoveButton } from './ProductItem.styled';
import Modal from '../Modal/Modal';
import { Product } from '../../types';

interface ProductItemProps {
  product: Product;
  onRemoveProduct: (id: number) => void;
  onEditProduct: (id: number, newQuantity: number) => void;
  onEditPrice: (id: number, newPrice: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onRemoveProduct, onEditProduct, onEditPrice }) => {
  const [isEditingQuantity, setIsEditingQuantity] = useState(false);
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity.toString());
  const [price, setPrice] = useState(product.price.toString());
  const [showModal, setShowModal] = useState(false);

  const handleEditQuantity = () => {
    if (isEditingQuantity) {
      // Task #4: Atualizar a quantidade de um produto
      const newQuantity = parseInt(quantity, 10);
      if (!isNaN(newQuantity) && newQuantity >= 0) {
        onEditProduct(product.id, newQuantity);
      }
    }
    setIsEditingQuantity(!isEditingQuantity);
  };

  const handleEditPrice = () => {
    if (isEditingPrice) {
      // Task #4: Atualizar o preço de um produto
      const newPrice = parseFloat(price);
      if (!isNaN(newPrice) && newPrice >= 0) {
        onEditPrice(product.id, newPrice);
      }
    }
    setIsEditingPrice(!isEditingPrice);
  };

  return (
    <ProductContainer>
      <InfoContainer>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductQuantity onClick={handleEditQuantity}>
          {isEditingQuantity ? (
            <Input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          ) : (
            `Quantidade: ${product.quantity}`
          )}
        </ProductQuantity>
        <ProductPrice onClick={handleEditPrice}>
          {isEditingPrice ? (
            <Input value={price} onChange={(e) => setPrice(e.target.value)} />
          ) : (
            `Preço: ${product.price.toFixed(2)}`
          )}
        </ProductPrice>
      </InfoContainer>
      <RemoveButton onClick={() => setShowModal(true)}>Remover</RemoveButton>
      <Modal
        show={showModal}
        title="Confirmação de Remoção"
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          // Task #3: Remover produtos
          onRemoveProduct(product.id);
          setShowModal(false);
        }}
      >
        Tem certeza que deseja remover este produto?
      </Modal>
    </ProductContainer>
  );
};

export default ProductItem;
