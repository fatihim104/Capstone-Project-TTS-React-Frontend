import React from 'react';
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
  
function createData(name, lastname, place, time) {
    return { name, lastname, place, time };
}
  
const rows = [
    createData('Ali', 'Osman', 'Kitchen', 13.00),
    createData('Fatih', 'Imal', 'Stairs', 8.30),
    createData('Mesut', 'Asci', 'Doors', 18.00),
    createData('Merkan', 'Aksoydan', 'Toilets', 22.00),
];
  
const useStyles = makeStyles({
    table: {
      width: '95%',
      textAlign: 'center',
    },
});

const ActuelCleaningTable = () => {
    const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">LastName</StyledTableCell>
            <StyledTableCell align="center">Place</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.lastname}</StyledTableCell>
              <StyledTableCell align="center">{row.place}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ActuelCleaningTable;