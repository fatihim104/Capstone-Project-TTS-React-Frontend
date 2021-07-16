
import React, { useState, useEffect } from 'react';
import PersonList from "./PersontList";
import AddPersonModal from "./AddPersonModal";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const successAlert = () => MySwal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Person has been saved',
  showConfirmButton: false,
  timer: 2000
})

const errorAlert = (pError) => MySwal.fire({
  icon: 'error',
  title: 'Oops...',
  text: `Something went wrong! ${pError}` ,
  footer: '<a href="">Why do I have this issue?</a>'
});

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
        .then(() => {
                    readPersonListFromBackend()
                    successAlert();
                })
        .catch(error => errorAlert(error));
    }

    function handlePersonDelete(id) {
        
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/persons/${id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify()
                })
                .then(() => readPersonListFromBackend())
                .catch(error => console.log(error));

                MySwal.fire(
                    'Deleted!',
                    'Person has been deleted.',
                    'success'
              )
            }
          })
        
    }

    function handlePersonUpdate(pId, pFormData) {

        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
          }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/persons/${pId}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(pFormData)
                    })
                    .then(() => readPersonListFromBackend())
                    .catch(error => console.log(error));

                    MySwal.fire(
                        'Updated!',
                        'Your person has been updated.',
                        'success'
                    )
                }
            })  
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