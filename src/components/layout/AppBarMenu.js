import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import LoginButton from '../login/LoginButton'
import LogoutButton from '../login/LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";
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
  const { user } = useAuth0();
  if (user === undefined) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar >
            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
              < Avatar alt="-name-" src="https://goktemtemizlik.com/wp-content/uploads/2018/11/esenyurt-temizlik.png" />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Welcome
            </Typography>
            <LoginButton />
            <LogoutButton />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  else {
    const { name, picture } = user;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar >
            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
              <img
                src={picture}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
              />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Welcome {<p>{name}</p>}
            </Typography>
            <LoginButton />
            <LogoutButton />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default AppBarMenü;
