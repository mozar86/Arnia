import ProductItem from '../ProductItem/ProductItem';
import { ListContainer } from './ProductList-styled';

interface ProductListProps {
  products: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }[];
  onRemoveProduct: (id: number) => void;
  onEditProduct: (id: number) => void;
}

const ProductList = ({ products, onRemoveProduct, onEditProduct }: ProductListProps) => {
  return (
    <ListContainer>
      {products.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          onRemove={onRemoveProduct} 
          onEdit={onEditProduct}
        />
      ))}
    </ListContainer>
  );
};

export default ProductList;
