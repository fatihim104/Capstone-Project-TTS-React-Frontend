import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AsistantAddButton = withStyles({
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
    fontWeight: 'bold'
  },
  bottom:{
    marginBottom :theme.spacing(3),
  }
}));

const AddAsistantModal = () => {
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

  return (
    <div>
      <AsistantAddButton variant="contained" color="primary" className={classes.margin} onClick={handleClickOpen}>
        ADD ASISTANT
      </AsistantAddButton>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth}
        maxWidth={maxWidth}>
       
        <DialogTitle id="form-dialog-title" className={classes.title}>Add New Asistant</DialogTitle>
                  
        <DialogContent className={classes.margin}>
          <TextField id="standard-basic"  label="Asistant Name" className={classes.bottom} fullWidth autoFocus />
          <TextField id="standard-basic"  label="Asistant Lastname" className={classes.bottom} fullWidth autoFocus />        
        </DialogContent>
        
        <DialogActions className={classes.margin}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="contained" color="primary" onClick={handleClose}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddAsistantModal;
