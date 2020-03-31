import React, { useState } from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import ScoreBoard from '../scoreboard/scoreboard';
import IdInput from '../idInput';
import DropdownMenu from '../dropdownMenu/dropdownMenu';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  spymasterButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      float: 'left',
      position: 'relative',
      marginRight: theme.spacing(1)
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
}));

const AppBarHeader = props => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (anchor, open) => event => {
    console.log('Drawer toggled');
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    };
    console.log('Drawer toggled with open = ' + open);
    setDrawerOpen(open);
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem 
          button key="spymaster" 
          onClick={(event) => {
            props.spymasterClicked(event);
            toggleDrawer("left", false)(event);
          }}
          style={{textAlign: 'center'}}
        >
            <ListItemText primary="Spymaster" />
        </ListItem>
        {renderDictionaryMenu()}
      </List>
    </div>
  );

  const renderSpymasterButton = () => (
    <Button 
      onClick={props.spymasterClicked}
      variant="outlined"
      color="inherit"
      className={classes.spymasterButton}
    >
        SpyMaster
    </Button>
  );

  const renderDictionaryMenu = () => (
    <DropdownMenu
      options={props.dictionaryOptions}
      onChange={(newDictionary) => props.onDictionaryChange(newDictionary)} 
      selectedOption={props.dictionarySelected} 
    />
  );

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <div className={classes.sectionMobile}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
              <MenuIcon onClick={toggleDrawer("left", true)}/>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer("left", false)}
                className={classes.drawer}
              >
                {list("left")}
              </Drawer>
            </IconButton>
            </div>
            <IdInput placeholder={props.gameId} IdChanged={props.gameIdChanged}/>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {renderDictionaryMenu()}
              {renderSpymasterButton()}
            </div>
            <ScoreBoard 
                colorTeamA={props.teamConfigs.firstTeam.color} 
                tilesRemainingTeamA={props.teamConfigs.firstTeam.remaining} 
                colorTeamB={props.teamConfigs.secondTeam.color} 
                tilesRemainingTeamB={props.teamConfigs.secondTeam.remaining} 
                className={classes.scoreboard}
              />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default (AppBarHeader);