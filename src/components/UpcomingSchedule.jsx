// src/components/UpcomingSchedule.jsx
import React from 'react';
import styles from '../styles/UpcomingSchedule.module.css';
import { upcomingSchedule } from '../data/upcomingAppointments'; // Import data

function UpcomingSchedule() {
  return (
    <section className={styles.upcomingSchedule}>
      <h3 className={styles.title}>The Upcoming Schedule</h3>
      <div className={styles.scheduleList}>
        {upcomingSchedule.map((dayData, index) => (
          <div key={index} className={styles.daySection}>
            <h4 className={styles.dayHeading}>{dayData.day}</h4>
            <div className={styles.appointmentsGrid}>
              {dayData.appointments.map((appointment) => (
                <div key={appointment.id} className={styles.appointmentCard}>
                  <span className={`material-symbols-outlined ${styles.appointmentIcon}`}>
                    {appointment.icon}
                  </span>
                  <div className={styles.appointmentDetails}>
                    <p className={styles.appointmentTitle}>{appointment.title}</p>
                    <p className={styles.appointmentTime}>{appointment.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingSchedule;