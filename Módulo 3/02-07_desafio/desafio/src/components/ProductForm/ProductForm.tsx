import { useState } from "react";
import { Button, FormContainer, Input } from "./ProductForm-styled";

interface ProductFormProps {
    onAddProduct: (product: {
        name: string;
        description: string;
        price: number;
        quantity: number;
    }) => void;
}

const ProductForm = ({onAddProduct}: ProductFormProps) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !price || !quantity) {
            alert('Nome, preço e quantidade são obrigatórios!');
        }

        onAddProduct({name, description, price: parseFloat(price), quantity: parseInt(quantity)});

        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
    }

    return (
        <FormContainer>
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
            <Button type="submit" onSubmit={handleSubmit}>Adicionar Produto</Button>
        </FormContainer>
    );
};

export default ProductForm;

