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
document.getElementById('time-machine').addEventListener('click', function(event) {
  // Get the click position relative to the image
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element
  const y = event.clientY - rect.top;  // y position within the element

  // Define the specific region for switching the image (adjust these coordinates)
  if (x > 100 && x < 200 && y > 100 && y < 200) {
    // Change to the "saved" image
    this.src = 'images/timemachinesaved.png';
    return; // Exit the function to prevent scaling after switching images
  }

  // If the user clicks anywhere else, apply the scaling behavior
  this.style.transform = 'scale(3.2)'; // Scale up the main image
  this.style.transition = 'transform 0.5s ease'; // Smooth transition for scaling
  
  // Make the year text disappear
  document.getElementById('year-text').style.display = 'none';
});