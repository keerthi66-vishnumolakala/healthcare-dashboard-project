// src/data/healthData.js

export const anatomicalParts = [
    {
        id: 'heart',
        name: 'Healthy Heart',
        status: 'healthy', // healthy, critical, warning
        position: { top: '30%', left: '50%' } // Adjust these pixel values to accurately place on your human-body.png
    },
    {
        id: 'leg',
        name: 'Healthy Leg',
        status: 'healthy',
        position: { top: '75%', left: '45%' }
    },
    // Add more anatomical parts as needed, adjust positions
];

export const healthStatusCards = [
    {
        id: 'lungs',
        name: 'Lungs', // Make sure this is 'Lungs' (capitalized) or 'LUNGS' if you want uppercase
        status: 'critical', // healthy, critical, warning
        date: '26 Oct 2021',
        progress: 70, // 0-100
        detailsLink: '#'
    },
    {
        id: 'teeth',
        name: 'Teeth',
        status: 'healthy',
        date: '26 Oct 2021',
        progress: 90,
        detailsLink: '#'
    },
    {
        id: 'bone',
        name: 'Bone',
        status: 'warning',
        date: '26 Oct 2021',
        progress: 40,
        detailsLink: '#'
    }
];