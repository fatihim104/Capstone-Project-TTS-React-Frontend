// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import SignIn from './components/login/SignIn';
import HomePage from './components/home-page/HomePage';
import MainApp from './MainApp';
// import AppBarMenü from './components/layout/AppBarMenu';
// import SideMenü from './components/layout/SideMenu';
// import ActuelCleaningTable from './components/actuel-cleaning-table/ActuelCleaningTable';
// import CreateCleaningList from './components/cleaning-list/CreateCleaningList';
// import TaskListContainer from './components/task/TaskListContainer';
// import PersonListContainer from './components/person/PersonListContainer';
// import AsistantListContainer from './components/asistant/AsistantListContainer';
import Loading from "./components/login/loading.js";
import { useAuth0 } from "@auth0/auth0-react";
// import { TaskProvider } from './components/cleaning-list/TaskContext';

// const useStyles = makeStyles((theme) => ({
//   // root: {
//   //   flexGrow: 1,
//   //   width:"80vw",
//   // },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

const App = () => {
  
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <Loading />;
  } else if (isAuthenticated){
    return    <MainApp /> 
  }
  return (    
    <HomePage /> 
  )  
}

export default App;
