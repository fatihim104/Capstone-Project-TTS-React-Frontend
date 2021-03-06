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

const TaskTableList = ({ pId }) => {
    const [TaskList, setTaskList] = useState([]);

    function readTaskByIdFromBackend(taskId) {
        fetch(`http://localhost:3000/tasks/${taskId}`)
            .then(response => response.json())
            .then(data => setTaskList(data));
    }
    useEffect(() => {
        readTaskByIdFromBackend(pId);
    }, []);

    return (
        <>
            <StyledTableCell component="th" scope="row">{TaskList.place_name}</StyledTableCell>
        </>
    )
}

export default TaskTableList;