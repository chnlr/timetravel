let isHoldingShown = false;
let isMainShown = false;

function startStorySequence() {
  setTimeout(function() {
    const timeMachine = document.getElementById('time-machine');
    timeMachine.style.opacity = '1';
    timeMachine.style.transition = 'opacity 1.5s ease';
  }, 3200);

  // Listen for click event
  document.getElementById('time-machine').addEventListener('click', function() {
    const timeMachine = document.getElementById('time-machine');

    if (!isHoldingShown && !isMainShown) {
      timeMachine.src = 'images/timemachineholding.png';
      document.getElementById('caption').innerText = 'huh? what is this?';
      isHoldingShown = true;

      setTimeout(function() {
        const secondCaption = document.createElement('div');
        secondCaption.id = 'second-caption';
        secondCaption.innerText = "let me look closer (click)";
        secondCaption.style.opacity = '0';
        secondCaption.style.transition = 'opacity 0.8s ease';
        document.body.appendChild(secondCaption);

        setTimeout(function() {
          secondCaption.style.opacity = '1';
        }, 100);
      }, 2000);
    } else if (isHoldingShown && !isMainShown) {
      timeMachine.src = 'images/timemachinemain.png';
      document.getElementById('caption').innerText = '';
      const secondCaption = document.getElementById('second-caption');
      if (secondCaption) secondCaption.remove();
      isMainShown = true;
    }
  });
}

// Start the story sequence when the page loads
window.onload = function() {
  startStorySequence();
};

// Variables to store the caption timers
let firstCaptionTimeout, secondCaptionTimeout;

// Function to handle the initial sequence when the page loads
function startStorySequence() {
  // Step 1: Fade in the year text and the time machine
  setTimeout(function() {
    const timeMachine = document.getElementById('time-machine');
    timeMachine.style.opacity = '1'; // Fade in the time machine image
    timeMachine.style.transition = 'opacity 1.5s ease'; // Apply fade-in effect for the initial load only
  }, 3200); // 3.2 seconds

  // Step 2: When the time machine is clicked, switch to the holding image
  document.getElementById('time-machine').addEventListener('click', function() {
    const timeMachine = document.getElementById('time-machine');

    // Immediate image change function (no smooth transition)
    function changeImage(newSrc) {
      timeMachine.src = newSrc; // Instantly change the image
    }

    // Clear any running timers for the captions when clicked
    clearTimeout(firstCaptionTimeout);
    clearTimeout(secondCaptionTimeout);

    // Remove any existing captions
    document.getElementById('caption').innerText = ''; // Remove first caption
    const secondCaption = document.getElementById('second-caption');
    if (secondCaption) secondCaption.remove(); // Remove second caption if exists

    // If holding image isn't shown yet, switch to holding image
    if (!isHoldingShown && !isMainShown) {
      changeImage('images/timemachineholding.png');
      document.getElementById('caption').innerText = 'huh? what is this?'; // Show the first caption

      // Set a timer to remove the first caption after 2 seconds
      firstCaptionTimeout = setTimeout(function() {
        document.getElementById('caption').innerText = ''; // Remove first caption
      }, 2000);

      // Step 3: Show the second caption after 2 seconds
      secondCaptionTimeout = setTimeout(function() {
        const secondCaption = document.createElement('div');
        secondCaption.id = 'second-caption';
        secondCaption.innerText = "let me look closer (click)";
        secondCaption.style.opacity = '0';
        secondCaption.style.transition = 'opacity 0.8s ease'; // Keep fade-in for captions
        document.body.appendChild(secondCaption);

        // Fade in the second caption
        setTimeout(function() {
          secondCaption.style.opacity = '1';
        }, 100); // Slight delay for the fade-in effect
      }, 2000); // 2 seconds after the first caption

      isHoldingShown = true;
    } else if (isHoldingShown && !isMainShown) {
      changeImage('images/timemachinemain.png');
      const secondCaption = document.getElementById('second-caption');
      if (secondCaption) secondCaption.remove(); // Remove the second caption
      isMainShown = true;
    }
  });
}

// Initialize the story sequence when the window loads
window.onload = function() {
  startStorySequence();
};
