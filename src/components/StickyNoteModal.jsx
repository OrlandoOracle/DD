// src/components/StickyNoteModal.jsx
import React from 'react';

export default function StickyNoteModal({ closeModal }) {
  return (
    <div className="modal">
      <h2>Sticky Note Modal</h2>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}