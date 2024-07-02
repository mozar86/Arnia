

type NewListProps = {
    id?: number;
    text: string;
    removeFunction: (i: number) => void
}

export function NewListItem({text, id, removeFunction}: NewListProps) {


    return (
        <ul>
            <li>{text} <button type="button" onClick={() => removeFunction(id!)}>Excluir</button></li>
        </ul>
    )
}

export default NewListItem