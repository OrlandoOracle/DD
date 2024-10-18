import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/Dashboard";
import "./index.css";

const notes = [
  { id: 1, firstName: "John", lastName: "Doe", status: "Follow Up", phone: "123-456-7890" },
  { id: 2, firstName: "Jane", lastName: "Smith", status: "SOLD", phone: "987-654-3210" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dashboard notes={notes} />
  </React.StrictMode>
);