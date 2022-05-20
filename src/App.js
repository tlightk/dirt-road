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
      {locationCards}
    </div>
  );
}

export default App;
