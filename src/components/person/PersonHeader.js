import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const PersonHeader = () => {

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
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>Person Name</StyledTableCell>
                <StyledTableCell align="left" >Last Name</StyledTableCell>
                <StyledTableCell align="left" >Email</StyledTableCell>
                <StyledTableCell align="left" >Amount of Work</StyledTableCell>
                <StyledTableCell align="right">Edit</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
        </TableHead>
    );
}

export default PersonHeader;

