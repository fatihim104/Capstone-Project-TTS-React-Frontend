import React from 'react';
import {useState, useEffect } from 'react';
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

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
      .then(() =>readTaskListFromBackend())
      .catch(error => console.log(error));
    }

    function handleTaskDelete(id){
        fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify()
      })
      .then(() =>readTaskListFromBackend())
      .catch(error => console.log(error));
    }

    function handleTaskUpdate(pId, pFormData){
        fetch(`http://localhost:3000/tasks/${pId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(pFormData)
      })
      .then(() =>readTaskListFromBackend())
      .catch(error => console.log(error));
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