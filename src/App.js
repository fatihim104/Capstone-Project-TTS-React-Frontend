// import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import SignIn from './components/login/SignIn';
import AppBarMenü from './components/layout/AppBarMenu';
import SideMenü from './components/layout/SideMenu';
import ActuelCleaningTable from './components/actuel-cleaning-table/ActuelCleaningTable';
import ConfirmList from './components/shared/ConfirmList';
import CreateCleaningList from './components/shared/ConfirmList';
import TaskListContainer from './components/task/TaskListContainer';
import PersonListContainer from './components/person/PersonListContainer';
import AsistantListContainer from './components/asistant/AsistantListContainer' ;

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

  return ( 
    <Router>    
    <main  className="App">
      <Grid container spacing={2} >
        <Grid item xs={12}>
            <Paper className={classes.paper}><AppBarMenü/></Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}><SideMenü/></Paper>
          </Grid>
          <Switch>
            <Grid item xs={9}>
              <Route exact path="/">
                <Paper className={classes.paper}><ActuelCleaningTable/></Paper>
              </Route>
              <Route path="/persons">
                <Paper className={classes.paper}><PersonListContainer/></Paper>
              </Route>
              <Route path="/confirmList">
                <Paper className={classes.paper}><ConfirmList/></Paper>
              </Route>
              <Route path="/createCleaningList">
                <Paper className={classes.paper}><CreateCleaningList/></Paper>
              </Route>
              <Route path="/tasks">
                <Paper className={classes.paper}><TaskListContainer/></Paper>
              </Route>
              <Route path="/asistants">
                <Paper className={classes.paper}><AsistantListContainer/></Paper>
              </Route>
            </Grid>
          </Switch>
      </Grid>
        {/* <SignIn/> */}
        
    </main>
  </Router>   
  );
}

export default App;
