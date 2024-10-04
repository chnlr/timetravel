document.getElementById('time-machine').innerHTML = `
  <h2>Time Machine (Real)</h2>
  <button id="history">History</button>
`;

document.getElementById('history').addEventListener('click', function() {
  // Random history event generation here
  alert('Random historical event!');
});

// Wait 5 seconds after the text appears before showing the time machine
setTimeout(function() {
  document.getElementById('time-machine').style.opacity = '1'; // Fade in the image
}, 5000); // 5000 milliseconds = 5 seconds

// Add a click event listener to the time machine image
document.getElementById('time-machine').addEventListener('click', function() {
  // Make the year text disappear
  document.getElementById('year-text').style.display = 'none';
  
  // Enlarge the time machine image
  this.style.transform = 'scale(3.2)'; // Scale it up
  this.style.transition = 'transform 0.5s ease'; // Smooth transition
});

// Get the clickable area (from the image map)
const clickableArea = document.getElementById('timeMachineArea');

// Add an event listener to change the image when the area is clicked
clickableArea.addEventListener('click', function() {
  // Change the image source to the new one
  const timeMachineImage = document.getElementById('time-machine');
  timeMachineImage.src = 'images/timemachinesaved.png'; // Relative path to the image
});