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

  // Ensure that the coordinates only apply to the correct image
  const currentImageSrc = this.src;

  // If the image is not scaled yet, scale it and apply smooth transition
  if (!isScaled) {
    this.style.transform = 'scale(3.2)';
    this.style.transition = 'transform 0.5s ease'; // Smooth scale-in effect
    document.getElementById('year-text').style.display = 'none'; // Hide the text
    isScaled = true; // Mark the image as scaled
  } else {
    // Check if the current image is /images/timemachinemain.png
  if (currentImageSrc.includes('timemachinemain.png')) {
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
  }

  // Check if the current image is /images/timemachinemenu.png (MENU)
  if (currentImageSrc.includes('timemachinemenu.png')) {
    // Region for /images/timemachinesettings.png (SETTINGS)
    if (x >= 549 && x <= 663 && y >= 558 && y <= 624) {
      this.src = 'images/timemachinesettings.png'; // Change to settings image
      return;
    }

    // Region for /images/timemachinehelp.png (HELP)
    if (x >= 540 && x <= 620 && y >= 520 && y <= 595) {
      this.src = 'images/timemachinehelp.png'; // Change to help image
      return;
    }
  }

  // Check if the current image is /images/timemachinesave.png (SAVED)
  if (currentImageSrc.includes('timemachinesave.png')) {
    // Coordinates for saved.png
    if (
      (x >= 614 && x <= 662 && y >= 561 && y <= 624) ||
      (x >= 621 && x <= 654 && y >= 561 && y <= 601)
    ) {
      console.log("Saved area clicked!");
      return;
    }
  }

  // Check if the current image is /images/timemachineprevious.png (PAST)
  if (currentImageSrc.includes('timemachineprevious.png')) {
    // Coordinates for past.png
    if (
      (x >= 626 && x <= 673 && y >= 578 && y <= 620) ||
      (x >= 616 && x <= 665 && y >= 590 && y <= 616)
    ) {
      console.log("Past area clicked!");
      return;
    }
  }

    // Check if the current image is /images/timemachinemenu.png (MENU)
    if (currentImageSrc.includes('timemachinemenu.png')) {
      // Coordinates for menu.png
      if (
        (x >= 549 && x <= 691 && y >= 558 && y <= 624) ||
        (x >= 661 && x <= 691 && y >= 609 && y <= 620)
      ) {
        console.log("Menu area clicked!");
        return;
      }
    }
  }
});

// Add a click event listener for the "back" button in other images to return to main.png
document.getElementById('time-machine').addEventListener('click', function(event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const currentImageSrc = this.src;

  // Define back button clickable area for /images/timemachinenew.png
  if (currentImageSrc.includes('timemachinenew.png') && x >= 552 && x <= 607 && y >= 643 && y <= 673) {
    this.src = 'images/timemachinemain.png'; // Go back to main from new.png
    return;
  }

  // Other back button areas for saved, previous, and menu images
  if (currentImageSrc.includes('timemachinesave.png') && x >= 605 && x <= 665 && y >= 610 && y <= 645) {
    this.src = 'images/timemachinemain.png'; // Go back to main from save.png
  }
  if (currentImageSrc.includes('timemachineprevious.png') && x >= 605 && x <= 655 && y >= 610 && y <= 650) {
    this.src = 'images/timemachinemain.png'; // Go back to main from previous.png
  }
  if (currentImageSrc.includes('timemachinemenu.png') && x >= 610 && x <= 660 && y >= 620 && y <= 660) {
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
  const currentImageSrc = this.src;

  // Detect if the user clicked the "Previous" area (adjust coordinates as needed)
  if (currentImageSrc.includes('timemachineprevious.png') && x >= 625 && x <= 674 && y >= 578 && y <= 620) {
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
