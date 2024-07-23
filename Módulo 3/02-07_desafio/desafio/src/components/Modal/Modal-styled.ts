import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.modalBackground};
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalButton = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 8px 12px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
`;
