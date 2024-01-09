
function Todoitems({todoName, todoDate}){
  return (
    <>
      <div Class="container text-center">
      <div Class="row kg-row">
          <div Class="col-4">{todoName}</div>
          <div Class="col-2">{todoDate}</div>
          <div Class="col-2">
          <button type="button" Class="btn btn-danger kg-button">Danger</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todoitems;