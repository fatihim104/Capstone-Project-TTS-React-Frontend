import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import PersonBody from './PersonBody';
import PersonHeader from './PersonHeader';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



const PersonList = ({ person, handlePersonDelete, handlePersonUpdate }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <PersonHeader />
        {person.map(p => <PersonBody person={p} handlePersonDelete={handlePersonDelete} handlePersonUpdate={handlePersonUpdate} />)}
      </Table >
    </TableContainer>
  );
}

export default PersonList;