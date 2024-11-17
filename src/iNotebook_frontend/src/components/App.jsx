import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { iNotebook_backend } from "../../../declarations/iNotebook_backend";

import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    iNotebook_backend.createNotes(newNote.title, newNote.content);
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  }

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const notes = await iNotebook_backend.readNotes();
    setNotes(notes);
  }

  function deleteNote(id) {
    iNotebook_backend.removeNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="container row my-5">
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
