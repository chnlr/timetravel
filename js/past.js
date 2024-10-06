// past.js

function handlePastPath() {
    console.log("past.js has been triggered!"); // Confirming past.js is triggered
  
    // Define random catchphrases for the "past" path
    const catchphrases = [
      "Does that say 1836?",
      "Wait... what?",
      "Isn't that when the Titanic sank?",
      "The... Alamo?",
      "This can't be real...",
      "Should I go look?"
    ];
  
    // Pick a random phrase
    const randomPhrase = catchphrases[Math.floor(Math.random() * catchphrases.length)];
  
    // Show the random phrase
    const caption = document.getElementById('caption');
    if (caption) {
      caption.innerText = randomPhrase;
    } else {
      console.error("Caption element not found!");
    }
  
    // Add an event listener for the back button to return to the main screen
    document.getElementById('time-machine').addEventListener('click', function(event) {
      const rect = this.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      // Define the back button clickable area for /past page
      if (x >= 605 && x <= 665 && y >= 610 && y <= 645) { // Adjust coordinates as needed
        this.src = 'images/timemachinemain.png'; // Go back to the main image
  
        // Clear the caption when returning to the main screen
        caption.innerText = '';
      }
    });
  }
  
  // Immediately run the function once the script is loaded
  handlePastPath();
  