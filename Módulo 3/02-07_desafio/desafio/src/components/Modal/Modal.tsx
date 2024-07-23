import React from 'react';
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalButton } from './Modal-styled';

interface ModalProps {
  show: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, title, children, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <ModalButton onClick={onClose}>Cancelar</ModalButton>
          <ModalButton onClick={onConfirm}>Confirmar</ModalButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
