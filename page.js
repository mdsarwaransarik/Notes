'use client'

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import NoteContainer from "../components/NoteContainer/NoteContainer";
import SideBar from "../components/SideBar/SideBar";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("local-notes")) || []
  );

  // function for add Note
  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: `${Date.now()}${Math.floor(Math.random() * 100)}`,
      text: "",
      time: new Date().toDateString(),
      color,
    });
    setNotes(tempNotes);
  };

  // function for remove Note
  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  // function for text saving
  const updateText = (id, text) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  // Save Notes at Local Storage
  useEffect(() => {
    localStorage.setItem("local-notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={styles.App}>
      <SideBar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
