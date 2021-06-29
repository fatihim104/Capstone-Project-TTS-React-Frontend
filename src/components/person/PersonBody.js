import React from 'react';
import EditPersonModal from './EditPersonModal'
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const PersonBody = ({ person, handlePersonDelete, handlePersonUpdate }) => {


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

    return (
        <TableBody>

            <StyledTableRow key={person.id}>
                <StyledTableCell component="th" scope="row">
                    {person.firstName}
                </StyledTableCell>
                <StyledTableCell align="left">{person.lastName}</StyledTableCell>
                <StyledTableCell align="left">{person.email}</StyledTableCell>
                <StyledTableCell align="left">{person.amount_of_work}</StyledTableCell>
                <StyledTableCell align="right"><EditPersonModal personList={person} handlePersonUpdate={handlePersonUpdate} personId={person.id} /></StyledTableCell>
                <StyledTableCell align="right"><Button onClick={() => handlePersonDelete(person.id)}><DeleteIcon style={{ color: red[600] }} /></Button></StyledTableCell>
            </StyledTableRow>

        </TableBody>
    );
}
export default PersonBody;