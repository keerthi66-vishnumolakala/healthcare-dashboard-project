// src/data/calendarData.js

export const allMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Default starting month (adjust this to your desired initial month)
export const initialMonthIndex = allMonths.indexOf("October"); // Start with October

export const calendarDays = [
    // ... (your existing calendarDays data) ...
    // Ensure you have 25-31 and their times.
    // For example:
    { day: 25, weekday: 'Mon', times: [] },
    { day: 26, weekday: 'Tues', times: [0, 1] }, // Two appointments
    { day: 27, weekday: 'Wed', times: [0, 1, 2] }, // Three appointments (active day)
    { day: 28, weekday: 'Thurs', times: [] },
    { day: 29, weekday: 'Fri', times: [0] },
    { day: 30, weekday: 'Sat', times: [0] },
    { day: 31, weekday: 'Sun', times: [] },
];

export const currentAppointments = [
    {
        id: 1,
        icon: 'dental_floss',
        title: 'Dentist',
        time: '09:00 - 11:00',
        doctor: 'Dr. Cameron Williamson',
        day: '27 Oct', // Add day for clarity in UI if needed, or remove
    },
    {
        id: 2,
        icon: 'sports_and_outdoors',
        title: 'Physiotherapy Appointment',
        time: '11:00 - 12:00',
        doctor: 'Dr. Kevin Djones',
        day: '27 Oct',
    },
    // ... add more appointments if needed ...
];