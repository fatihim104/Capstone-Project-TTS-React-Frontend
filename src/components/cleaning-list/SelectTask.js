import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectTask = () => {
    
    const classes = useStyles();
    const [state, setState] = React.useState({
      task: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
  
    return (
        <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.task}
          onChange={handleChange}
          name="task"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'task' }}
        >
          <option value="">None</option>
          <option value={'Kitchen'}>Kitchen</option>
          <option value={'Doors'}>Doors</option>
          <option value={'Stairs'}>Stairs</option>
          <option value={'Stairs'}>Stairs</option>
          <option value={'Stairs'}>Stairs</option>
          <option value={'Stairs'}>Stairs</option>
        </NativeSelect>
      </FormControl>
    )
}

export default SelectTask;
