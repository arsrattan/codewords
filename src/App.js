import React from 'react';
import './App.css';
import Game from './components/game';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2b518a",
    },
    text: {
      default: "#fff"
    }
  },
});

const App = props => {
    return (
      <React.Fragment key={"game"}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Game />
        </ThemeProvider>
      </React.Fragment>
    )
}

export default React.memo(App);
