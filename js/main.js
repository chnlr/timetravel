// Show the inner content of the time machine
document.getElementById('time-machine').innerHTML = `
  <h2>Time Machine (Real)</h2>
  <button id="history">History</button>
`;

// Add event listener for the "History" button click
document.getElementById('history').addEventListener('click', function() {
  // Trigger a random history event (for future implementation)
  alert('Random historical event!');
});

// Wait 5 seconds after the text appears before showing the time machine
setTimeout(function() {
  document.getElementById('time-machine').style.opacity = '1'; // Fade in the image
}, 3200); // 5000 milliseconds = 3.2 seconds

// Track whether the image is scaled or not
let isScaled = false; 

// Add a click event listener to the time machine image
document.getElementById('time-machine').addEventListener('click', function(event) {
  // Get the click position relative to the image
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element
  const y = event.clientY - rect.top;  // y position within the element

  // If the image is scaled up already, check for a click in the defined region to change the image
  if (isScaled) {
    // Define a smaller clickable region for image change (adjust coordinates as needed)
    if (x > 100 && x < 200 && y > 100 && y < 200) {
      // Change the image source to the "saved" version when this region is clicked
      this.src = 'images/timemachinesaved.png';
      return; // Stop further execution after the image is changed
    }
  }

  // If the image is not scaled yet, scale it
  if (!isScaled) {
    this.style.transform = 'scale(3.2)';
    this.style.transition = 'transform 0.5s ease';
    document.getElementById('year-text').style.display = 'none'; // Hide the text
    isScaled = true; // Mark the image as scaled

    // Show the inner content (time machine details and history button)
    document.getElementById('inner-content').style.display = 'block';
  }
});

// Add event listener for the "History" button click (after it is shown)
document.getElementById('history').addEventListener('click', function() {
  // Trigger a random history event (for future implementation)
  alert('Random historical event!');
});