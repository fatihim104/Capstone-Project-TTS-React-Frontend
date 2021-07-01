import React from 'react';
import {useState, useEffect } from 'react';
import AsistantList from "./AsistantList";
import AddAsistantModal from "./AddAsistantModal";

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
      .then(() =>readAsistantListFromBackend())
      .catch(error => console.log(error));
    }

    function handleAsistantDelete(id){
        fetch(`http://localhost:3000/assistants/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify()
      })
      .then(() =>readAsistantListFromBackend())
      .catch(error => console.log(error));
    }

    function handleAsistantUpdate(pId, pFormData){
        fetch(`http://localhost:3000/assistants/${pId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(pFormData)
      })
      .then(() =>readAsistantListFromBackend())
      .catch(error => console.log(error));
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