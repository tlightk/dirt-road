import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import LocationCard from "./Components/LocationCard";
import data from "./data";

function App() {
  const locationCards = data.map((location) => (
    <LocationCard key={location.id} {...location} />
  ));

  return (
    <div className="App">
      <Navbar />
      <div className="cards-container">{locationCards}</div>
    </div>
  );
}

export default App;
