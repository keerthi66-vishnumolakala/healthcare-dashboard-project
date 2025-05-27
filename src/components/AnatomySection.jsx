// src/components/AnatomySection.jsx
import React from 'react';
import styles from '../styles/AnatomySection.module.css';
import { anatomicalParts } from '../data/healthData'; // Import data for highlights
import humanBodyImg from '../assets/human-body.png'; // Make sure this path is correct for your image!

function AnatomySection() {
  return (
    <div className={styles.anatomySection}>
      <div className={styles.anatomyImageContainer}>
        <img src={humanBodyImg} alt="Human Anatomy" className={styles.humanBodyImage} />
        {anatomicalParts.map((part) => (
          <div
            key={part.id}
            className={`${styles.indicator} ${styles[part.status]}`} /* Use status for dynamic styling */
            style={{ top: part.position.top, left: part.position.left }} /* Position based on data */
          >
            <span className={styles.indicatorDot}></span>
            <span className={styles.indicatorText}>{part.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;