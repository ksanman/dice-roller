
import './App.css';
import './roller/roller'
import Roller from './roller/roller';
import Results from './results/results';
import { useState } from 'react';
function App() {

  const [results, setResults] = useState([]);

  const updateResults = (results) => {
    setResults(results);
  }

  return (
    <div className="App">
      <div className="app-header">
        <a href="./">Dice Roller</a>
      </div>
      <div className="body">
        <Roller onDiceRoll={(results) => updateResults(results)} />
        <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
