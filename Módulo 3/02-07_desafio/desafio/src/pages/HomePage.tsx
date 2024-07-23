import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';
import { PageContainer, AddProductButton, BalanceContainer } from './HomePage-styled';

interface HomeProps {
  products: Product[];
  onRemoveProduct: (id: number) => void;
  onEditProduct: (id: number, newQuantity: number) => void;
  onEditPrice: (id: number, newPrice: number) => void;
}

const Home: React.FC<HomeProps> = ({ products, onRemoveProduct, onEditProduct, onEditPrice }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <PageContainer>
      <BalanceContainer>Saldo: 100 moedas</BalanceContainer> {/* Task #10.3: Mostrar saldo */}
      <button onClick={toggleTheme}>Toggle Theme</button> {/* Task #5: Implementar tema claro/escuro */}
      <ProductList
        products={products}
        onRemoveProduct={onRemoveProduct}
        onEditProduct={onEditProduct}
        onEditPrice={onEditPrice}
      />
      <Link to="/add">
        <AddProductButton>Adicionar Produto</AddProductButton>
      </Link>
    </PageContainer>
  );
};

export default Home;
