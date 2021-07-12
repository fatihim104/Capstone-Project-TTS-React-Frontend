import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);



const PersonTableList = ({ pId }) => {
    const [PersonList, setPersonList] = useState([]);

    function readPersonListFromBackend(pId) {
        fetch(`http://localhost:3000/persons/${pId}`)
            .then(response => response.json())
            .then(data => setPersonList(data));
    }

    useEffect(() => {
        readPersonListFromBackend(pId);
    });

    return (
        <>
            <StyledTableCell component="th" scope="row">{PersonList.firstName}</StyledTableCell>
            <StyledTableCell align="center">{PersonList.lastName}</StyledTableCell>
        </>
    )
}

export default PersonTableList;