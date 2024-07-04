import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #222;
  color: #fff;
  min-height: 100vh;
  padding: 16px;

  h1 {
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 32px;
  }
`;
