import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background: ${({ theme }) => theme.productBackground};
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

export const ProductDescription = styled.p`
  margin: 5px 0;
  color: ${({ theme }) => theme.text};
`;

export const ProductQuantity = styled.span`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const ProductCategory = styled.span`
  color: ${({ theme }) => theme.text};
`;

export const Input = styled.input`
  width: 80px;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const RemoveButton = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
`;
