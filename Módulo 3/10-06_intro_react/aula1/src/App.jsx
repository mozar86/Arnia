import List from './components/List.jsx';
import './App.css';
import UsersDisplay from './components/UsersDisplay.jsx';

function App() {
  const sum = (number1, number2) => {
    return console.log(number1 + number2);
  }

sum(2, 3)

return (
  <>
    <h1>Aula 3 de React</h1>
    <List />
    <UsersDisplay/>
  </>
)
}

export default App;
