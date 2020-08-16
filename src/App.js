import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word1 = "Hello";
const word2 = "Please";
const word3 = "Simple";
const word4 = "Exam";
const word5 = "Thanks";
function App() {
  return (

    <body>
      <center><br></br><h1>Welcome to Spell Word Game!</h1><br></br></center>

    <div>
      <WordCard value={word1}/>
      <WordCard value={word2}/>
      <WordCard value={word3}/>
      <WordCard value={word4}/>
      <WordCard value={word5}/>
    </div>

    </body>
    );
   

}

export default App;
