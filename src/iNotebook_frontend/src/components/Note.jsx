import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="col-md-4">
      <div className=" card my-3">
        <div className="card-body">
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <button className="btn btn-primary" onClick={handleClick}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
