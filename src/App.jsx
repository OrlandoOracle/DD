import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import StickyNotes from './components/StickyNotes';
import LeadModal from './components/LeadModal';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Leads');
  const [isLeadModalOpen, setLeadModalOpen] = useState(false);

  const openLeadModal = () => setLeadModalOpen(true);
  const closeLeadModal = () => setLeadModalOpen(false);

  const notes = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', status: 'Follow Up' },
    { id: 2, name: 'Jane Doe', phone: '987-654-3210', status: 'SOLD' },
  ];

  return (
    <div className="app">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openLeadModal={openLeadModal}
      />
      <LeadModal isOpen={isLeadModalOpen} closeModal={closeLeadModal} />
      {activeTab === 'Sticky Notes' && <StickyNotes notes={notes} />}
      {/* Add more content based on activeTab */}
    </div>
  );
}