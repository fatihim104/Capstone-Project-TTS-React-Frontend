import React from 'react';
import EditAsistantModal from './EditAsistantModal'
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
import MaskData from 'maskdata';

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

// function createData(name, lastname) {
//   return { name, lastname };
// }

// const rows = [
//   createData('Hans', 'Peter'),
//   createData('Thomas', 'Mayer'),
//   createData('Brus', 'Lee')
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

  badge: {
    color:'white'
  }
});

const AsistantList = ({asistantList, handleAsistantDelete, handleAsistantUpdate}) => {
    const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left" >Last Name</StyledTableCell>
              <StyledTableCell align="left" >E-mail</StyledTableCell>
              <StyledTableCell align="left" >PassWord</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {asistantList.map((asistant) => (
              <StyledTableRow key={asistant.id}>
                <StyledTableCell component="th" scope="row">
                  {asistant.firstName}
                </StyledTableCell>
                <StyledTableCell align="left">{asistant.lastName}</StyledTableCell>
                <StyledTableCell align="left">{asistant.email}</StyledTableCell>
                <StyledTableCell align="left">{MaskData.maskPassword(asistant.password)}</StyledTableCell>
                <StyledTableCell align="right"><EditAsistantModal taskList={asistantList} handleAsistantUpdate = {handleAsistantUpdate} asistantId={asistant.id}/></StyledTableCell>
                <StyledTableCell align="right"><Button onClick={() => handleAsistantDelete(asistant.id)}><DeleteIcon  style={{ color: red[600] }}/></Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default AsistantList;