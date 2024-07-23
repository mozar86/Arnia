import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

export const AddProductButton = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 20px;
`;

export const BalanceContainer = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;
