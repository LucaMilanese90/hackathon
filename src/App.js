import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Questions from './components/Questions';
import Grid from './components/Grid';

function App() {
  const [position, setPosition] = useState([7, 2]);
  const [mapA, setMapA] = useState([[]]);

  return (
    <div className="App">
      <Questions
        setMapA={setMapA}
        position={position}
        setPosition={setPosition}
      />
      <Grid position={position} mapA={mapA} />
    </div>
  );
}

export default App;
