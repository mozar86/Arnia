import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #708090; /* Verde claro */
  color: #6D4C41; /* Marrom claro */
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;

  input, select {
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #6D4C41;
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  select {
    background-color: #fff;
  }
`;
