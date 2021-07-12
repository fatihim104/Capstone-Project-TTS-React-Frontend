import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const SelectDate = ({setTaskDate}) => {
        const classes = useStyles();
        // const [taskDate, setTaskDate]=useState({})

        const handleChange = (event) => {
          const taskDate = event.target.value;
          setTaskDate(taskDate);
        }
        
    return(
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        onChange={handleChange}
        InputLabelProps={{
        shrink: true,
        }}
        />
    </form>)    
}

export default SelectDate;