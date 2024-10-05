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
