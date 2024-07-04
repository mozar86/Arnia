import { ItemContainer, ItemDetails, RemoveButton, EditButton } from './ProductItem.styled';

interface ProductItemProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        quantity: number;
    };
    onRemove: (id: number) => void;
    onEdit: (id: number) => void;
}

const ProductItem = ({product, onRemove, onEdit}: ProductItemProps) => {
    
    return (
        <ItemContainer>
            <ItemDetails>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Preço: ${product.price}</p>
                <p>Quantidade: {product.quantity}</p>
            </ItemDetails>
        <EditButton onClick={() => onEdit(product.id)}>Editar</EditButton>
        <RemoveButton onClick={() => onRemove(product.id)}>Remover</RemoveButton>
    </ItemContainer>
    )
};

export default ProductItem;