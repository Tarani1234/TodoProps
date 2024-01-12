import Todoitems from "./Todoitems";
const List = ({ todoitem ,onDeleteclick})=>{
    return (
        <>
         <div className="items-container">
         {todoitem.map((item)=>(
           <Todoitems  key ={item.name} todoName ={item.name} todoDate={item.Date} onDeleteclick ={onDeleteclick}></Todoitems>
         ))};
       </div>
       
        </>
    )

}
export default List ;