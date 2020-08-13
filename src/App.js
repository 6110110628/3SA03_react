import React from 'react';
import './App.css';
//import WordCard from './WordCard';
import CharacterCard from './CharacterCard';

const word = "Hello";
function App() {
  return (
    <div>
      <CharacterCard value="h"/>
      <CharacterCard value="i"/>
    </div>

  );
   
}

export default App;
