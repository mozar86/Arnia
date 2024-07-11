import styled from 'styled-components';

export const ItemContainer = styled.div`
  background-color: #C8E6C9; /* Verde claro */
  color: #6D4C41; /* Marrom claro */
  padding: 16px;
  margin: 8px 0;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

export const EditButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
`;
