import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import LoginButton from '../login/LoginButton'
import LogoutButton from '../login/LogoutButton'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },

}
));

const AppBarMenü = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <Avatar alt="-name-" src="" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome (..name..)
          </Typography>
          <Button color="inherit"><LoginButton /><LogoutButton /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarMenü;
