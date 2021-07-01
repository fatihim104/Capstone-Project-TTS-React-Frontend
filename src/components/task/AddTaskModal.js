import React from 'react';
import { useReducer} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const TaskAddButton = withStyles({
  root: {
    fontWeight: 'bold',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 2,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc', 
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    float : 'right',
  },
  title : {
    backgroundColor: '#0069d9',
    color: '#fff',
    font: 'bolder'
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

const TaskButton = (props) => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmitForm(formData);
    handleClose()
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {    
    setOpen(false);
  };

  return (
    <div>
      <TaskAddButton variant="contained" color="primary" className={classes.margin} onClick={handleClickOpen}>
        ADD TASK
      </TaskAddButton>

      <Dialog  onSubmit={handleSubmit} open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth} maxWidth={maxWidth}>
       
        <DialogTitle id="form-dialog-title" className={classes.title}>Add New Task</DialogTitle>
                  
        <DialogContent className={classes.margin}>
            
            <TextField id="standard-basic" name="place_name" label="Task Name" className={classes.bottom} onChange={handleChange} fullWidth autoFocus />
            <TextField
                    id="time"
                    type="time"
                    name="date"
                    defaultValue="07:30"
                    className={classes.bottom} 
                    margin="dense"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    onChange={handleChange}
                    autoFocus
                    fullWidth
            />
         
        </DialogContent>
        <DialogActions className={classes.margin}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="contained" color="primary" type="submit" onClick={handleSubmit}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TaskButton;
