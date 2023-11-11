import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import List from './List';
export default function AllList() {
    const [lists,setLists]=useState([]);
    const [list,setList]=useState("")
    
    const handleOnChange=(e)=>{
        setList(e.target.value);
        e.target.value=""
    }
    const Add=()=>{
        if(list !==""){
          setLists([...lists, { text: list, Status: false }]);
          setList("");
        }
    }
    const Close =(id)=>{
        setLists((lists)=>lists.filter((list,index)=>index !==id ))
    }
    const handleOnStatus=(id)=>{
        setLists((lists)=>lists.map((l,index)=>
            id===index ?{...l,status :!l.status} :l
        ))
    }
  return (
    <div className="container bg-info rounded mt-5">
      <div className="container rounded bg-primary text-center mt-4 pt-2">
        <h2 className="text-light">ToDo List</h2>
        <Header handleOnChange={handleOnChange} Add={Add} list={list} />
      </div>
      <div>
        <List lists={lists} Close={Close} handleOnStatus={handleOnStatus} />
      </div>
    </div>
  );
}
