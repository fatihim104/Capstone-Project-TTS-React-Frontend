
import PersonList from "./PersontList";
import AddPersonModal from "./AddPersonModal";
import React, { useState, useEffect } from 'react';

const TaskListContainer = () => {

    const [personList, setPersonList] = useState([]);
    const personsUrl = 'http://localhost:3000/persons'


    function readPersonListFromBackend() {
        fetch(personsUrl)
            .then(response => response.json())
            .then(data => setPersonList(data));
    }

    function handleModalSubmit(personData) {
        fetch(personsUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(personData)
        })
            .then(() => readPersonListFromBackend())
            .catch(error => console.log(error));
    }

    function handlePersonDelete(id) {
        fetch(`http://localhost:3000/persons/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(() => readPersonListFromBackend())
            .catch(error => console.log(error));
    }

    function handlePersonUpdate(pId, pFormData) {
        fetch(`http://localhost:3000/persons/${pId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pFormData)
        })
            .then(() => readPersonListFromBackend())
            .catch(error => console.log(error));
    }


    useEffect(() => {
        readPersonListFromBackend();
    }, []);

    return (
        <>
            <AddPersonModal onSubmitModal={handleModalSubmit} />
            <PersonList person={personList} handlePersonDelete={handlePersonDelete} handlePersonUpdate={handlePersonUpdate} />
        </>
    )
}

export default TaskListContainer;