// import logo from './logo.svg';
import './App.css';
// import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import SignIn from './components/login/SignIn';
import AppBarMenü from './components/layout/AppBarMenu';
import SideMenü from './components/layout/SideMenu';
import ActuelCleaningTable from './components/actuel-cleaning-table/ActuelCleaningTable';
import ConfirmList from './components/shared/ConfirmList';
import CreateCleaningList from './components/cleaning-list/CreateCleaningList';
import TaskListContainer from './components/task/TaskListContainer';
import PersonListContainer from './components/person/PersonListContainer';
import AsistantListContainer from './components/asistant/AsistantListContainer';
import Loading from "./components/login/loading.js";
import { useAuth0 } from "@auth0/auth0-react";
import { TaskProvider } from './components/cleaning-list/TaskContext';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   width:"80vw",
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <TaskProvider>
        <main className="App">
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <Paper className={classes.paper}><AppBarMenü /></Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper className={classes.paper}><SideMenü /></Paper>
            </Grid>
            <Switch>
              <Grid item xs={9}>
                <Route exact path="/">
                  <Paper className={classes.paper}><ActuelCleaningTable /></Paper>
                </Route>
                <Route path="/persons">
                  <Paper className={classes.paper}><PersonListContainer /></Paper>
                </Route>
                <Route path="/confirmList">
                  <Paper className={classes.paper}><ConfirmList /></Paper>
                </Route>
                <Route path="/createCleaningList">
                  <Paper className={classes.paper}><CreateCleaningList /></Paper>
                </Route>
                <Route path="/tasks">
                  <Paper className={classes.paper}><TaskListContainer /></Paper>
                </Route>
                <Route path="/asistants">
                  <Paper className={classes.paper}><AsistantListContainer /></Paper>
                </Route>
              </Grid>
            </Switch>
          </Grid>
          {/* <SignIn/> */}

        </main>
      </TaskProvider>
    </Router>
  );
}

export default App;
