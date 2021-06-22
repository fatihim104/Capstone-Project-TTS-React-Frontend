import React from 'react';
import TaskList from "./TaskList";
import TaskButton from "./AddTaskModal";

const TaskListContainer = () => {

    return(
        <>
            <TaskButton/>
            <TaskList/>
        </>
    )
}

export  default TaskListContainer;