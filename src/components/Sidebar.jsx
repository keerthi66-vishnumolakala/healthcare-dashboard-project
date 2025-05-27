// src/components/Sidebar.jsx
import React from 'react';
import styles from '../styles/Sidebar.module.css';
import { navLinks } from '../data/navLinks'; // Assuming you have this data

function Sidebar({ isOpen, toggleSidebar, activeLink, setActiveLink }) {
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    // On mobile, close sidebar when a link is clicked
    if (window.innerWidth <= 768) { // Or your specific mobile breakpoint
      toggleSidebar();
    }
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}> {/* Apply open/closed class */}
      <div className={styles.sidebarHeader}>
        <h2 className={styles.logo}>Healthcare.</h2>
        {/* Close button for mobile sidebar when open */}
        <span
          className={`material-symbols-outlined ${styles.closeButton}`}
          onClick={toggleSidebar}
        >
          close
        </span>
      </div>
      <div className={styles.generalSection}>
        <h4 className={styles.sectionTitle}>GENERAL</h4>
        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              href="#"
              className={`${styles.navLink} ${activeLink === link.name ? styles.active : ''}`}
              onClick={() => handleLinkClick(link.name)}
            >
              <span className={`material-symbols-outlined ${styles.navLinkIcon}`}>{link.icon}</span>
              <span className={styles.navLinkText}>{link.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;