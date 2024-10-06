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
        clickedRegions.new = true; // Mark 'new' as clicked
        checkIfAllClicked(); // Check if all regions are clicked
        return;
      }

      // Region for /images/timemachinesave.png (SAVED)
      if (
        (x >= 618 && x <= 664 && y >= 561 && y <= 600) // Updated rectangle coordinates for saved region
      ) {
        this.src = 'images/timemachinesave.png'; // Change to saved image
        clickedRegions.saved = true; // Mark 'saved' as clicked
        checkIfAllClicked(); // Check if all regions are clicked
        return;
      }

      // Region for /images/timemachineprevious.png (PAST)
      if (
        (x >= 628 && x <= 674 && y >= 578 && y <= 617) // Updated rectangle coordinates for past region
      ) {
        this.src = 'images/timemachineprevious.png'; // Change to previous image
        clickedRegions.past = true; // Mark 'past' as clicked
        checkIfAllClicked(); // Check if all regions are clicked
        return;
      }

      // Region for /images/timemachinemenu.png (MENU)
      if (x >= 658 && x <= 688 && y >= 595 && y <= 620) {
        this.src = 'images/timemachinemenu.png'; // Change to menu image
        clickedRegions.menu = true; // Mark 'menu' as clicked
        checkIfAllClicked(); // Check if all regions are clicked
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

// Add a click event listener for the settings image to go back to main.png
document.getElementById('time-machine').addEventListener('click', function(event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const currentImageSrc = this.src;

  // Detect if the current image is /images/timemachinesettings.png
  if (currentImageSrc.includes('timemachinesettings.png')) {
    // Check if the click falls within the provided coordinates for going back to main.png
    if (
      (x >= 615 && x <= 633 && y >= 501 && y <= 517)
    ) {
      this.src = 'images/timemachinemain.png'; // Go back to main from settings.png
      return;
    }
  }
});

// Define the object to track clicks for each region on the main image
const clickedRegions = {
  new: false,
  saved: false,
  past: false,
  menu: false
};

// Function to check if all regions have been clicked
function checkIfAllClicked() {
  return clickedRegions.new && clickedRegions.saved && clickedRegions.past && clickedRegions.menu;
}
// Add event listener to the time machine image
document.getElementById('time-machine').addEventListener('click', function(event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const currentImageSrc = this.src;

  // Ensure this only applies to the main image
  if (currentImageSrc.includes('timemachinemain.png')) {
    // Track clicks on each region

    // Region for /images/timemachinenew.png (NEW)
    if (x >= 605 && x <= 640 && y >= 548 && y <= 572) {
      this.src = 'images/timemachinenew.png';
      clickedRegions.new = true; // Mark new region as clicked
    }

    // Region for /images/timemachinesave.png (SAVED)
    if (x >= 615 && x <= 640 && y >= 572 && y <= 604) {
      this.src = 'images/timemachinesave.png';
      clickedRegions.saved = true; // Mark saved region as clicked
    }

    // Region for /images/timemachineprevious.png (PAST)
    if (x >= 650 && x <= 675 && y >= 580 && y <= 619) {
      this.src = 'images/timemachineprevious.png';
      clickedRegions.past = true; // Mark past region as clicked
    }

    // Region for /images/timemachinemenu.png (MENU)
    if (x >= 658 && x <= 688 && y >= 595 && y <= 620) {
      this.src = 'images/timemachinemenu.png';
      clickedRegions.menu = true; // Mark menu region as clicked
    }

    // After each click, check if all regions are clicked
    if (checkIfAllClicked()) {
      console.log('All regions clicked! Starting the new story...');
      loadNewStoryScript(); // Trigger the next part of the story
    }
  }
});

// Function to load the new story script (newstory.js)
function loadNewStoryScript() {
  const script = document.createElement('script');
  script.src = 'js/newstory.js'; // Load newstory.js dynamically
  script.onload = function() {
    console.log("newstory.js loaded successfully!");
  };
  script.onerror = function() {
    console.error("Error loading newstory.js!");
  };
  document.body.appendChild(script);
}

// Add a click event listener to handle clicks on saved.png
document.getElementById('time-machine').addEventListener('click', function(event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element
  const y = event.clientY - rect.top;  // y position within the element
  const currentImageSrc = this.src;

  // Ensure the code only applies to saved.png
  if (currentImageSrc.includes('timemachinesave.png')) {
    // Check if the click falls within the specified coordinates
    if (
      (x >= 637 && x <= 673 && y >= 532 && y <= 578)  // Adjust the range based on your specific coords
    ) {
      // Change to the new image
      this.src = 'images/timemachine420.png';

      // Change the background color of the page
      document.body.classList.add('new-background-color');

      // Create the floating image (timemachinepen.png)
      const floatingPen = document.createElement('img');
      floatingPen.src = 'images/timemachinepen.png';
      floatingPen.id = 'floating-pen';
      document.body.appendChild(floatingPen); // Append it to the body

      // ** Adjust the positioning of the 420 image **
      const mainImage = document.getElementById('time-machine');
      mainImage.style.position = 'relative'; // Ensure the image is positioned
      mainImage.style.top = '-90px'; // Adjust this value to move it higher up
      mainImage.style.zIndex = '1'; // Ensure it remains on top

      return;
    }
  }
});

// Track whether the "pushed" state is active or not
let isPushed = false;

// Add a click event listener to handle interactions
document.getElementById('time-machine').addEventListener('click', function(event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element
  const y = event.clientY - rect.top;  // y position within the element
  const currentImageSrc = this.src;

  // Ensure the code applies to main.png or timemachinemainsimpushed.png
  if (currentImageSrc.includes('timemachinemain.png') || currentImageSrc.includes('timemachinemainsimpushed.png')) {
    // Check if the click falls within the specified coordinates for main and pushed images
    if (
      (x >= 372 && x <= 425 && y >= 582 && y <= 650)  // Adjust the range based on your specific coords
    ) {
      // Toggle between main.png and timemachinemainsimpushed.png
      if (!isPushed) {
        this.src = 'images/timemachinemainsimpushed.png'; // Change to pushed image
        isPushed = true;
      } else {
        this.src = 'images/timemachinemain.png'; // Change back to main image
        isPushed = false;
      }
      return;
    }
  }

  // Ensure that all regions that work on main.png also work on timemachinemainsimpushed.png
  if (currentImageSrc.includes('timemachinemain.png') || currentImageSrc.includes('timemachinemainsimpushed.png')) {
    // Add your other region checks here (like new, saved, etc.)
  }

  // Handle 420 screen clicks
  if (currentImageSrc.includes('timemachine420.png')) {
    console.log('Click coordinates relative to image: X:', x, 'Y:', y);
    
    // Updated region for clicking on 420 screen to return to main.png
    if ((x >= 400 && x <= 600 && y >= 600 && y <= 750)) {
        this.src = 'images/timemachinemain.png';  // Change back to main.png

        // Remove floating pen
        const floatingPen = document.getElementById('floating-pen');
        if (floatingPen) {
            floatingPen.remove();
        }

        // Reset background color
        document.body.classList.remove('new-background-color'); 
        return;
    }
  }

  // Check if the current image is /images/timemachine420.png
  if (currentImageSrc.includes('timemachine420.png')) {
    // Log the coordinates for debugging
    console.log('Click coordinates relative to image: X:', x, 'Y:', y);

    // You can add additional logic here for handling clicks on the 420 screen
    return;
  }
});