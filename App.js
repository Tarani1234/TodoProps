import AppName1 from "./components/AppName1";
import AddTodos from "./components/AddTodos";
import List from "./components/List";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
 
  const [todoitem, setTodoitem] = useState([]);
  const HandleNewItem = (itemName, itemdueDate) => {
    console.log(`New item Added :${itemName} Date :${itemdueDate}`);
    const NewTodoitems = [
      ...todoitem,
      { name: itemName, Date: itemdueDate },
    ];
    setTodoitem(NewTodoitems);
  };
  const HandleDeleteitems = (todoitemName) =>{
     
    const newTodoitems = todoitem.filter(item => item.name !== todoitemName);
    setTodoitem(newTodoitems);

  }
  return (
    <center>
      <AppName1 />
      <AddTodos onNewItem={HandleNewItem} />
       {todoitem.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <List todoitem={todoitem} onDeleteclick = {HandleDeleteitems}></List>
    </center>
  );
}

export default App;
