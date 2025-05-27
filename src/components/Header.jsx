// src/components/Header.jsx
import React from 'react';
import styles from '../styles/Header.module.css';

function Header({ toggleSidebar }) { // Receive toggleSidebar prop
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <span
          className={`material-symbols-outlined ${styles.hamburgerIcon}`}
          onClick={toggleSidebar} // Add onClick handler
        >
          menu
        </span>
        <div className={styles.searchBar}>
          <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <span className={`material-symbols-outlined ${styles.headerIcon}`}>add</span>
        <span className={`material-symbols-outlined ${styles.headerIcon}`}>notifications</span>
        <div className={styles.userProfile}>
          <span className={`material-symbols-outlined ${styles.userIcon}`}>account_circle</span>
          <span className={styles.userName}>User</span>
        </div>
      </div>
    </header>
  );
}

export default Header;