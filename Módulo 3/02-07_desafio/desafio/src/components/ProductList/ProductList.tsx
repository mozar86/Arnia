import { Product } from "../../types";
import ProductItem from "../ProductItem/ProductItem";

// Task 1: Exibir uma lista de produtos
type ProductListProps = {
  products: Product[];
  onRemoveProduct: (id: number) => void;
  onEditProduct: (id: number, quantity: number) => void;
};

const ProductList = ({ products, onRemoveProduct, onEditProduct }: ProductListProps) => {
  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onRemove={onRemoveProduct}
          onEdit={onEditProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
