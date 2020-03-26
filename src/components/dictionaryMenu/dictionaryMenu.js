import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './dictionaryMenu.module.css';

export function DictionaryMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (e) => {
        console.log(e.currentTarget.id);
      setAnchorEl(null);
    };
  
    return (
      <div className={styles.dictionaryMenu}>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Game Words
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem id="standardOption" onClick={handleClose}>Standard</MenuItem>
          <MenuItem id="blockbusterMoviesOption" onClick={handleClose}>Blockbuster Movies</MenuItem>
        </Menu>
      </div>
    );
  }