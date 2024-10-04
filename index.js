// script
let courseCount = 0;

function addCourse() {
    courseCount++;

    // Create input fields for course, credit units, and grade
    let div = document.createElement('div');
    div.id = `course${courseCount}`;
    div.innerHTML = `
        <h4>Course ${courseCount}</h4>
        <label>Credit Units: <input type="number" id="credit${courseCount}" min="1" required></label>
        <label>Grade (A=5, B=4, C=3, D=2, E=1, F=0): 
            <input type="number" id="grade${courseCount}" min="0" max="5" required>
        </label>
        <button onclick="removeCourse(${courseCount})">Remove Course</button>
        <br><br>
    `;
    document.getElementById('courseInputs').appendChild(div);
}

function removeCourse(id) {
    document.getElementById(`course${id}`).remove();
}

function calculateGPA() {
    let totalQualityPoints = 0;
    let totalCreditUnits = 0;

    for (let i = 1; i <= courseCount; i++) {
        if (document.getElementById(`credit${i}`)) {
            let creditUnits = parseFloat(document.getElementById(`credit${i}`).value);
            let grade = parseFloat(document.getElementById(`grade${i}`).value);

            if (!isNaN(creditUnits) && !isNaN(grade)) {
                totalQualityPoints += creditUnits * grade;
                totalCreditUnits += creditUnits;
            }
        }
    }

    let gpa = totalQualityPoints / totalCreditUnits;
    document.getElementById('gpaResult').innerText = gpa.toFixed(2);
}
// script end