import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure this path matches your project structure
import './Leads.css';

export default function Leads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Leads'));
        const leadsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLeads(leadsData);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="leads-container">
      {leads.length === 0 ? (
        <p>No leads available</p>
      ) : (
        <div className="leads-grid">
          {leads.map((lead) => (
            <div key={lead.id} className="lead-card">
              <h3>{lead.firstName} {lead.lastName}</h3>
              <p>Status: {lead.status}</p>
              <p>Phone: {lead.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}