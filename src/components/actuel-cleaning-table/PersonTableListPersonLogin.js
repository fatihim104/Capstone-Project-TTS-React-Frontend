import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TaskTableList from './TaskTableList.js'
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { useAuth0 } from "@auth0/auth0-react";
import HomePage from '../home-page/HomePage.js';


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

const PersonTableListPersonLogin = ({ personIdOfTask, assignedTask }) => {

    const actuelCleanigListUrl = 'http://localhost:3000/creatTaskList'
    const statusPersonSucces = 1;
    const { user } = useAuth0();
    const [Person, setPerson] = useState({});
    const [disabled, setDisabled] = useState(false)
    function readPersonByIdFromBackend(personId) {
        fetch(`http://localhost:3000/persons/${personId}`)
            .then(response => response.json())
            .then(data => setPerson(data));
    }

    useEffect(() => {
        readPersonByIdFromBackend(personIdOfTask);
        creatTaskListUpdate()
       
    }, []);

    function StatusUpdatePerson(pId, pSuccesKod) {
        let succesData = {
            'status': pSuccesKod,
        }
        creatTaskListUpdate(pId, succesData)
        window.location.reload()
    }

    function creatTaskListUpdate(pId, pFormData) {
        fetch(actuelCleanigListUrl + `/${pId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pFormData)
        })
            .catch(error => console.log(error));
    }

    function convertStatusCode(pStatus) {

        if (pStatus === 0) {
            return (<Badge color='secondary' badgeContent='Pending' />);
        } else if (pStatus === 1) {
            return (<Badge color='primary' badgeContent='Done' />);
        } else if (pStatus === 2) {
            return (<Badge className="badge-confirmed" badgeContent='Confirmed' />)
        }
    }

    if (user === undefined) {
        return (
            <HomePage />
        )
    } else {
        if (user.email === Person.email) {
            return (
                <>
                    <StyledTableCell component="th" scope="assignedTask">{Person.firstName}</StyledTableCell>
                    <StyledTableCell align="center">{Person.lastName}</StyledTableCell>
                    <TaskTableList pId={assignedTask.taskId} />
                    <StyledTableCell align="center" >{convertStatusCode(assignedTask.status)}</StyledTableCell>
                    <StyledTableCell align="center">{assignedTask.date}</StyledTableCell>
                    <StyledTableCell align="right"><Button onClick={() => StatusUpdatePerson(assignedTask.id, statusPersonSucces)} disabled={assignedTask.status === 1} variant="contained" color="primary" >Done</Button></StyledTableCell>
                </>
            )
        } else {
            return (
                <>
                    <StyledTableCell component="th" scope="row">{Person.firstName}</StyledTableCell>
                    <StyledTableCell align="center">{Person.lastName}</StyledTableCell>
                    <TaskTableList pId={assignedTask.taskId} />
                    <StyledTableCell align="center" >{convertStatusCode(assignedTask.status)}</StyledTableCell>
                    <StyledTableCell align="center">{assignedTask.date}</StyledTableCell>
                    <StyledTableCell align="right"><Button disabled variant="contained" color="primary" >Done</Button></StyledTableCell>
                </>
            )
        }
    }
}

export default PersonTableListPersonLogin;