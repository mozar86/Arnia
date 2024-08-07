import Board from '../../components/Kanban/Board';
import { KanbanContainer, Header, HeaderTitle, UserActions } from './Kanban-styled';

const Kanban = () => {
  return (
    <KanbanContainer>
      <Header>
        <HeaderTitle>Arnia Trello</HeaderTitle>
        <UserActions>
          <span>Olá, Alberto</span>
          <a href="/logout">Sair</a>
        </UserActions>
      </Header>
      <Board />
    </KanbanContainer>
  );
};

export default Kanban;
