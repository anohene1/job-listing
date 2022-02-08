import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import FilterBox from "./components/FilterBox/FilterBox"
import Filter from "./components/Filter/Filter.jsx"
import data from "./data.json";

function App() {
  const [cards, setCards] = useState(data);
  const [filters, setFilters] = useState([]);

  const allCards = cards.map((item) => (
    <Card item={item} key={item.id} onClick={(name) => addFilter(name)} />
  ));
  const allFilters = filters.map((filter, index) => (
    <Filter key={index} name={filter} onClick={(name) => removeFilter(name)}/>
  ))

  function addFilter(filter) {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter)) return prevFilters;
      return [...prevFilters, filter];
    });
  }

  function removeFilter(filter) {
    setFilters(prevFilters => {
      return prevFilters.filter(item => item !== filter)
    })
  }

  function filterCards() {
    let filteredCards = [];

    filteredCards = data.filter(item => item.languages.some(language => filters.includes(language)))
    if(filteredCards.length === 0) return;
    setCards(filteredCards)
  }

  useEffect(function(){
  
    filterCards();
    if(filters.length === 0) {
      setCards(data)
    }
  },[filters]);

  return (
    <div className="App">
      <Header />
      { allFilters.length !== 0 && <FilterBox>
        {allFilters}
      </FilterBox>}
      <Cards>{allCards}</Cards>
    </div>
  );
}

export default App;
