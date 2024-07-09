import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background: #333;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: white;
`;

export const ModalButton = styled.button`
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ff6600;
  color: white;

  &:hover {
    background-color: #e65c00;
  }
`;
