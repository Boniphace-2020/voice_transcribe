document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const studentsLink = document.getElementById('students-link');
    const eventsLink = document.getElementById('events-link');

    const homeSection = document.getElementById('home');
    const studentsSection = document.getElementById('students');
    const eventsSection = document.getElementById('events');

    const addStudentBtn = document.getElementById('add-student-btn');
    const addEventBtn = document.getElementById('add-event-btn');
    const studentsList = document.getElementById('students-list').getElementsByTagName('tbody')[0];
    const eventsList = document.getElementById('events-list');

    // Sample students and events data
    let students = [];
    let events = [];

    // Function to show a section and hide others
    function showSection(section) {
        homeSection.style.display = 'none';
        studentsSection.style.display = 'none';
        eventsSection.style.display = 'none';

        section.style.display = 'block';
    }

    // Click event listeners for navigation
    homeLink.addEventListener('click', () => {
        showSection(homeSection);
    });

    studentsLink.addEventListener('click', () => {
        showSection(studentsSection);
    });

    eventsLink.addEventListener('click', () => {
        showSection(eventsSection);
    });

    // Initially show the home section
    showSection(homeSection);

    // Add new student
    addStudentBtn.addEventListener('click', () => {
        const name = prompt('Enter student name:');
        const age = prompt('Enter student age:');
        const studentClass = prompt('Enter student class:');

        const student = { name, age, studentClass };
        students.push(student);

        // Refresh students list
        updateStudentsList();
    });

    // Add new event
    addEventBtn.addEventListener('click', () => {
        const eventName = prompt('Enter event name:');
        const eventDate = prompt('Enter event date:');

        const event = `${eventName} - ${eventDate}`;
        events.push(event);

        // Refresh events list
        updateEventsList();
    });

    // Update students table
    function updateStudentsList() {
        studentsList.innerHTML = '';
        students.forEach((student, index) => {
            const row = studentsList.insertRow();
            row.insertCell(0).textContent = student.name;
            row.insertCell(1).textContent = student.age;
            row.insertCell(2).textContent = student.studentClass;
            const actionCell = row.insertCell(3);
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                students.splice(index, 1);
                updateStudentsList();
            });
            actionCell.appendChild(deleteBtn);
        });
    }

    // Update events list
    function updateEventsList() {
        eventsList.innerHTML = '';
        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = event;
            eventsList.appendChild(li);
        });
    }
});
