import React from 'react';
import { ModalBackground, ModalContainer, ModalButton } from './Modal-styled';

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <p>{message}</p>
        <ModalButton onClick={onConfirm}>Confirmar</ModalButton>
        <ModalButton onClick={onCancel}>Cancelar</ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
