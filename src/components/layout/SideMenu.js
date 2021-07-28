import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

//Icons
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    }   
}));


const SideMenü = () => {

    const classes = useStyles();
    
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

    return(

        <div className={classes.root}>
            <Link to="/">
                <List component="nav" aria-label="actuel cleaning list">
                    <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event,0)}>
                        <ListItemIcon>
                            <ListAltOutlinedIcon color="primary" fontSize="large" />  
                        </ListItemIcon>
                        <ListItemText primary="Actuel Cleaning List" />
                    </ListItem>   
                </List>
            </Link>
               
                <Divider/>

            <Link to="/createCleaningList">
                <List component="nav" aria-label="Create Cleaning List">
                    <ListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event,2)}>
                        <ListItemIcon>
                            <PlaylistAddIcon color="secondary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Create Cleaning List" />
                    </ListItem>   
                </List>
            </Link>

                <Divider/>

            <Link to="/persons">
                <List component="nav" aria-label="Person List">
                    <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event,3)}>
                        <ListItemIcon>
                            <PersonAddTwoToneIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Persons" />
                    </ListItem>   
                </List>
            </Link>

                <Divider/>

            <Link to="/tasks"> 
                <List component="nav" aria-label="Tasks">
                    <ListItem button selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event,4)}>
                        <ListItemIcon>
                            <FitnessCenterTwoToneIcon color="secondary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Tasks" />
                    </ListItem>   
                </List>
            </Link>

                <Divider/>
            
            <Link to="/asistants">
                <List component="nav" aria-label="Asistant List">
                    <ListItem button selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event,5)}>
                        <ListItemIcon>
                            <GroupOutlinedIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Asistants" />
                    </ListItem>   
                </List>
            </Link>   
        </div>  
    );
}

export default SideMenü;