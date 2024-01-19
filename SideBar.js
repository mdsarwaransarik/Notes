'use client'
import { useState } from "react";

import "./SideBar.css";
import { FaPlusCircle } from "react-icons/fa";
export default function SideBar({ addNote }) {
  const colors = [
    "#ffc0cb",
    "#fe9b72",
    "#fec971",
    "#e4ee91",
    "#00d4fe",
    "#00ffff",
    "#D3D3D3",
  ];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <FaPlusCircle size={30} onClick={() => {
            setListOpen(!listOpen);
          }}/>
        
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={Math.round(index)}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}
