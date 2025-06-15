// Gabe Lehmann
function getGrades(inputSelector) {
  const grades = document.querySelector(inputSelector).value;
  return grades
    .split(",")
    .map((grade) => grade.trim().toUpperCase());
}

function lookupGrade(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  } else {
    points = 0;
  }
  return points;
}

function calculateGpa(grades) {
  const gradePoints = grades.map(lookupGrade);
  const total = gradePoints.reduce((sum, points) => sum + points, 0);
  return (total / gradePoints.length).toFixed(2);
}

function outputGpa(gpa, selector) {
  document.querySelector(selector).innerText = `Your GPA is: ${gpa}`;
}

function clickHandler() {
  const grades = getGrades("#grades");
  const gpa = calculateGpa(grades);
  outputGpa(gpa, "#output");
}

document
  .querySelector("#submitButton")
  .addEventListener("click", clickHandler);
