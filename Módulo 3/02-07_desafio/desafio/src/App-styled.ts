import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme === 'light' ? '#f0f0f0' : '#333'};
  color: ${({ theme }) => theme === 'light' ? '#000' : '#fff'};
  min-height: 100vh;
`;

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme === 'light' ? '#fff' : '#444'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    margin: 0;
  }
`;

export const ThemeButton = styled.button`
  background-color: ${({ theme }) => theme === 'light' ? '#f9a826' : '#ffa500'};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme === 'light' ? '#ffa500' : '#f9a826'};
  }
`;
