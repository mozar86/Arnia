/*
Crie um componente que mantém um contador. Cada vez que o contador for atualizado, o título da página deve ser atualizado para mostrar o valor atual do contador.

Passos:
Crie um componente funcional chamado Counter.

Use o hook useState para criar um estado count e uma função setCount para atualizá-lo.

Use o hook useEffect para atualizar o título da página sempre que o valor de count mudar.

Adicione um botão que, quando clicado, incrementa o valor de count.

*/

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

  },[])

  return (
   <div>
     <h2>`Título atualizado após o contador ${count} mudar`</h2>
   </div>
  )
}

export default App
