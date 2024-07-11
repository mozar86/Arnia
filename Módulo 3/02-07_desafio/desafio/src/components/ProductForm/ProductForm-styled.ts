import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o formulário */
  gap: 8px;
  width: 100%;
  max-width: 450px; /* Ajusta a largura máxima */
`;

export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  color: #6D4C41; /* Marrom claro */
  margin: 5px;
  width: 200px;
  height: 20px; /* Menor que os inputs */
  padding: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #FF6600; /* Laranja */
  border-radius: 4px;
  background-color: #fff;
  color: #6D4C41; /* Marrom claro */
  font-family: 'Poppins', sans-serif;
  width: 450px; /* Ajusta a largura */ /* Ajusta a altura */
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #FF6600; /* Laranja */
  border-radius: 4px;
  background-color: #fff;
  color: #6D4C41; /* Marrom claro */
  font-family: 'Poppins', sans-serif;
  width: 400px; /* Menor que os inputs */
  height: 36px; /* Ajusta a altura */
`;

export const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #FF6600; /* Laranja */
  color: #fff;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  width: 400px; /* Mantém a largura do botão */
  height: 36px; /* Mantém a altura do botão */

  &:hover {
    background-color: #E65C00; /* Laranja mais escuro */
  }
`;
