// Track whether the holding image is shown and if the main image has appeared
let isHoldingShown = false;
let isMainShown = false;

// Function to handle the initial sequence when the page loads
function startStorySequence() {
  // Step 1: Fade in the year text and the time machine
  setTimeout(function() {
    const timeMachine = document.getElementById('time-machine');
    timeMachine.style.opacity = '1'; // Fade in the time machine image
    timeMachine.style.transition = 'opacity 1.5s ease'; // Apply fade-in effect
  }, 3200); // 3.2 seconds

  // Step 2: When the time machine is clicked, switch to the holding image
  document.getElementById('time-machine').addEventListener('click', function() {
    const timeMachine = document.getElementById('time-machine');

    // Smooth transition function to change images
    function smoothTransition(newSrc) {
      timeMachine.style.opacity = '0'; // Fade out
      setTimeout(function() {
        timeMachine.src = newSrc; // Change image
        timeMachine.style.opacity = '1'; // Fade back in
      }, 500); // Wait for fade-out to complete before switching image
    }

    // If holding image isn't shown yet, switch to holding image
    if (!isHoldingShown && !isMainShown) {
      smoothTransition('images/timemachineholding.png');
      document.getElementById('caption').innerText = 'huh? what is this?'; // Show the first caption
      isHoldingShown = true;

      // Step 3: Show the second caption after 2 seconds
      setTimeout(function() {
        const secondCaption = document.createElement('div');
        secondCaption.id = 'second-caption';
        secondCaption.innerText = "let me look closer (click)";
        secondCaption.style.opacity = '0';
        secondCaption.style.transition = 'opacity 0.8s ease';
        document.body.appendChild(secondCaption);

        // Fade in the second caption
        setTimeout(function() {
          secondCaption.style.opacity = '1';
        }, 100); // Slight delay for the fade-in effect
      }, 2000); // 2 seconds after the first caption
    } else if (isHoldingShown && !isMainShown) {
      smoothTransition('images/timemachinemain.png');
      document.getElementById('caption').innerText = ''; // Clear the first caption
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
