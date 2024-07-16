import React, { useState } from "react";
import { FormContainer, Label, Input, Select, Button } from './ProductForm-styled';
import { Product } from "../../types";

interface ProductFormProps {
    onAddProduct: (product: Product) => void;
  }

const ProductForm: React.FC<ProductFormProps> = ({onAddProduct}: ProductFormProps) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [isFood, setIsFood] = useState(false);
    const [isDrink, setIsDrink] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !price || !quantity) {
            alert('Nome, preço e quantidade são obrigatórios!');
        }

        const newProduct: Product = {
            id: Date.now(),
            name,
            description,
            price: parseFloat(price),
            quantity: parseInt(quantity, 10),
            isFood,
            isDrink
        }

        onAddProduct(newProduct);

        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setIsFood(false);
        setIsDrink(false);
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input 
                type="text" 
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Input 
                type="number" 
                placeholder="Preço"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <Input
                type="number" 
                placeholder="Quantidade"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <label>
                <input 
                    type="checkbox"
                    checked={isFood} 
                    onChange={(e) => setIsFood(e.target.checked)}
                /> Comida
            </label>
            <label>
                <input 
                    type="checkbox"
                    checked={isDrink} 
                    onChange={(e) => setIsDrink(e.target.checked)}
                /> Bebida
            </label>
            <Button type="submit">Adicionar Produto</Button>
        </FormContainer>
    );
};

export default ProductForm;

