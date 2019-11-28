import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineWidget from './Components/LineWidget';
import ListWidget from './Components/ListWidget';
import BarWidget from './Components/BarWidget';

function App() {
  return (
    <div className="App">
      <ListWidget></ListWidget>
      <BarWidget/>
      <LineWidget/>
    </div>
  );
}

export default App;
