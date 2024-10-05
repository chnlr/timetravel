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
    // Refined clickable regions based on the screenshot reference

    // Region for /images/timemachinenew.png (NEW)
    if (x >= 605 && x <= 640 && y >= 548 && y <= 572) {
      this.src = 'images/timemachinenew.png'; // Change to new image
      return;
    }

    // Region for /images/timemachinesave.png (SAVED)
    if (x >= 615 && x <= 640 && y >= 572 && y <= 604) {
      this.src = 'images/timemachinesave.png'; // Change to saved image
      return;
    }

    // Region for /images/timemachineprevious.png (PAST)
    if (x >= 650 && x <= 675 && y >= 580 && y <= 619) {
      this.src = 'images/timemachineprevious.png'; // Change to previous image
      return;
    }

    // Region for /images/timemachinemenu.png (MENU)
    if (x >= 658 && x <= 688 && y >= 595 && y <= 620) {
      this.src = 'images/timemachinemenu.png'; // Change to menu image
      return;
    }

    // **New Region for /images/timemachinehelp.png** on the /menu page
    if (this.src.includes('timemachinemenu.png') && x >= 540 && x <= 620 && y >= 520 && y <= 595) {
      this.src = 'images/timemachinehelp.png'; // Change to help image from menu
      return;
    }
  }
});

// Add a click event listener for the "back" button in other images to return to main.png
document.getElementById('time-machine').addEventListener('click', function(event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Define back button clickable area for /images/timemachinenew.png
  if (this.src.includes('timemachinenew.png') && x >= 552 && x <= 607 && y >= 643 && y <= 673) {
    this.src = 'images/timemachinemain.png'; // Go back to main from new.png
    return;
  }

  // Other back button areas for saved, previous, and menu images
  if (this.src.includes('timemachinesave.png') && x >= 605 && x <= 665 && y >= 610 && y <= 645) {
    this.src = 'images/timemachinemain.png'; // Go back to main from save.png
  }
  if (this.src.includes('timemachineprevious.png') && x >= 605 && x <= 655 && y >= 610 && y <= 650) {
    this.src = 'images/timemachinemain.png'; // Go back to main from previous.png
  }
  if (this.src.includes('timemachinemenu.png') && x >= 610 && x <= 660 && y >= 620 && y <= 660) {
    this.src = 'images/timemachinemain.png'; // Go back to main from menu.png
  }
});

// Track if past.js has been triggered
let isPastTriggered = false;

// Detect if the user clicked the "Previous" area
document.getElementById('time-machine').addEventListener('click', function(event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element
  const y = event.clientY - rect.top;  // y position within the element

  // Detect if the user clicked the "Previous" area (adjust coordinates as needed)
  if (x >= 625 && x <= 674 && y >= 578 && y <= 620) {
    // Load past.js every time the previous path is clicked
    console.log("Loading past.js...");
    loadPastScript(); // Always load past.js on every click
  }
});

function loadPastScript() {
  const script = document.createElement('script');
  script.src = 'js/past.js'; // Load past.js dynamically
  script.onload = function() {
    console.log("past.js loaded successfully!");
  };
  script.onerror = function() {
    console.error("Error loading past.js!");
  };
  document.body.appendChild(script);
}