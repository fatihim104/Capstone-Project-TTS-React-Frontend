import React, { useState } from 'react';
import { TaskContext } from './TaskContext';
import SelectTask from './SelectTask'
import SelectDate from './SelectDate'
import AssignButton from './AssignButton'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../login/loading.js";


const MySwal = withReactContent(Swal)
const successAlert = () => MySwal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Person`s task has been assigned',
  showConfirmButton: false,
  timer: 2000
})

const errorAlert = (pError) => MySwal.fire({
  icon: 'error',
  title: 'Oops...',
  text: `Something went wrong! ${pError}`,
  footer: '<a href="">Why do I have this issue?</a>'
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3F51B5',
    color: theme.palette.common.white,
    fontWeight: 'bold',
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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  get: {
    backgroundColor: "green"
  }
});

const CreateCleaningList = () => {
  const classes = useStyles();

  const { personList, taskList } = React.useContext(TaskContext);
  const [statePersonList, setStatePersonList] = personList;
  const [stateTaskList, setStateTaskList] = taskList;

  // const [personId, setPersonId] = useState();
  const [taskId, setTaskId] = useState();
  const [taskDate, setTaskDate] = useState({});

  function handleCreateListSubmit(event) {

    const person = event.target.closest("tr").firstChild;
    const selectedPersonId = person.dataset.personid;
    // setPersonId(selectedPersonId)

    const tableData = {
      "personId": +selectedPersonId,
      "taskId": +taskId,
      "date": Date(taskDate),
      "asistanId": 7,
      "status": 0
    }
    console.log(tableData)

    fetch('http://localhost:3000/creatTaskList/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tableData)
      })
      .then(() => successAlert())
      .catch(error => errorAlert(error));
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Last Name</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell >Select Task</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statePersonList.map((person, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell id="person" data-personId={person.id} component="th" scope="row">{person.firstName}</StyledTableCell>
              <StyledTableCell>{person.lastName}</StyledTableCell>
              <StyledTableCell><SelectDate setTaskDate={setTaskDate} /></StyledTableCell>
              <StyledTableCell ><SelectTask taskList={stateTaskList} setTaskId={setTaskId} /></StyledTableCell>
              <StyledTableCell align="right"><AssignButton handleCreateListSubmit={handleCreateListSubmit} /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default withAuthenticationRequired(CreateCleaningList, {
  onRedirecting: () => <Loading />,
});