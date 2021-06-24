import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
    title : {
      backgroundColor: '#0069d9',
      // fontWeight: 'bold'
    },
    bottom:{
      marginBottom :theme.spacing(3),
    }
  }));

const EditTaskModal = () => {
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
        <Button onClick={handleClickOpen}>
          <EditIcon color="primary"/>
        </Button>
  
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth}
          maxWidth={maxWidth}>
         
          <DialogTitle id="form-dialog-title" className={classes.title}>Edit Task</DialogTitle>
                    
          <DialogContent className={classes.margin}>
              
              <TextField id="standard-basic" label="Task Definition" className={classes.bottom} fullWidth autoFocus/>
              <TextField
                      id="time"
                      type="time"
                      defaultValue="07:30"
                      // className={classes.textField}
                      className={classes.bottom}
                      margin="dense"
                      InputLabelProps={{
                      shrink: true,
                      }}
                      inputProps={{
                      step: 300, // 5 min
                      }}
                      autoFocus
                      fullWidth
              />
           
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
  
  export default EditTaskModal;