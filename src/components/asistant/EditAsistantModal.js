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

const EditAsistantModal = ({asistantId, handleAsistantUpdate}) => {
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
  
    const handleFullWidthChange = (event) => {
      setFullWidth(event.target.checked);
    };
  
    const handleMaxWidthChange = (event) => {
      setMaxWidth(event.target.value);
    };

    const [formUpData, setFormUpData] = useReducer(formReducer, {});

  const handleChange = event => {
    setFormUpData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const [asistant, setAsistant] = useState({});

    function readAsistantByIdFromBackend(asistantId){
        fetch(`http://localhost:3000/assistants/${asistantId}`)
              .then(response => response.json())
              .then(data => setAsistant(data));
    }

    useEffect(() => {
      readAsistantByIdFromBackend(asistantId);
    }, []);  
  
  const handleUpdate = (event) => {
    event.preventDefault();
    handleAsistantUpdate(asistantId, formUpData);
    handleClose()
  }
  
    return (
      <div>
        <Button onClick={handleClickOpen}>
          <EditIcon style={{ color: green[900] }}/>
        </Button>
  
        <Dialog onSubmit={handleUpdate} open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth} maxWidth={maxWidth}>
         
          <DialogTitle id="form-dialog-title" className={classes.title}>Edit Asistant</DialogTitle>
                    
          <DialogContent className={classes.margin}>
            <TextField id="standard-basic" name="firstName" defaultValue={asistant.firstName} label="Name" className={classes.bottom} onChange={handleChange}  fullWidth autoFocus />
            <TextField id="standard-basic" name="lastName" defaultValue={asistant.lastName}  label="Lastname" className={classes.bottom} onChange={handleChange}  fullWidth autoFocus />
            <TextField id="standard-basic" type="email" name="email" defaultValue={asistant.email} label="E-mail" className={classes.bottom} onChange={handleChange}  fullWidth autoFocus />
            <TextField id="standard-basic" type="password" name="password" defaultValue={asistant.password} label="Password" className={classes.bottom} onChange={handleChange}  fullWidth autoFocus />        
          </DialogContent>

          <DialogActions className={classes.margin}>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button  type="submit" variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
  export default EditAsistantModal;