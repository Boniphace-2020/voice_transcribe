// Data
const students = new Set();
const gradesMap = new Map();

// Function to add a new student
function addStudent(name, id) {
    // Check if the student with the same name and ID already exists
    const isExistingStudent = Array.from(students).some(student => student.name === name && student.id === id);

    if (isExistingStudent) {
        console.log("Student with the same name and ID already exists.");
        return;
    }

    // Destructuring assignment to extract name and id
    const student = { name, id };

    students.add(student);
    gradesMap.set(student, new Map());

    // Update the student select options
    updateStudentSelect();
}

// Function to record a grade for a student and subject
function recordGrade(student, subject, grade) {
    const grades = gradesMap.get(student);

    // Using spread syntax to add the grade
    grades.set(subject, [...grades.get(subject) || [], grade]);

    // Display the updated performance
    displayPerformance();
}

// Function to calculate the average grade for a subject
function calculateAverageGrade(student, subject) {
    const grades = gradesMap.get(student).get(subject);

    // Using reduce and spread syntax to calculate the average
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    return average.toFixed(2);
}

// Function to update the student select options
function updateStudentSelect() {
    const studentSelect = document.getElementById('studentSelect');

    // Clear existing options
    studentSelect.innerHTML = '';

    // Add options for each student
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        option.innerText = student.name;
        studentSelect.appendChild(option);
    });
}

// Function to display the student's performance
function displayPerformance() {
    const performanceContainer = document.getElementById('performanceContainer');
    performanceContainer.innerHTML = '';

    students.forEach(student => {
        const studentGrades = gradesMap.get(student);
        const studentPerformance = document.createElement('div');
        studentPerformance.innerHTML = `<h3>${student.name}</h3>`;

        if (studentGrades.size > 0) {
            studentGrades.forEach((grades, subject) => {
                const averageGrade = calculateAverageGrade(student, subject);
                studentPerformance.innerHTML += `<p>${subject}: ${grades.join(', ')} (Average: ${averageGrade})</p>`;
            });
        } else {
            studentPerformance.innerHTML += '<p>No grades recorded.</p>';
        }

        performanceContainer.appendChild(studentPerformance);
    });
}

// Event listeners
document.getElementById('addStudentForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const id = document.getElementById('idInput').value;
    addStudent(name, id);
    e.target.reset();
});

document.getElementById('recordGradesForm').addEventListener('submit', e => {
    e.preventDefault();
    const studentId = document.getElementById('studentSelect').value;
    const subject = document.getElementById('subjectInput').value;
    const grade = parseInt(document.getElementById('gradeInput').value);
    const student = Array.from(students).find(student => student.id === studentId);
    recordGrade(student, subject, grade);
    e.target.reset();
});

// Initialize the application
function initialize() {
    updateStudentSelect();
    displayPerformance();
}

initialize();