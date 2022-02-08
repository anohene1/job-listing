import "./App.css";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";

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
