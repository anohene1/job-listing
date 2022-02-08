import "./App.css";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import data from './data.json'

const allCards = data.map(item => <Card item={item} />)

function App() {
  return (
    <div className="App">
      <Header />
      <Cards>
        {allCards}
      </Cards>
    </div>
  );
}

export default App;
