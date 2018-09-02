import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterSheet from "./pages/CharacterSheet";

class App extends Component {
  render() {
    return (
      <div className="App">
          <CharacterSheet/>
      </div>
    );
  }
}

export default App;
