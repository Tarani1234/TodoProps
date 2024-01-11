
function Todoitems({todoName, todoDate, onDeleteclick}){
  return (
    <>
      <div Class="container text-center">
      <div Class="row kg-row">
          <div Class="col-6">{todoName}</div>
          <div Class="col-2">{todoDate}</div>
          <div Class="col-2">
          <button type="button" Class="btn btn-danger kg-button"
          onClick ={()=> onDeleteclick(todoName)} >Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todoitems;