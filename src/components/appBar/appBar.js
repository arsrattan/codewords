import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));
//makeStyles(theme => ({}));

export function AppBarHeader() {
  const classes = useStyles();

  const renderSearchBar = () => (
      <div>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput
            }}
            inputProps={{
                'aria-label': 'search'
            }}
          />
      </div>
  )

  return (
    <div className={classes.header}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
            <IconButton className={classes.menuButton}>
                <MenuIcon/>
            </IconButton>
            <Typography>
                Qodenames
            </Typography>
            <Button>
                Game Mode
            </Button>
            {
                renderSearchBar()
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}