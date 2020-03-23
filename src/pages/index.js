import React from "react"
import generateRandomWords, { createColorList } from '../services/randomWordGenerator';
import { Board } from '../components/board/board';
import { Header } from '../components/header/header';

const words = Object.keys(generateRandomWords());
const colors = createColorList(Math.random() >= 0.5);

const IndexPage = () => (
  <div>
    <Board colorList={colors} wordList={words}/>
  </div>

)

export default IndexPage
