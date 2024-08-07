import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0.5rem 0;
  padding: 1rem;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #333;
`;

export const CardDescription = styled.p`
  color: #666;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  button {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
  }
`;
