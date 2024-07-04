import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #fff;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
  margin-right: 16px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 4px 0;
  }
`;

export const RemoveButton = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

export const EditButton = styled.button`
  background-color: orange;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background-color: darkorange;
  }
`;
