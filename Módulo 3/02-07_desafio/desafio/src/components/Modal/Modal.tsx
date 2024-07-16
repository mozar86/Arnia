import React from 'react';
import { ModalBackground, ModalContainer, ModalButton } from './Modal-styled';

interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onCancel, onConfirm, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContainer>
        {children}
        <ModalButton onClick={onConfirm}>Confirmar</ModalButton>
        <ModalButton onClick={onCancel}>Cancelar</ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
