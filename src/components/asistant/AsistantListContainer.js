import React from 'react';
import {useState, useEffect } from 'react';
import AsistantList from "./AsistantList";
import AddAsistantModal from "./AddAsistantModal";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const successAlert = () => MySwal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Asistant has been saved',
  showConfirmButton: false,
  timer: 2000
})

const errorAlert = (pError) => MySwal.fire({
  icon: 'error',
  title: 'Oops...',
  text: `Something went wrong! ${pError}` ,
  footer: '<a href="">Why do I have this issue?</a>'
});

const AsistantListContainer = () => {

    const [asistantList, setAsistantList] = useState([]);

    function readAsistantListFromBackend(){
        fetch('http://localhost:3000/assistants/')
              .then(response => response.json())
              .then(data => setAsistantList(data));
    }
  
    function handleAsistantSubmit(formData){
      fetch('http://localhost:3000/assistants/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      .then(() => {
        readAsistantListFromBackend()
        successAlert();
      })
      .catch(error => errorAlert(error));
    }

    function handleAsistantDelete(id){

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

            fetch(`http://localhost:3000/assistants/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify()
            })
            .then(() =>readAsistantListFromBackend())
            .catch(error => console.log(error));

            MySwal.fire(
                'Deleted!',
                'Asistant has been deleted.',
                'success'
              )
            }
      })
        
    }

    function handleAsistantUpdate(pId, pFormData){

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

          fetch(`http://localhost:3000/assistants/${pId}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(pFormData)
          })
          .then(() =>readAsistantListFromBackend())
          .catch(error => console.log(error));

          MySwal.fire(
            'Updated!',
            'Your asistant has been updated.',
            'success'
          )
        }
      })  
    }
  
    useEffect(() => {
      readAsistantListFromBackend();
    }, []);
    console.log(asistantList)

    return(
        <>  
            <AddAsistantModal onSubmitForm={handleAsistantSubmit}/>
            <AsistantList 
                asistantList={asistantList} 
                handleAsistantDelete={handleAsistantDelete}
                handleAsistantUpdate={handleAsistantUpdate}
            />
        </>
    )
}

export  default AsistantListContainer;