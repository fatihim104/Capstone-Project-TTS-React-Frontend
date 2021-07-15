import React from 'react';
import { useReducer, useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(2),
      
    },
    title : {
      backgroundColor: '#0069d9',
      color: '#fff',
      fontWeight: 'bolder'
    },
    bottom:{
      marginBottom :theme.spacing(3),
    }
}));

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const EditTaskModal = ({taskId, handleTaskUpdate}) => {
  const classes = useStyles();

  const [formUpData, setFormUpData] = useReducer(formReducer, {});

  const handleChange = event => {
    setFormUpData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const [task, setTask] = useState({});

    function readTaskByIdFromBackend(taskId){
        fetch(`http://localhost:3000/tasks/${taskId}`)
              .then(response => response.json())
              .then(data => setTask(data));
    }

    useEffect(() => {
      readTaskByIdFromBackend(taskId);
    }, []);  
  
  const handleUpdate = (event) => {
    event.preventDefault();
    handleTaskUpdate(taskId, formUpData);
    handleClose()
  }

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleFullWidthChange = (event) => {
      setFullWidth(event.target.checked);
    };
  
    const handleMaxWidthChange = (event) => {
      setMaxWidth(event.target.value);
    };
  
    return (
      <div>
        <Button onClick={handleClickOpen}>
          <EditIcon style={{ color: green[900] }}/>
        </Button>
  
        <Dialog onSubmit={handleUpdate} open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth} maxWidth={maxWidth}>
         
          <DialogTitle id="form-dialog-title" className={classes.title}>Edit Task</DialogTitle>
                    
          <DialogContent className={classes.margin}>
              <TextField id="standard-basic" name="place_name" defaultValue={task.place_name} onChange={handleChange} label="task name" className={classes.bottom} fullWidth autoFocus/>
          </DialogContent>

          <DialogActions className={classes.margin}>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button  type="submit" variant="contained" color="primary" onClick={handleUpdate} >
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default EditTaskModal;