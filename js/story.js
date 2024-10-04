// Navigate to different scenes
function navigateTo(scene) {
    window.location.href = `scenes/${scene}.html`;
  }
  
  // Example: when the user clicks the time machine, go to the time-travel interface
  document.getElementById('time-machine').addEventListener('click', function() {
    navigateTo('time-travel'); // Redirects to the time-travel.html page
  });