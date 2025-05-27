// src/components/DashboardMainContent.jsx
import React from 'react';
import styles from '../styles/DashboardMainContent.module.css';

// We'll import these sub-components later when we create them
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

function DashboardMainContent() {
  return (
    <main className={styles.dashboardMainContent}>
      <h1 className={styles.dashboardTitle}>Dashboard</h1>
      <div className={styles.gridContainer}>
        {/* These components will be placed into the grid in subsequent steps */}
        <DashboardOverview />
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </main>
  );
}

export default DashboardMainContent;