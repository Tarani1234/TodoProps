
import AppName1 from "./components/AppName1";
import AddTodos from "./components/AddTodos";
import List from "./components/List";
import "./App.css";
function App() {
  const todoitem =[
    {
      name : "Buy milk",
      Date :"24/08/2023"
    },
    {
      name : "Go to school",
      Date :"25/06/2023"
    },
  ];
  return (
    <center>
     <AppName1/>
      <AddTodos/>
      <List todoitem={todoitem }></List>
    </center>
  );
}

export default App;
