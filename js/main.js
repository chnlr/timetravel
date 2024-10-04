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
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element
  const y = event.clientY - rect.top;  // y position within the element

  // Log the coordinates to the console (for debugging and tracking)
  console.log('Click coordinates relative to image: X:', x, 'Y:', y);

  // If the image is not scaled yet, scale it and apply smooth transition
  if (!isScaled) {
    this.style.transform = 'scale(3.2)';
    this.style.transition = 'transform 0.5s ease'; // Smooth scale-in effect
    document.getElementById('year-text').style.display = 'none'; // Hide the text
    isScaled = true; // Mark the image as scaled
  } else {
    const currentSrc = this.src;

    // If the current image is timemachinemain.png
    if (currentSrc.includes('timemachinemain.png')) {
      // Region for /images/timemachinenew.png
      if (x >= 601 && x <= 649 && y >= 546 && y <= 586) {
        this.src = 'images/timemachinenew.png'; // Change to new image
        return;
      }

      // Region for /images/timemachineprevious.png
      if (x >= 625 && x <= 674 && y >= 578 && y <= 620) {
        this.src = 'images/timemachineprevious.png'; // Change to previous image
        return;
      }

      // Region for /images/timemachinesaved.png
      if (x >= 610 && x <= 667 && y >= 561 && y <= 605) {
        this.src = 'images/timemachinesave.png'; // Change to saved image
        return;
      }
    }

    // If the current image is timemachinenew.png, go back to timemachinemain.png
    if (currentSrc.includes('timemachinenew.png')) {
      if (x >= 557 && x <= 629 && y >= 564 && y <= 682) { // Use the coordinates you provided
        this.src = 'images/timemachinemain.png'; // Switch back to the main image
        return;
      }
    }
  }
});
