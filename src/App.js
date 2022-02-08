import "./App.css";
import Card from "./Card/Card";
import Cards from "./Cards/Cards";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards>
        <Card />
      </Cards>
    </div>
  );
}

export default App;
