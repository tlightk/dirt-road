import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import LocationCard from './Components/LocationCard';
import data from "./data";

function App() {

  return (
    <div className="App">
      <Navbar />
      <LocationCard />

    </div>
  );
}

export default App;
