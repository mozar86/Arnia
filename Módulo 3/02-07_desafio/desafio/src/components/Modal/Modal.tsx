import React from 'react';
import { ModalContainer, ModalContent, ModalButton } from './Modal-styled';

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({ message, onConfirm, onCancel }: ModalProps) => {
  return (
    <ModalContainer>
      <ModalContent>
        <p>{message}</p>
        <ModalButton onClick={onConfirm}>Confirmar</ModalButton>
        <ModalButton onClick={onCancel}>Cancelar</ModalButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
