function handleNewPath() {
    console.log("new.js has been triggered!"); // Confirming new.js is triggered

    // Define random catchphrases for the "new" path
    const quotes = [
      "I can pick a day?",
      "Huh?!",
      "Can I make a mandela effect?!",
      "The past or the future, huh?",
      "If this is real...",
      "This will change everything."
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Show the random quote in the caption element
    const caption = document.getElementById('caption');
    if (caption) {
      caption.innerText = randomQuote;
    } else {
      console.error("Caption element not found!");
    }

    // Add an event listener for the back button to return to the main screen
    document.getElementById('time-machine').addEventListener('click', function(event) {
      const rect = this.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Define the back button clickable area for /new page
      if (x >= 605 && x <= 665 && y >= 610 && y <= 645) { // Adjust coordinates as needed
        this.src = 'images/timemachinemain.png'; // Go back to the main image

        // Clear the caption when returning to the main screen
        caption.innerText = '';
      }
    });
}

// Immediately run the function once the script is loaded
handleNewPath();