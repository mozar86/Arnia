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