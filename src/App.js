import React from 'react';
import './App.css';
import { Board } from './components/board/board';
import { getWords } from './services/wordsClient';
import { LoadingInfo } from './components/loadingInfo/loadingInfo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  async componentWillMount() {
    this.wordList = await getWords();
    this.setState({
      loading: false
    })
  }

  render() {
    if(this.state.loading === true) {
      return (
        <LoadingInfo introText="Welcome To" headingText="Qodenames"/>
      )
    } else {
      return (
        <Board masterWordList={this.wordList}/>
      )
    }
  }
}

export default App;
