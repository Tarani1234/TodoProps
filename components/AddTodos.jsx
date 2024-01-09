

function AddTodos(){
    return(
    <>
      <div Class="container text-center">
        <div Class="row kg-row">
          <div Class="col-4">
            <input type="text" placeholder="enter todo items"></input>
          </div>
          <div Class="col-2">
            <input type="date"></input> 
          </div>
          <div Class="col-2">
          <button type="button" Class="btn btn-success kg-button">Add</button>
          </div>
        </div>
        </div>
    </>
    );
}
export default AddTodos;