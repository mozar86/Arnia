import { useEffect, useState } from "react";
import { BoardContainer } from "./Board-styled";
import Column from './Column';
import { getKanbanData } from "../../services/kanbanService";

const Board = () => {
    const [columns, setColumns] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getKanbanData();
            setColumns(data);
        };
        fetchData();
    }, []);

    return (
        <BoardContainer>
            {columns.map(column => (
                <Column key={Column.id} title={columns.title} cards={columns.cards} />
            ))}
        </BoardContainer>
    );
};

export default Board;

/*
            <Column title="New" />
            <Column title="To Do" />
            <Column title="Doing" />
            <Column title="Done" />
*/