import styled from 'styled-components';

export const ItemContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 16px;
  margin: 8px 0;
  border-radius: 4px;
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
  margin-left: 8px;
`;
