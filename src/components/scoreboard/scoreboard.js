import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(0.3),
        fontWeight: "bold"
      },
    }
  }));

const ScoreBoard = props => {
    console.log(`Received props: ${props.tilesRemainingTeamA}`);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar style={{backgroundColor: props.colorTeamA}}>{props.tilesRemainingTeamA}</Avatar>
            <Avatar style={{backgroundColor: props.colorTeamB}}>{props.tilesRemainingTeamB}</Avatar>
        </div>
    )
}

export default React.memo(ScoreBoard, (prevProps, newProps) => {
  return prevProps.colorTeamA === newProps.colorTeamA && prevProps.tilesRemainingTeamA === newProps.tilesRemainingTeamA && prevProps.colorTeamB === newProps.colorTeamB && prevProps.tilesRemainingTeamB === newProps.tilesRemainingTeamB;
})