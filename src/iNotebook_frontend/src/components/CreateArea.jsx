// import React, { useState } from "react";
// // import AddIcon from "@material-ui/icons/Add";
// // import Fab from "@material-ui/core/Fab";
// // import Zoom from "@material-ui/core/Zoom";

// function CreateArea(props) {
//   const [isExpanded, setExpanded] = useState(false);

//   const [note, setNote] = useState({
//     title: "",
//     content: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNote(prevNote => {
//       return {
//         ...prevNote,
//         [name]: value
//       };
//     });
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       title: "",
//       content: ""
//     });
//     event.preventDefault();
//   }

//   function expand() {
//     setExpanded(true);
//   }

//   return (
//     <div>
//       <form className="create-note">
//         {isExpanded && (
//           <input
//             name="title"
//             onChange={handleChange}
//             value={note.title}
//             placeholder="Title"
//           />
//         )}

//         <textarea
//           name="content"
//           onClick={expand}
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           rows={isExpanded ? 3 : 1}
//         />
//         <button in={isExpanded}>
//           <button onClick={submitNote}>
//             <button />
//           </button>
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;


import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
   <>
    <div className="container card w-25">
      <div className="card-body">
        <form className="create-note">
          {isExpanded && (
            <div className="form-group">
              <input
                className="form-control"
                name="title"
                type="text"
                placeholder="Title"
                onChange={handleChange}
                value={note.title}
              />
            </div>
          )}

          <div className="form-group">
            <textarea
              className="form-control"
              name="content"
              placeholder="Take a note..."
              rows={isExpanded ? 3 : 1}
              onClick={expand}
              onChange={handleChange}
              value={note.content}
            />
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={submitNote}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
    <div className="container mx-3 my-3">
      <h4>Your Notes:</h4>
    </div>
   </>
  );
}

export default CreateArea;
