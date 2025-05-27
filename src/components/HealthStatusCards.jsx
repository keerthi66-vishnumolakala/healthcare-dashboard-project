// src/components/HealthStatusCards.jsx
import React from 'react';
import styles from '../styles/HealthStatusCards.module.css';
import { healthStatusCards } from '../data/healthData';

function HealthStatusCards() {
  // This function simply returns the string name of the Material Symbol icon
  const getCardIcon = (id) => {
    switch (id) {
      case 'lungs': return 'lungs';
      case 'teeth': return 'dentistry';
      case 'bone': return 'skeletal_mesh';
      default: return 'help';
    }
  };

  return (
    <div className={styles.healthStatusCards}>
      {healthStatusCards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.cardHeader}>
            {/* CORRECTED: Only the class and the icon name as text content. */}
            {/* The Material Symbols font renders the graphic based on the text. */}
            <span className={`material-symbols-outlined ${styles.cardIcon}`}>
              {getCardIcon(card.id)}
            </span>
            <span className={styles.cardTitle}>{card.name}</span> {/* This is the actual name, e.g., "Lungs" */}
            <span className={`${styles.cardStatus} ${styles[card.status]}`}>
              {card.status}
            </span>
          </div>
          <p className={styles.cardDate}>{card.date}</p>
          <div className={styles.progressBarContainer}>
            <div
              className={`${styles.progressBar} ${styles[card.status]}`}
              style={{ width: `${card.progress}%` }}
            ></div>
          </div>
          <a href="#" className={styles.detailsLink}>Details</a>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;