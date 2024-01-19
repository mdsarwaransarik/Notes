import "./Note.css";
import {MdDelete} from "react-icons/md";
import {useState} from 'react';
const timer = 500;
let timeout;

export default function Note({ note, deleteNote, updateText }) {

    const [selectedColor, setSelectedColor] = useState("#000000");
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const setText = (text, id) => {
    debounce(() => updateText(text, id));
  };



  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <textarea
        className="note_text"
        defaultValue={note.text}
        onChange={(event) => {
          setText(note.id, event.target.value);
        }}
      />
      <div className="note_footer">
        <p>{note.time}</p>
        <MdDelete size={30}  style={{ color: selectedColor}}
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </div>
  );
}
