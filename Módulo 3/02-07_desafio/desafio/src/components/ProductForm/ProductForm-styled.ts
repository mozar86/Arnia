import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #444;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  color: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Input = styled.input`
  background-color: #ff8c00;
  color: #fff;
  border: none;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 1rem;

  @media (min-width: 768px) {
    margin-right: 8px;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  background-color: orange;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: darkorange;
  }
`;
