import Todoitems from "./Todoitems";
const List = ({ todoitem})=>{
    return (
        <>
         <div className="items-container">
        <Todoitems todoName ="Buy milk" todoDate="24/08/2023"></Todoitems>
        <Todoitems todoName ="Go to school" todoDate="24/08/2023"></Todoitems>
       </div>
       
        </>
    )

}
export default List ;