import React, {useState, useEffect, createContext} from "react";

export const TaskContext = createContext();

export const TaskProvider = props => {

    const [personList, setPersonList] = useState([]);
    const [taskList, setTaskList] = useState([]);
    

    function readPersonListFromBackend() {
        fetch('http://localhost:3000/persons')
            .then(response => response.json())
            .then(data => setPersonList(data));
    }

    function readTaskListFromBackend(){
        fetch('http://localhost:3000/tasks/')
              .then(response => response.json())
              .then(data => setTaskList(data));
    }

  useEffect(() => {
        readPersonListFromBackend();
        readTaskListFromBackend();
    }, []);

    return(
        <TaskContext.Provider value={{personList:[personList, setPersonList], taskList:[taskList, setTaskList]}}>
            {props.children}
        </TaskContext.Provider>
    );
}