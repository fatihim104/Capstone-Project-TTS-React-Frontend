import React from 'react';
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

function createData(name, lastname) {
  return { name, lastname };
}

const rows = [
  createData('Hans', 'Peter'),
  createData('Thomas', 'Mayer'),
  createData('Brus', 'Lee'),
  createData('Barni', 'Moloztas'),
  createData('Fred', 'Cakmaktas'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  get :{
    backgroundColor:"green"
  }
});

const CreateCleaningList = () => {
    const classes = useStyles();

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
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                <StyledTableCell>{row.lastname}</StyledTableCell>
                <StyledTableCell><SelectDate/></StyledTableCell>
                <StyledTableCell ><SelectTask/></StyledTableCell>
                <StyledTableCell align="right"><AssignButton/></StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
        </Table>
      </TableContainer>
    );
}

export default CreateCleaningList;