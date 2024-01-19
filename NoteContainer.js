import Note from "../Note/Note";
import "./NoteContainer.css";

export default function NoteContainer({ notes, deleteNote, updateText }) {
  const reverseArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; i -= 1) {
      array.push(arr[i]);
    }
    return array;
  };

  const reverseNotes = reverseArray(notes);

  return (
    <div className="noteContainer">
      <h2>Notes</h2>
      <div className="noteContainer_notes custom-scroll">
        {reverseNotes?.length > 0 ? (
          reverseNotes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={deleteNote}
              updateText={updateText}
            />
          ))
        ) : (
          <div>
            <h3> No Notes Present!</h3>
            <p>Please Create New Note</p>
          </div>
        )}
      </div>
    </div>
  );
}
