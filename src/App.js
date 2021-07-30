import React from 'react';
import './App.css';
import HomePage from './components/home-page/HomePage';
import MainApp from './MainApp';
import Loading from "./components/login/loading.js";
import { useAuth0 } from "@auth0/auth0-react";

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