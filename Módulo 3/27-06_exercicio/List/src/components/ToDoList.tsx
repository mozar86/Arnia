import { useState } from "react";
import NewListItem from "./list-items/new-list-items";


interface item {
    id: number;
    text: string;
}

const ToDoList = () => {
    const [value, setValue] = useState('')
    const [item, setItem] = useState<item[]>([])

    const handleChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)

    }
    
    const handleAddList = () => {
        setItem([
            ...item,
            {id: Date.now(), text: value}
        ])
    }

    const removeItemOfList = (id: number) => {
        setItem(item.filter((i) => i.id !==id))
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input type="text" onChange={handleChangeInput}/>
            <button onClick={handleAddList}>Adicionar</button>

            {item.map((i) => <NewListItem text={i.text} removeFunction={() => removeItemOfList(i.id)} id={0}/>)}
        </div>
    )
}

export default ToDoList