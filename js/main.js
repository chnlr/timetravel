// Wait 3.2 seconds after the text appears before showing the time machine
setTimeout(function() {
  const timeMachine = document.getElementById('time-machine');
  timeMachine.style.opacity = '1'; // Fade in the image
  timeMachine.style.transition = 'opacity 1.5s ease'; // Apply fade-in effect
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

  // If the image is not scaled yet, scale it and apply smooth transition
  if (!isScaled) {
    this.style.transform = 'scale(3.2)';
    this.style.transition = 'transform 0.5s ease'; // Smooth scale-in effect
    document.getElementById('year-text').style.display = 'none'; // Hide the text
    isScaled = true; // Mark the image as scaled
  } else {
    // Use the logged coordinates to define the clickable region (adjust based on your clicks)
    if (
      (x >= 625 && x <= 652 && y >= 566 && y <= 604) // Adjusted based on your logged values
    ) {
      this.src = 'images/timemachinesave.png'; // Change the image when this area is clicked
    }
  }
});
