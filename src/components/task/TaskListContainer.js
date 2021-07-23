import React from 'react';
import {useState, useEffect } from 'react';
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const successAlert = () => MySwal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Task has been saved',
  showConfirmButton: false,
  timer: 2000
})

const errorAlert = (pError) => MySwal.fire({
  icon: 'error',
  title: 'Oops...',
  text: `Something went wrong! ${pError}` ,
  footer: '<a href="">Why do I have this issue?</a>'
});

// const deleteConfirmAlert = () => MySwal.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, delete it!'
// }).then((result) => {
//   if (result.isConfirmed) {
//     MySwal.fire(
//       'Deleted!',
//       'Your file has been deleted.',
//       'success'
//     )
//   }
// })



const TaskListContainer = () => {
       
    const [taskList, setTaskList] = useState([]);

    function readTaskListFromBackend(){
      fetch('http://localhost:3000/tasks/')
            .then(response => response.json())
            .then(data => setTaskList(data));
    }
  
    function handleTaskSubmit(formData){
      fetch('http://localhost:3000/tasks/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      .then((response) => response.json())
      .then(() =>{
        readTaskListFromBackend();
        successAlert();
      })
      .catch(error => errorAlert(error))  
    } 

    function handleTaskDelete(id){

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

          fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify()
            })
          .then(() => readTaskListFromBackend())
          .catch(error => console.log(error))       

          MySwal.fire(
            'Deleted!',
            'Task has been deleted.',
            'success'
          )
        }
      })
      
        
    }
    

    function handleTaskUpdate(pId, pFormData){

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

          fetch(`http://localhost:3000/tasks/${pId}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(pFormData)
          })
          .then(() =>readTaskListFromBackend())
          .catch(error => console.log(error))

          MySwal.fire(
            'Updated!',
            'Your task has been updated.',
            'success'
          )
        }
      })     
    }
  
    useEffect(() => {
      readTaskListFromBackend();
    }, []);
    console.log(taskList)

    return(
        <>
            <AddTaskModal onSubmitForm={handleTaskSubmit}/>
            <TaskList taskList={taskList} handleTaskDelete={handleTaskDelete} handleTaskUpdate={handleTaskUpdate}/>
        </>
    )
}

export  default TaskListContainer;