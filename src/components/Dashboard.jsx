import React from "react";
import Sidebar from "./Sidebar";
import StickyNotes from "./StickyNotes";

export default function Dashboard({ notes }) {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h2>Leads</h2>
        <StickyNotes notes={notes} />
      </div>
    </div>
  );
}