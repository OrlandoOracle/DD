import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar({ activeTab, setActiveTab, openLeadModal }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!isCollapsed && <h2>Navigation</h2>}
        <div className="collapse-icon" onClick={toggleSidebar}>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </div>
      </div>
      <div className="sidebar-content">
        <button
          className={`sidebar-btn ${activeTab === "leads" ? "active" : ""}`}
          onClick={() => setActiveTab("leads")}
        >
          Leads
        </button>
        <button
          className={`sidebar-btn ${activeTab === "tasks" ? "active" : ""}`}
          onClick={() => setActiveTab("tasks")}
        >
          Tasks
        </button>
        <button className="sidebar-btn" onClick={openLeadModal}>
          + Add Lead
        </button>
      </div>
    </div>
  );
}