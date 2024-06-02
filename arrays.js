// Define the array of steps
const steps = ["one", "two", "three"];

// Function to convert a step into an HTML list item
function listTemplate(step) {
  return `<li>${step}</li>`;
}

// Use map to convert the list from strings to HTML
const stepsHtml = steps.map(listTemplate);

// Set the innerHTML of the myList element
document.querySelector("#myList").innerHTML = stepsHtml.join('');


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

