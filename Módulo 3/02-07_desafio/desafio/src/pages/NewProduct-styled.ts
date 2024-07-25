import styled from 'styled-components';

export const NewProductContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormField = styled.div`
  margin-bottom: 16px;
  
  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.inputText};
    font-size: 16px;
  }
  
  input:focus,
  select:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: ${({ theme }) => theme.labelText};
  }
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;
