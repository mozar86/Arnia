import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;
