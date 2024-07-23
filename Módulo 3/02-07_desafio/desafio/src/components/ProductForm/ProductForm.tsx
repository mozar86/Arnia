import React, { useState } from 'react';
import { Form, Input, Button, Label, Select, Option } from './ProductForm-styled';
import { Product } from '../../types';

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('Comida');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !price || !quantity) return;

    // Task #2: Adicionar novos produtos
    const newProduct: Product = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
      category,
      isFood: false,
      isDrink: false
    };

    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setCategory('Comida');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Nome do Produto</Label>
      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <Label htmlFor="description">Descrição</Label>
      <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <Label htmlFor="price">Preço</Label>
      <Input id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

      <Label htmlFor="quantity">Quantidade</Label>
      <Input id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

      <Label htmlFor="category">Categoria</Label>
      <Select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <Option value="Comida">Comida</Option>
        <Option value="Bebida">Bebida</Option>
        <Option value="Não comestível">Não comestível</Option>
      </Select>

      <Button type="submit">Adicionar Produto</Button>
    </Form>
  );
};

export default ProductForm;
