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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
});

const ActuelCleaningTable = () => {
  const classes = useStyles();
  const [ActuelCleaningList, setActuelCleaningList] = useState([]);
  const actuelCleanigListUrl = 'http://localhost:3000/creatTaskList'
  const statusPersonSucces = 1;
  const statusAsisstentSucces = 2;

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
  }, []);

  function StatusUpdatePerson(pId, pSuccesKod) {
    let succesDate = {
      'status': pSuccesKod,
    }
    creatTaskListUpdate(pId, succesDate)
  }

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
          {ActuelCleaningList.map((row) => (
            < StyledTableRow key={row.id} >
              <PersonTableList pId={row.personId} />
              <TaskTableList pId={row.taskId} />
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={() => StatusUpdatePerson(row.id, statusPersonSucces)} variant="contained" color="primary" >P.Succes</Button></StyledTableCell>
              <StyledTableCell align="right"><Button onClick={() => StatusUpdatePerson(row.id, statusAsisstentSucces)} variant="contained" color="primary">A.Succes</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}

export default ActuelCleaningTable;