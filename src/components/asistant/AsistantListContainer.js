import React from 'react';
import AsistantList from "./AsistantList";
import AddAsistantModal from "./AddAsistantModal";

const TaskListContainer = () => {

    return(
        <>  
            <AddAsistantModal/>
            <AsistantList/>
        </>
    )
}

export  default TaskListContainer;