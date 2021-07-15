import React from 'react';
import EditTaskModal from './EditTaskModal'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3F51B5',
    color: theme.palette.common.white,
    fontWeight : 'bold',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(name, time) {
//   return { name, time };
// }

// const rows = [
//   createData('Kitchen', 12.00),
//   createData('Eating Room', 13.00),
//   createData('Stairs', 9.00),
//   createData('Toilets', 18.00)
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TaskList = ({taskList, handleTaskDelete, handleTaskUpdate}) => {
    const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskList.map((task) => (
              <StyledTableRow key={task.id}>
                <StyledTableCell component="th" scope="row">{task.place_name}</StyledTableCell>
                <StyledTableCell align="right"><EditTaskModal taskList={taskList} handleTaskUpdate = {handleTaskUpdate} taskId={task.id}/></StyledTableCell>
                <StyledTableCell align="right"><Button onClick={() => handleTaskDelete(task.id)}><DeleteIcon  style={{ color: red[600] }}/></Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default TaskList;