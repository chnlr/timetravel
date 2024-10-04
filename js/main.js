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

// Wait 3.2 seconds after the text appears before showing the time machine
setTimeout(function() {
  document.getElementById('time-machine').style.opacity = '1'; // Fade in the image
}, 3200); // 3200 milliseconds = 3.2 seconds

// Track whether the image is scaled or not
let isScaled = false;

// Add a click event listener to the time machine image
document.getElementById('time-machine').addEventListener('click', function(event) {
  // Get the click position relative to the image
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element
  const y = event.clientY - rect.top;  // y position within the element

  // Log the coordinates to the console (for debugging)
  console.log('Click coordinates relative to image: X:', x, 'Y:', y);

  // If the image is not scaled yet, scale it
  if (!isScaled) {
    this.style.transform = 'scale(3.2)';
    this.style.transition = 'transform 0.5s ease';
    document.getElementById('year-text').style.display = 'none'; // Hide the text
    isScaled = true; // Mark the image as scaled

    // Show the inner content (time machine details and history button)
    document.getElementById('inner-content').style.display = 'block';
  } else {
    // If the image is scaled, check for a click in the defined region (after scaling)
    const scaledX = x / 3.2; // Adjust the click to account for scaling
    const scaledY = y / 3.2; // Adjust the click to account for scaling

    // Define the clickable region for image change (use your scaled coordinates)
    if (
      (scaledX >= 2051 && scaledX <= 2077 && scaledY >= 1968 && scaledY <= 2013) ||
      (scaledX >= 2211 && scaledX <= 2186 && scaledY >= 1923 && scaledY <= 1875)
    ) {
      // Change the image source to the "saved" version when this region is clicked
      this.src = 'images/timemachinesaved.png';
      return; // Stop further execution after the image is changed
    }
  }
});

// Add event listener for the "History" button click (after it is shown)
document.getElementById('history').addEventListener('click', function() {
  // Trigger a random history event (for future implementation)
  alert('Random historical event!');
});