import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import data from "./data.json";

function App() {
  const [cards, setCards] = useState(data);
  const [filters, setFilters] = useState([]);

  const allCards = cards.map((item) => (
    <Card item={item} key={item.id} onClick={(name) => addFilter(name)} />
  ));

  function addFilter(filter) {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter)) return prevFilters;
      return [...prevFilters, filter];
    });
  }

  function filterCards() {
    let filteredCards = [];

    filteredCards = data.filter(item => item.languages.some(language => filters.includes(language)))
    if(filteredCards.length === 0) return;
    setCards(filteredCards)
  }

  useEffect(function(){
  
    filterCards();
  },[filters]);

  return (
    <div className="App">
      <Header />
      <Cards>{allCards}</Cards>
    </div>
  );
}

export default App;
