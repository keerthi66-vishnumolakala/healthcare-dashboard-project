// src/components/CalendarView.jsx
import React, { useState } from 'react';
import styles from '../styles/CalendarView.module.css';
import { allMonths, initialMonthIndex, calendarDays, currentAppointments } from '../data/calendarData';

function CalendarView() {
  // Manage the current month index
  const [currentMonthIndex, setCurrentMonthIndex] = useState(initialMonthIndex);

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === 0 ? allMonths.length - 1 : prevIndex - 1
    );
    // In a real app, you'd also recalculate calendarDays and currentAppointments based on the new month
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === allMonths.length - 1 ? 0 : prevIndex + 1
    );
    // In a real app, you'd also recalculate calendarDays and currentAppointments based on the new month
  };

  return (
    <section className={styles.calendarView}>
      <div className={styles.calendarHeader}>
        <h3 className={styles.month}>{allMonths[currentMonthIndex]} 2021</h3> {/* Display current month */}
        <div className={styles.navArrows}>
          <span className="material-symbols-outlined" onClick={handlePrevMonth}>chevron_left</span>
          <span className="material-symbols-outlined" onClick={handleNextMonth}>chevron_right</span>
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className={styles.gridHeader}>{day}</div>
        ))}
        {calendarDays.map((dayData) => (
          <div
            key={dayData.day}
            className={`${styles.dayCell} ${dayData.day === 27 && allMonths[currentMonthIndex] === 'October' ? styles.activeDay : ''}`} /* "27" is active in design if October */
          >
            <div className={styles.dayNumber}>{dayData.day}</div>
            {dayData.times.length > 0 && (
              <div className={styles.appointmentDots}>
                {dayData.times.map((time, index) => (
                  <span key={index} className={styles.appointmentDot}></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.appointmentsList}>
        {/* Filter appointments by the active day if calendar interaction is desired */}
        {currentAppointments.map((appointment) => (
          <div key={appointment.id} className={styles.appointmentItem}>
            <span className={`material-symbols-outlined ${styles.appointmentIcon}`}>
              {appointment.icon}
            </span>
            <div className={styles.appointmentDetails}>
              <p className={styles.appointmentTitle}>{appointment.title}</p>
              <p className={styles.appointmentTime}>{appointment.time}</p>
              <p className={styles.appointmentDoctor}>{appointment.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CalendarView;