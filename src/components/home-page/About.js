import React from 'react';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        color: '#fff',
        fontWeight:'bold',
        paddingBottom:'1rem',
      },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: 'linear-gradient(0deg, rgba(238,235,174,0.950315160243785) 0%, rgba(36,36,134,0.9082983535210959) 67%);',
        margin: '2rem',
    },
    home: {
        color:'#ffeb3b',
        fontWeight: 'bold',
        fontSize:'18px',
        position:'absolute',
        right:'3rem',
        top:'2rem'
    },
    login: {
        color:'#ffeb3b',
        fontWeight: 'bold',
        fontSize:'18px',
        position:'absolute',
        right:'9rem',
        top:'2rem'
    },
    explain: {
        color:'#ffeb3b',
        fontWeight: 'bold',
        fontSize:'18px',
        position:'absolute',
        right:'16rem',
        top:'2rem'
    },
}));

const About = () => {
    const classes = useStyles();
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    
    return (
        <>
            <Link to="/">
                <Button className={classes.home}>
                    HOME
                </Button>
            </Link>

            <Link to="/how-works">
                            <Button className={classes.explain}>
                                HOW WORKS
                            </Button>
                        </Link>

            <Button className={classes.login} onClick={() => loginWithRedirect()}>
                LOGIN
            </Button>

            <Grid container align='flex-start' spacing={5} >
                <Typography className={classes.root}  align='center' variant="h3" gutterBottom>
                    About
                </Typography>
                <Grid item xs={6} >
                <Paper className={classes.paper}>
                    <Typography className={classes.root} align='center' variant="h6" gutterBottom>
                        Fatih Imal
                    </Typography>                
                </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.root} align='center' variant="h6" gutterBottom>
                        Ali Osman Yildirim
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default About;

