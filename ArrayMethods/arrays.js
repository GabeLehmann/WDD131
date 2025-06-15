// Gabe Lehmann

// Activity 1 - Map
const steps = ["one", "two", "three"];
const listTemplate = (step) => `<li>${step}</li>`;
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2 - Map
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3 - Reduce
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Activity 4 - Filter
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(word => word.length < 6);

// Activity 5 - indexOf
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
