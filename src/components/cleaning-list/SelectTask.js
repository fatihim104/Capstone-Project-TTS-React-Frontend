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

const SelectTask = ({taskList, setTaskId}) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: '',
    name: '',
  });

  const handleChange = (event) => {

    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index]
    const taskId =  el.getAttribute('id');
    setTaskId(taskId)

    // console.log(taskId)

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
          inputProps={{
            name: 'task',
            id: 'age-native-label-placeholder',
          }}
          
          >
          {taskList.map((task) => (<option id={task.id} value={task.place_name}>{task.place_name}</option> ))}
           
        </NativeSelect>
      </FormControl>
    )
}

export default SelectTask;
