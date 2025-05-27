// src/components/ActivityFeed.jsx
import React from 'react';
import styles from '../styles/ActivityFeed.module.css';

function ActivityFeed() {
  return (
    <section className={styles.activityFeed}>
      {/* ... existing header and chartContainer ... */}
      <div className={styles.chartContainer}>
        {/* Temporarily remove or comment out this line: */}
        {/* <img src="https://via.placeholder.com/400x150/EBF2FF/3E82FC?text=Activity+Chart" alt="Activity Chart Placeholder" className={styles.chartImage} /> */}

        {/* Keep your mock bars */}
        <div className={styles.mockChartBars}>
            {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className={styles.barColumn}>
                    <div className={styles.bar} style={{ height: `${(index + 1) * 10 + 20}%` }}></div>
                    <span className={styles.barLabel}>{day}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ActivityFeed;