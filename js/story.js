let isHoldingShown = false;
let isMainShown = false;
let isStoryComplete = false; // New flag to track if the story has completed

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

    // Immediate image change function
    function changeImage(newSrc) {
      timeMachine.src = newSrc; // Instantly change the image
    }

    if (!isHoldingShown && !isMainShown) {
      changeImage('images/timemachineholding.png');
      document.getElementById('caption').innerText = 'huh? what is this?'; // Show the first caption
      isHoldingShown = true;

      // Show second caption
      setTimeout(function() {
        const secondCaption = document.createElement('div');
        secondCaption.id = 'second-caption';
        secondCaption.innerText = "let me look closer (click)";
        secondCaption.style.opacity = '0';
        secondCaption.style.transition = 'opacity 0.8s ease'; // Fade-in for the second caption
        document.body.appendChild(secondCaption);

        // Fade in the second caption
        setTimeout(function() {
          secondCaption.style.opacity = '1';
        }, 100); // Delay for the fade-in effect
      }, 2000); // 2 seconds after the first caption
    } else if (isHoldingShown && !isMainShown) {
      changeImage('images/timemachinemain.png');
      document.getElementById('caption').innerText = ''; // Clear the first caption
      const secondCaption = document.getElementById('second-caption');
      if (secondCaption) secondCaption.remove(); // Remove the second caption
      isMainShown = true;

      // Final caption
      setTimeout(function() {
        const finalCaption = document.createElement('div');
        finalCaption.id = 'final-caption';
        finalCaption.innerText = "let's look around";
        finalCaption.style.opacity = '0';
        finalCaption.style.transition = 'opacity 0.8s ease';
        document.body.appendChild(finalCaption);

        // Fade in the final caption
        setTimeout(function() {
          finalCaption.style.opacity = '1';
        }, 100);
        
        // Mark story as complete
        isStoryComplete = true; // Set the flag when the story sequence finishes
      }, 2000); // After 2 seconds of loading the main image
    }
  });
}

window.onload = function() {
  startStorySequence();
};
