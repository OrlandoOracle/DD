import React from 'react';
import './LeadModal.css'; // Add styles for central popup

export default function LeadModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Create New Lead</h2>
        <form>
          <input type="text" placeholder="Lead Name" />
          <input type="text" placeholder="Phone Number" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}