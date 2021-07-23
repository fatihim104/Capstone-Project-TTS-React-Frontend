import React, { useReducer, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),

  },
  title: {
    backgroundColor: '#0069d9',
    // fontWeight: 'bold'
  },
  bottom: {
    marginBottom: theme.spacing(3),
  }
}));

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}


const EditPersonModal = ({ personId, handlePersonUpdate }) => {
  const classes = useStyles();
  const [formUpData, setFormUpData] = useReducer(formReducer, {});
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleChange = event => {
    setFormUpData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  const [person, setPerson] = useState({});

  function readPersonByIdFromBackend(personId) {
    fetch(`http://localhost:3000/persons/${personId}`)
      .then(response => response.json())
      .then(data => setPerson(data));
  }

  useEffect(() => {
    readPersonByIdFromBackend(personId);
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    handlePersonUpdate(personId, formUpData);
    handleClose()
  }
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
        <EditIcon color="primary" />
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth} maxWidth={maxWidth}>

        <DialogTitle id="form-dialog-title" className={classes.title}>Edit Person</DialogTitle>

        <DialogContent className={classes.margin}>
          <TextField name='firstName' defaultValue={person.firstName} id="standard-basic" label="First Name" className={classes.bottom} fullWidth autoFocus onChange={handleChange} />
          <TextField name='lastName' defaultValue={person.lastName} id="standard-basic" label="Last Name" className={classes.bottom} fullWidth autoFocus onChange={handleChange} />
          <TextField name='email' type="email" defaultValue={person.email} id="standard-basic" label="Email" className={classes.bottom} fullWidth autoFocus onChange={handleChange} />
          <TextField name='password' type="password" defaultValue={person.password} id="standard-basic" label="Password" className={classes.bottom} fullWidth autoFocus onChange={handleChange} />
          <TextField name='arrival_date' type="date" defaultValue={person.arrival_date} id="standard-basic" label="Arrival Date" className={classes.bottom} fullWidth autoFocus onChange={handleChange} />
        </DialogContent>

        <DialogActions className={classes.margin}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditPersonModal;