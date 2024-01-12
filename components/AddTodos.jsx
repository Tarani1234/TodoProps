import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodos({onNewItem}){
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate]= useState("");
  const handleNameChange = (event)=>{
     setTodoName(event.target.value);
  }
  const handleDateChange = (event) =>{
     setTodoDate(event.target.value);
  }
  const handleAddButtonClicked = ()=>{
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
     
  }
    return(
    <>
      <div Class="container text-center">
        <div Class="row kg-row">
          <div Class="col-6 ">
            <input type="text" placeholder="Enter todo items" value ={todoName} onChange={handleNameChange}></input>
          </div>
          <div Class="col-2">
            <input type="date" value ={todoDate} onChange={handleDateChange}></input> 
          </div>
          <div Class="col-2">
          <button type="button" Class="btn btn-success kg-button" 
            onClick={handleAddButtonClicked}
          ><IoIosAddCircleOutline/></button>
          </div>
        </div>
        </div>
    </>
    );
}
export default AddTodos;