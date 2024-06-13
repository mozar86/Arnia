import React from "react";
import Card from "./components/Card";

function App() {

  return (
    <div className="App">
      <Card
        title={'Arnia Card'}
        subtitle={'Módulo 3'}
        content={'Este módulo estou aprendendo React'}
      />
      <Card
        title={'Turma 7'}
        subtitle={'Aluno'}
        content={'Mozar'}
      />
    </div>
  );
};

export default App;
