import React from 'react';
import PersonList from "./PersontList";
import AddPersonModal from "./AddPersonModal";

const TaskListContainer = () => {

    return(
        <>  
            <AddPersonModal/>
            <PersonList/>
        </>
    )
}

export  default TaskListContainer;