import React from 'react';
import EditPersonModal from './EditPersonModal'
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

function createData(name, lastname, origin, age) {
  return { name, lastname,origin, age };
}

const rows = [
  createData('Baru', 'Gomyo', 'Tibet', 25),
  createData('Hüseyin', 'Rafik', 'Afghan', 20),
  createData('Erkan', 'Can', 'Turkey', 30)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const PersonList = () => {
    const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Person Name</StyledTableCell>
              <StyledTableCell align="left" >Last Name</StyledTableCell>
              <StyledTableCell align="left" >Country</StyledTableCell>
              <StyledTableCell align="left" >Age</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.lastname}</StyledTableCell>
                <StyledTableCell align="left">{row.origin}</StyledTableCell>
                <StyledTableCell align="left">{row.age}</StyledTableCell>
                <StyledTableCell align="right"><EditPersonModal/></StyledTableCell>
                <StyledTableCell align="right"><DeleteIcon style={{ color: red[700] }}/></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default PersonList;