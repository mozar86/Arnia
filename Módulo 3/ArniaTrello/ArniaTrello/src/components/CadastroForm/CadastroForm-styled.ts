import styled from 'styled-components';

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 961px;
  width: 567px;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background: #3A72F8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #fff;
`;

export const Input = styled.input`
  width: 17em;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  border-radius: 25px;
  border: none;
`;

export const Button = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #0A2668;
  border: none;
  border-radius: 25px;
  width: 209px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 0.9em;
  margin-top: 0.5rem;
`;
