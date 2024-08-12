import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  changeColumnCard,
  createCard,
  deleteCard,
  getCards,
  updateCard,
} from "../services/api";
import { Card } from "../components/Card";
import HomeHeader from "../components/HomeHeader";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const Column = styled.div`
  flex: 1;
  padding: 16px;
  background-color: #eaeaea;
  border-radius: 8px;
  margin: 0 8px;
  height: 80vh;
  overflow-y: auto;
`;


const Home = () => {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    const fetchedCards = await getCards();
    setCards(fetchedCards);
  };

  const handleCreateCard = async (title: string, content: string) => {
    await createCard(title, content);
    loadCards();
  };

  const handleEditCard = async (id: number, title: string, content: string) => {
    await updateCard(id, title, content);
    loadCards();
  };

  const handleDeleteCard = async (id: number) => {
    await deleteCard(id);
    loadCards();
  };

  const handleMoveCard = async (id: number, column: string) => {
    await changeColumnCard(id, column);

    loadCards();
  };

  return (
    <>
      <HomeHeader />
      <HomeContainer>
        <Column>
          <h2>Novo</h2>
          <Card onCreate={handleCreateCard} isNewCard />
        </Column>

        <Column>
        <h2>Para fazer</h2>
          {cards
            .filter((card) => card.column === "TODO")
            .map((card) => (
              <Card
                key={card._id}
                id={card._id}
                title={card.title}
                content={card.content}
                column={card.column}
                onEdit={handleEditCard}
                onDelete={handleDeleteCard}
                onMove={handleMoveCard}
              />
            ))}
        </Column>

        <Column>
          <h2>Fazendo</h2>
          {cards
            .filter((card) => card.column === "DOING")
            .map((card) => (
              <Card
                key={card._id}
                id={card._id}
                title={card.title}
                content={card.content}
                column={card.column}
                onEdit={handleEditCard}
                onDelete={handleDeleteCard}
                onMove={handleMoveCard}
              />
            ))}
        </Column>

        <Column>
          <h2>Concluído</h2>
          {cards
            .filter((card) => card.column === "DONE")
            .map((card) => (
              <Card
                key={card._id}
                id={card._id}
                title={card.title}
                content={card.content}
                column={card.column}
                onEdit={handleEditCard}
                onDelete={handleDeleteCard}
                onMove={handleMoveCard}
              />
            ))}
        </Column>
      </HomeContainer>
    </>
  );
};

export default Home;
