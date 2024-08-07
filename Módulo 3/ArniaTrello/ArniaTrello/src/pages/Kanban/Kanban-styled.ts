import styled from 'styled-components';

export const KanbanContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
