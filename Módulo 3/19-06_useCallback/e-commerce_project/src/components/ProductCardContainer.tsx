import React from "react";
import ProductCardContainer from "./productCardContainer-style";

const ProductCard: React.FC = () => {
    return (
        <ProductCardContainer>
            <h2>Produto 1</h2>
            <p>Descrição do produto 1.</p>
            <button>Adicionar ao Carrinho</button>
        </ProductCardContainer>
    );
};

export default ProductCard;
