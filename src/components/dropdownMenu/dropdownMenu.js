import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  buttonProps: {
    color: theme.primary
  },
}));


const DropdownMenu = props => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(props.options.indexOf(props.selectedOption));

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickMenuItem = (optionSelected, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    props.onChange(optionSelected)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = props.options.map((name, index) => {
    return (
    <MenuItem 
      onClick={() => handleClickMenuItem(name, index)} 
      key={name}
      disabled={index === selectedIndex}
      selected={index === selectedIndex}
    >
      {name}
    </MenuItem>
    )
  })

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="dictionary list">
      <ListItem
        button
        aria-haspopup="true"
        aria-controls="dictionary-menu-list"
        aria-label="words to play the game with"
        onClick={handleClickListItem}
      >
        <ListItemText primary="Game Mode" secondary={props.selectedOption} style={{textAlign: "center"}} className={classes.buttonProps} secondaryTypographyProps={{ color: "#fff" }}/>
      </ListItem>
      </List>
      <Menu
        id="dictionary-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems}
        <MenuItem 
          onClick={() => handleClickMenuItem("Create Your Own", props.options.length)} 
          key="createYourOwn"
          disabled={props.options.length === selectedIndex}
          selected={props.options.length === selectedIndex}
        >
          Create Your Own
        </MenuItem>
      </Menu>
    </div>
  );
}

export default React.memo(DropdownMenu);