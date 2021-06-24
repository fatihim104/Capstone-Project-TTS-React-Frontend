import React from 'react';
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskListContainer = () => {

    return(
        <>
            <AddTaskModal/>
            <TaskList/>
        </>
    )
}

export  default TaskListContainer;