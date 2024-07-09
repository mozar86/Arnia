import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ff6600;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
`;

export const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #ff6600;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }
`;
