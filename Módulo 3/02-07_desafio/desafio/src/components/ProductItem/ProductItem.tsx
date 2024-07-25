import React, { useState } from 'react';
import { Product } from '../../types';

// Task 3: Remover produtos (vender produtos)
// Task 4: Atualizar a quantidade de um produto
// Desafio 10.1: Trocar o window.confirm da confirmação de remoção de produto para um modal personalizado
// Desafio 10.4: Modal de confirmação de venda

type ProductItemProps = {
  product: Product;
  onRemove: (id: number) => void;
  onEdit: (id: number, quantity: number) => void;
};

const ProductItem = ({ product, onRemove, onEdit }: ProductItemProps) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleRemove = () => {
    setShowModal(true);
  };
 
  const handleConfirmRemove = () => {
    onRemove(product.id);
    setShowModal(false);
  };

  const handleEdit = () => {
    onEdit(product.id, quantity);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Preço: {product.price}</p>
      <p>Quantidade: {product.quantity}</p>
      <p>Categoria: {product.category}</p>
      <button onClick={handleRemove}>Remover</button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleEdit}>Atualizar Quantidade</button>

      {showModal && (
        <div className="modal">
          <p>Tem certeza que deseja remover este produto?</p>
          <button onClick={handleConfirmRemove}>Sim</button>
          <button onClick={() => setShowModal(false)}>Não</button>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
