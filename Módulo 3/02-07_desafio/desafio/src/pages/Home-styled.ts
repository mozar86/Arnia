import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const AddProductButton = styled.button`
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

export const BalanceContainer = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.balanceText};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
  font-size: 16px;
  margin-bottom: 20px;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;

export const CategorySelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
  font-size: 16px;
  margin-bottom: 20px;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;
