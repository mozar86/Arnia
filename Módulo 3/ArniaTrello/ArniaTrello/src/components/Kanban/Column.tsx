import Card from './Card';
import { ColumnContainer, ColumnTitle } from './Column-styled';

type ColumnProps = {
  title: string;
  cards: Array<{ id: string; title: string; content: string }>;
};

const Column = ({ title, cards }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {cards.map(card => (
        <Card key={card.id} title={card.title} content={card.content} />
      ))}
    </ColumnContainer>
  );
};

export default Column;
