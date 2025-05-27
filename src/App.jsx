// src/App.jsx
import React, { useState } from 'react';
import styles from './styles/App.module.css'; // Corrected path: App.module.css is in src/styles/
import Sidebar from './components/Sidebar'; // Corrected path: Sidebar.jsx is in src/components/
import Header from './components/Header';   // Corrected path: Header.jsx is in src/components/
import DashboardMainContent from './components/DashboardMainContent'; // Corrected path: DashboardMainContent.jsx is in src/components/

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility
  const [activeLink, setActiveLink] = useState('Dashboard'); // State for active sidebar link

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${styles.appContainer} ${isSidebarOpen ? styles.overlayActive : ''}`}> {/* Apply overlay class */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <div className={styles.mainContentArea}>
        <Header toggleSidebar={toggleSidebar} /> {/* Pass toggle function to Header */}
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;