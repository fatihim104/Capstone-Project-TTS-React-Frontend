import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PersonTableList from './PersonTableList.js'
import TaskTableList from './TaskTableList.js'
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { useAuth0 } from "@auth0/auth0-react";
import HomePage from '../home-page/HomePage.js';
import PersonTableListPersonLogin from './PersonTableListPersonLogin.js'
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
    width: '95%',
    textAlign: 'center',
  },
  badge: {
    fontWeight: 'bold',
  }

});

const ActuelCleaningTable = () => {

  const classes = useStyles();
  const [ActuelCleaningList, setActuelCleaningList] = useState([]);
  const actuelCleanigListUrl = 'http://localhost:3000/creatTaskList'
  const statusPersonSucces = 1;
  const statusAsisstentSucces = 2;
  const personEmail = [];
  const asistantEmail = [];
  const { user } = useAuth0();
  const [personList, setPersonList] = useState([]);
  const [asistantList, setAsistantList] = useState([]);

  function readPersonListFromBackend() {
    fetch('http://localhost:3000/persons')
      .then(response => response.json())
      .then(data => setPersonList(data));
  }

  function readAsistantListFromBackend() {
    fetch('http://localhost:3000/assistants/')
      .then(response => response.json())
      .then(data => setAsistantList(data));
  }

  function readPersonIdAndTaskIdFromBackend() {
    fetch(actuelCleanigListUrl)
      .then(response => response.json())
      .then(data => setActuelCleaningList(data));
  }

  function creatTaskListUpdate(pId, pFormData) {
    fetch(actuelCleanigListUrl + `/${pId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pFormData)
    })
      .then(() => readPersonIdAndTaskIdFromBackend())
      .catch(error => console.log(error));
  }

  useEffect(() => {
    readPersonIdAndTaskIdFromBackend();
    readPersonListFromBackend()
    readAsistantListFromBackend()
  }, []);

  personList.map(person => (personEmail.push(person.email)));
  asistantList.map(asistan => (asistantEmail.push(asistan.email)));

  function StatusUpdatePerson(pId, pSuccesKod) {
    let succesData = {
      'status': pSuccesKod,
    }
    creatTaskListUpdate(pId, succesData)
  }
  
  function convertStatusCode(pStatus) {
    if (pStatus === 0) {
      return (<Badge color='secondary' badgeContent='Pending' />);
    } else if (pStatus === 1) {
      return (<Badge color='primary' badgeContent='Done' />);
    } else if (pStatus === 2) {
      return (<Badge className="badge-confirmed" badgeContent='Confirmed' />)
    }
  }

  if (user === undefined) {
    return (
      <HomePage />
    )
  } else {
    if (personEmail.includes(user.email) === true) {
      return (

        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">LastName</StyledTableCell>
                <StyledTableCell align="center">Place</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Time</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ActuelCleaningList.map((assignedTask) => (
                < StyledTableRow key={assignedTask.id} >
                  <PersonTableListPersonLogin personIdOfTask={assignedTask.personId} assignedTask={assignedTask} /></StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer >
      )
    } else if (asistantEmail.includes(user.email) === true) {
      return (
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">LastName</StyledTableCell>
                <StyledTableCell align="center">Place</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Time</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ActuelCleaningList.map((assignedTask) => (
                <StyledTableRow key={assignedTask.id} >
                  <PersonTableList pId={assignedTask.personId} /> 
                  <TaskTableList pId={assignedTask.taskId} />
                  <StyledTableCell align="center" >{convertStatusCode(assignedTask.status)}</StyledTableCell>
                  <StyledTableCell align="center">{assignedTask.date}</StyledTableCell>
                  <StyledTableCell align="right"><Button onClick={() => StatusUpdatePerson(assignedTask.id, statusAsisstentSucces)} disabled={assignedTask.status === 2} variant="contained" color="primary"> {assignedTask.status ===1 ? "Confirm" : "Confirmed" }</Button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer >
      );
    } else {
      return (
        <div>No Task</div>
      )
    }
  }
}

export default ActuelCleaningTable;