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
import AddNewTask from './components/task/AddNewTask';
import RegisterPerson from './components/shared/RegisterPerson';
import AddNewAsistant from './components/asistant/AddNewAsistant' ;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"80vw",
  },
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
    <main className="App">
      <Grid  container spacing={2} >
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
              <Route path="/registerPerson">
                <Paper className={classes.paper}><RegisterPerson/></Paper>
              </Route>
              <Route path="/confirmList">
                <Paper className={classes.paper}><ConfirmList/></Paper>
              </Route>
              <Route path="/createCleaningList">
                <Paper className={classes.paper}><CreateCleaningList/></Paper>
              </Route>
              <Route path="/addNewTask">
                <Paper className={classes.paper}><AddNewTask/></Paper>
              </Route>
              <Route path="/addNewAsistant">
                <Paper className={classes.paper}><AddNewAsistant/></Paper>
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
