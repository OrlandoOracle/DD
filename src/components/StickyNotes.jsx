import React from "react";
import "./StickyNotes.css";

export default function StickyNotes({ notes }) {
  if (!notes || notes.length === 0) {
    return <p>No leads available</p>;
  }

  return (
    <div className="sticky-notes">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`sticky-note ${note.status.toLowerCase().replace(" ", "-")}`}
        >
          <h4>{note.firstName} {note.lastName}</h4>
          <p><strong>Status:</strong> {note.status}</p>
          <p><strong>Phone:</strong> {note.phone}</p>
        </div>
      ))}
    </div>
  );
}