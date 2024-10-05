let isHoldingShown = false;
let isMainShown = false;
let isOptionsShown = false; // To track if options are shown

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

    // If holding image isn't shown yet, switch to holding image
    if (!isHoldingShown && !isMainShown) {
      changeImage('images/timemachineholding.png');
      document.getElementById('caption').innerText = 'huh? what is this?'; // Show the first caption
      isHoldingShown = true;

      // Step 3: Show the second caption after 2 seconds
      setTimeout(function() {
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
    } else if (isHoldingShown && !isMainShown) {
      changeImage('images/timemachinemain.png');
      document.getElementById('caption').innerText = ''; // Clear the first caption
      const secondCaption = document.getElementById('second-caption');
      if (secondCaption) secondCaption.remove(); // Remove the second caption
      isMainShown = true;

      // Step 4: Show "let's look around" caption with similar styling as previous captions
      setTimeout(function() {
        const thirdCaption = document.createElement('div');
        thirdCaption.id = 'third-caption';
        thirdCaption.innerText = "let's look around (click on an option)";
        thirdCaption.style.opacity = '0';
        thirdCaption.style.position = 'absolute';
        thirdCaption.style.bottom = '40px'; // Adjust position similar to previous captions
        thirdCaption.style.left = '50%'; // Center horizontally
        thirdCaption.style.transform = 'translateX(-50%)'; // Center caption
        thirdCaption.style.fontSize = '2rem'; // Match previous caption font size
        thirdCaption.style.color = '#fff'; // Keep consistent with the other captions
        thirdCaption.style.textAlign = 'center';
        thirdCaption.style.transition = 'opacity 0.8s ease'; // Keep fade-in effect
        document.body.appendChild(thirdCaption);

        // Fade in the third caption
        setTimeout(function() {
          thirdCaption.style.opacity = '1';
          isOptionsShown = true; // Options are now available for interaction
        }, 100); // Slight delay for the fade-in effect
      }, 2000); // Show the third caption 2 seconds after the main image appears
    }
  });
}

// Initialize the story sequence when the window loads
window.onload = function() {
  startStorySequence();
};
