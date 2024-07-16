import React, { useState } from "react";
import { Product } from "../types";
import Modal from "../components/Modal/Modal";
import ProductList from "../components/ProductList/ProductList";

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [productToRemove, setProductToRemove] = useState<Product | null>(null);

    const handleRemoveProduct = (id: number) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const handleEditProduct = (id: number, quantity: number) {
        setProducts(products.map(product => product.id === id ? { ...product, quantity } : product))
    };

    const handleEditPrice = (id: number, price: number) => {
        setProducts(products.map(product => product.id === id ? { ...product, price } : product));
    };

    const openModal = (product: Product) {
        setProductToRemove(product);
        setModalOpen(true);
    };

    const confirmRemove = () => {
        if (productToRemove) {
            handleRemoveProduct(productToRemove.id);
        }
        setModalOpen(false);
        setProductToRemove(null);
    };

    return (
        <PageContainer>
            <Title>Controle de Estoque</Title>
            <ProductList 
                products={products}
                onRemoveProduct={openModal}
                onEditProduct={handleEditProduct}
                onEditPrice={handleEditPrice}
            />
            <Modal 
                isOpen={modalOpen}
                onConfirm={confirmRemove}
                onCancel={() => setModalOpen(false)}
            >
                <p>Tem certeza que deseja remover o produto {productToRemove?.name}?</p>
            </Modal>
        </PageContainer>
    );
};

export default HomePage;