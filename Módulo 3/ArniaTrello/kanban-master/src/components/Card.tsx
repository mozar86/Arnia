import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

const CardContainer = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px;
`;

const CardContent = styled.p`
  margin: 0 0 16px;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

interface CardProps {
  id?: number;
  title?: string;
  content?: string;
  column?: string;
  isNewCard?: boolean;
  onCreate?: (title: string, content: string) => void;
  onEdit?: (id: number, title: string, content: string) => void;
  onDelete?: (id: number) => void;
  onMove?: (id: number, column: string) => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  title,
  content,
  column,
  isNewCard = false,
  onCreate,
  onEdit,
  onDelete,
  onMove,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title || "");
  const [editedContent, setEditedContent] = useState(content || "");

  return (
    <CardContainer>
      {isNewCard ? (
        <CardContainer>
          <Input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Título"
            label={""}
          />
          <Input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="Conteúdo"
            label={""}
          />
          <Button onClick={() => onCreate?.(editedTitle, editedContent)}>
            Adicionar Tarefa
          </Button>
        </CardContainer>
      ) : (
        <>
          {isEditing ? (
            <>
              <Input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="Novo título"
                label={""}
              />
              <Input
                type="text"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                placeholder="Novo conteúdo"
                label={""}
              />
              <Button
                onClick={() => {
                  onEdit?.(id!, editedTitle, editedContent);
                  setIsEditing(false);
                }}
              >
                Salvar
              </Button>
            </>
          ) : (
            <>
              <CardTitle>{title}</CardTitle>
              <CardContent>{content}</CardContent>
              <CardActions>
                <Button onClick={() => setIsEditing(true)}>Editar</Button>
                <Button onClick={() => onDelete?.(id!)}>Excluir</Button>
                {column === "TODO" && (
                  <Button onClick={() => onMove?.(id!, "DOING")}>
                    Mover para DOING
                  </Button>
                )}
                {column === "DOING" && (
                  <>
                    <Button onClick={() => onMove?.(id!, "TODO")}>
                      Mover para TODO
                    </Button>
                    <Button onClick={() => onMove?.(id!, "DONE")}>
                      Mover para DONE
                    </Button>
                  </>
                )}
                {column === "DONE" && (
                  <Button onClick={() => onMove?.(id!, "DOING")}>
                    Mover para DOING
                  </Button>
                )}
              </CardActions>
            </>
          )}
        </>
      )}
    </CardContainer>
  );
};
