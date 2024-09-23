// Load existing student data from local storage
let students = JSON.parse(localStorage.getItem('students')) || [];

// Function to display student details
function displayStudents(studentList) {
    const studentListContainer = document.getElementById('student-list');
    studentListContainer.innerHTML = ''; // Clear previous content

    studentList.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `Name: ${student.name}, Roll Number: ${student.roll}, Branch: ${student.branch}, Talent: ${student.talent}, Year: ${student.year}`;
        studentListContainer.appendChild(li);
    });
}

// Function to search for a student by name
function searchStudent(name) {
    const searchResult = students.filter(student => student.name.toLowerCase() === name.toLowerCase());
    if (searchResult.length > 0) {
        displayStudents(searchResult);
    } else {
        alert('Student not found!');
    }
}

// Add event listener to add button
document.getElementById('add-button').addEventListener('click', function() {
    const name = document.getElementById('name-input').value.trim();
    const roll = document.getElementById('roll-input').value.trim();
    const branch = document.getElementById('branch-input').value.trim();
    const talent = document.getElementById('talent-input').value.trim();
    const year = document.getElementById('year-input').value.trim();

    // Create student object
    const student = {
        name: name,
        roll: roll,
        branch: branch,
        talent: talent,
        year: year
    };

    // Add student to the array
    students.push(student);

    // Save students array to local storage
    localStorage.setItem('students', JSON.stringify(students));

    // Display updated list of students
    displayStudents(students);

    // Clear input fields
    document.getElementById('name-input').value = '';
    document.getElementById('roll-input').value = '';
    document.getElementById('branch-input').value = '';
    document.getElementById('talent-input').value = '';
    document.getElementById('year-input').value = '';
});

// Add event listener to search button
document.getElementById('search-button').addEventListener('click', function() {
    const name = document.getElementById('search-input').value.trim();
    if (name !== '') {
        searchStudent(name);
    } else {
        alert('Please enter a student name to search.');
    }
});

// Display all students on page load
displayStudents(students);
