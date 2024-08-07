import { CardContainer, CardTitle, CardDescription, CardActions } from './Card-styled';

type CardProps = {
  title: string;
  content: string;
};

const Card = ({ title, content }: CardProps) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{content}</CardDescription>
      <CardActions>
        {/* Falta adicionar os botões */}
        <button>Delete</button>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
