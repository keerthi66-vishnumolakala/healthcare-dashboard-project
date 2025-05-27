// src/components/DashboardOverview.jsx
import React from 'react';
import styles from '../styles/DashboardOverview.module.css';

// Import the sub-components that will be inside this overview
import AnatomySection from './AnatomySection'; // To be created next
import HealthStatusCards from './HealthStatusCards'; // To be created next

function DashboardOverview() {
  return (
    <section className={styles.dashboardOverview}>
      {/* These components will be placed here */}
      <AnatomySection />
      <HealthStatusCards />
    </section>
  );
}

export default DashboardOverview;