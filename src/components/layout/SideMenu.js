import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
//Icons
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import HomePage from '../home-page/HomePage.js'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));


const SideMenü = () => {
    const { user } = useAuth0();
    const classes = useStyles();

    const [personList, setPersonList] = useState([]);
    const [asistantList, setAsistantList] = useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const personEmail = [];
    const asistantEmail = [];
    function readPersonListFromBackend() {
        fetch('http://localhost:3000/persons')
            .then(response => response.json())
            .then(data => setPersonList(data));
    }
    function readAsistantListFromBackend() {
        fetch('http://localhost:3000/assistants/')
            .then(response => response.json())
            .then(data => setAsistantList(data));
    }

    useEffect(() => {
        readPersonListFromBackend();
        readAsistantListFromBackend()
    }, []);
    personList.map(person => (personEmail.push(person.email)));
    asistantList.map(person => (asistantEmail.push(person.email)));

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    if (user === undefined) {
        return (
            <HomePage />
        );
    }
    else {
        if (personEmail.includes(user.email) === true) {
            return (
                <div className={classes.root}>
                    <Link to="/">
                        <List component="nav" aria-label="actuel cleaning list">
                            <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                                <ListItemIcon>
                                    <ListAltOutlinedIcon color="secondary" fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Actuel Cleaning List" />
                            </ListItem>
                        </List>
                    </Link>
                </div>
            )
        }
        else if (asistantEmail.includes(user.email) === true) {
            return (
                <div className={classes.root}>
                    <Link to="/">
                        <List component="nav" aria-label="actuel cleaning list">
                            <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                                <ListItemIcon>
                                    <ListAltOutlinedIcon color="secondary" fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Actuel Cleaning List" />
                            </ListItem>
                        </List>
                    </Link>

                    <Divider />

                    <Link to="/createCleaningList">
                        <List component="nav" aria-label="Create Cleaning List">
                            <ListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                                <ListItemIcon>
                                    <PlaylistAddIcon color="secondary" fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Create Cleaning List" />
                            </ListItem>
                        </List>
                    </Link>

                    <Divider />

                    <Link to="/persons">
                        <List component="nav" aria-label="Person List">
                            <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                                <ListItemIcon>
                                    <PersonAddTwoToneIcon color="primary" fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Persons" />
                            </ListItem>
                        </List>
                    </Link>

                    <Divider />

                    <Link to="/tasks">
                        <List component="nav" aria-label="Tasks">
                            <ListItem button selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
                                <ListItemIcon>
                                    <FitnessCenterTwoToneIcon color="secondary" fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Tasks" />
                            </ListItem>
                        </List>
                    </Link>

                    <Divider />

                    <Link to="/asistants">
                        <List component="nav" aria-label="Asistant List">
                            <ListItem button selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
                                <ListItemIcon>
                                    <GroupOutlinedIcon color="primary" fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Asistants" />
                            </ListItem>
                        </List>
                    </Link>
                </div>
            );

        } else {
            return (
                <div className={classes.root}>
                    <Link to="/">
                        <List component="nav" aria-label="actuel cleaning list">
                            <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                                <ListItemIcon>
                                    <ListAltOutlinedIcon color="secondary" fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Actuel Cleaning List" />
                            </ListItem>
                        </List>
                    </Link>
                </div>
            )
        }
    }
}

export default SideMenü;