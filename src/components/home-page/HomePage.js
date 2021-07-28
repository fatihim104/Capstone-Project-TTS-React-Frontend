import React from 'react';
import './style.css';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './About';
import HowWorks from './HowWorks';
//images
import House from './img/House.jpg';
import Brush from './img/brush.jpg';
import Buket from './img/cleaning-buket.png';
import Dishes from './img/dishes.png';
import Time from './img/time.png';
import Dust from './img/dust.png';
import Gloves from './img/gloves.png';
import Recycle from './img/recycle.png';
import Mop from './img/mop.jpg';


const useStyles = makeStyles({
    root: {
      width: '100%',
      color: '#fff',
      fontWeight:'bold',
      paddingBottom:'1rem',
    },
    login: {
        width: '10%',
        backgroundColor: '#cb32fa',
    },
    about: {
        color:'#ffeb3b',
        fontWeight: 'bold',
        fontSize:'18px',
        position:'absolute',
        right:'3rem',
        top:'2rem'
    },
    explain: {
        color:'#ffeb3b',
        fontWeight: 'bold',
        fontSize:'18px',
        position:'absolute',
        right:'9rem',
        top:'2rem'
    },
    menuLogin: {
        color:'#ffeb3b',
        fontWeight: 'bold',
        fontSize:'18px',
        position:'absolute',
        right:'19rem',
        top:'2rem'
    },

  });



const HomePage = () => {
    const classes = useStyles();
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    
    return(
        <Router>
            <section>
            <Switch>          
                <Route exact path="/">           
                    <Typography  >
                        <Link to="/how-works">
                            <Button className={classes.explain}>
                                HOW WORKS
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button className={classes.about}>
                                ABOUT
                            </Button>
                        </Link>

                        <Button className={classes.menuLogin} onClick={() => loginWithRedirect()}>
                            LOGIN
                        </Button>
                        
                    </Typography>
                    <Typography className={classes.root} align='center' variant="h2" gutterBottom>
                        First Smile, Then Work...
                    </Typography>
                    
                    <div className="home">          
                        <img src={House} alt="House" />
                    </div>
                    <Button className={classes.login} variant="contained" color="secondary" 
                                                            onClick={() => loginWithRedirect()}>
                        LOGIN
                    </Button>
                    <div className="bubbles-left"></div>
                    <div className="bubbles-right"></div>
                    <div className="bubbles-middle-left"></div>
                    <div className="bubbles-middle-right"></div>
                    <div className="cleaning-tools"><img src={Brush} alt="Brush" /></div>
                    <div className="cleaning-tools"><img src={Buket} alt="Buket" /></div>
                    <div className="cleaning-tools"><img src={Dishes} alt="Dishes" /></div>
                    <div className="cleaning-tools"><img src={Time} alt="Time" /></div>
                    <div className="cleaning-tools"><img src={Dust} alt="Dust" /></div>
                    <div className="cleaning-tools"><img src={Gloves} alt="Gloves" /></div>
                    <div className="cleaning-tools"><img src={Recycle} alt="Recycle" /></div>
                    <div className="cleaning-tools"><img src={Mop} alt="Mop" /></div>
                </Route>
            
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/how-works">
                    <HowWorks />
                </Route>
            </Switch>
            </section>
        </Router>
    );
}

export default HomePage;