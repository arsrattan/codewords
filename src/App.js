import React from 'react';
import './App.css';
import { Board } from './components/board/board';
import generateRandomWords, {
    createColorList
} from './services/randomWordGenerator';


const words = Object.keys(generateRandomWords());
const colors = createColorList(Math.random() >= 0.5);

function App() {
  return (
    <div>
        <Board colorList={colors} wordList={words}/>
    </div>
  );
}

export default App;
