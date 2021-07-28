import React from 'react';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
    about: {
        color:'#ffeb3b',
        fontWeight: 'bold',
        fontSize:'18px',
        position:'absolute',
        right:'9rem',
        top:'2rem'
    },
    login: {
        color:'#ffeb3b',
        fontWeight: 'bold',
        fontSize:'18px',
        position:'absolute',
        right:'16rem',
        top:'2rem'
    },
}));

const HowWorks = () => {
    const classes = useStyles();
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    
    return (
        <>
            <Link to="/">
                <Button className={classes.home}>
                    HOME
                </Button>
            </Link>

            <Link to="/about">
                <Button className={classes.about}>
                    ABOUT
                </Button>
            </Link>

            <Button className={classes.login} onClick={() => loginWithRedirect()}>
                LOGIN
            </Button>

            <Grid container align='flex-start' spacing={5} >
                <Typography className={classes.root}  align='center' variant="h3" gutterBottom>
                    How Works?
                </Typography>
                <Grid item xs={12} >
                <Paper className={classes.paper}>
                    <Typography className={classes.root} align='center' variant="h6" gutterBottom>
                        ...
                    </Typography>                
                </Paper>
                </Grid>                
            </Grid>
        </>
    );
}

export default HowWorks;