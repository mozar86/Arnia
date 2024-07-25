import React, { useState } from 'react';
import { Product } from '../../types';

type ProductFormProps = {
  onAddProduct: (product: Product) => void;
};

const ProductForm = ({ onAddProduct }: ProductFormProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || price <= 0 || quantity <= 0) {
      alert('Nome, preço e quantidade são obrigatórios e devem ser maiores que zero.');
      return;
    }
    const newProduct: Product = {
      id: Date.now(), 
      name,
      description,
      price,
      quantity,
      category,
      isFood: category === 'Comida',
      isDrink: category === 'Bebida',
    };
    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice(0);
    setQuantity(0);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Descrição:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Preço:
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </label>
      <label>
        Quantidade:
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      </label>
      <label>
        Categoria:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione</option>
          <option value="Comida">Comida</option>
          <option value="Bebida">Bebida</option>
          <option value="NaoComestivel">Não comestível</option>
        </select>
      </label>
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProductForm;
