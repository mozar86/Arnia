import React, { useState } from 'react';
import { Product } from '../types';
import { NewProductContainer } from './NewProduct-styled';

type NewProductProps = {
  onAddProduct: (product: Product) => void;
};

const NewProduct: React.FC<NewProductProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description && price > 0 && quantity > 0) {
      const newProduct: Product = {
        id: Date.now(),
        name,
        description,
        price,
        quantity,
        category,
        isFood: false,
        isDrink: false
      };
      onAddProduct(newProduct);
      setName('');
      setDescription('');
      setPrice(0);
      setQuantity(0);
      setCategory('');
    }
  };

  return (
    <NewProductContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecionar Categoria</option>
          <option value="Comida">Comida</option>
          <option value="Bebida">Bebida</option>
          <option value="NaoComestivel">Não Comestível</option>
        </select>
        <button type="submit">Adicionar Produto</button>
      </form>
    </NewProductContainer>
  );
};

export default NewProduct;
