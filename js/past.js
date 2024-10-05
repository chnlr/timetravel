// Function to handle the random catchphrases for the /past path
function handlePastPath() {
    const timeMachine = document.getElementById('time-machine');

    timeMachine.addEventListener('click', function(event) {
        // Ensure the story has been completed before triggering past interaction
        if (!isStoryComplete) return; // Do nothing if the story isn't complete yet

        const rect = timeMachine.getBoundingClientRect();
        const x = event.clientX - rect.left; // x position within the element
        const y = event.clientY - rect.top;  // y position within the element

        // Coordinates for the /past clickable region
        if (x >= 650 && x <= 675 && y >= 580 && y <= 619) {
            // Change the image to the past image
            timeMachine.src = 'images/timemachineprevious.png';

            // Add random catchphrase feature
            const catchphrases = [
                "Does that say 1836?",
                "Wait... what?",
                "Isn't that when the Titanic sank?",
                "The... Alamo?",
                "This can't be real",
                "Should I go look?"
            ];

            // Select a random catchphrase
            const randomCatchphrase = catchphrases[Math.floor(Math.random() * catchphrases.length)];

            // Display the catchphrase
            const pastCaption = document.createElement('div');
            pastCaption.id = 'past-caption';
            pastCaption.innerText = randomCatchphrase;
            pastCaption.style.position = 'absolute';
            pastCaption.style.bottom = '40px'; // Adjust position to the bottom
            pastCaption.style.left = '50%'; // Center horizontally
            pastCaption.style.transform = 'translateX(-50%)'; // Center the caption
            pastCaption.style.fontSize = '2rem';
            pastCaption.style.color = '#fff';
            pastCaption.style.textAlign = 'center';
            pastCaption.style.opacity = '0';
            pastCaption.style.transition = 'opacity 0.8s ease';
            document.body.appendChild(pastCaption);

            // Fade in the past caption
            setTimeout(function() {
                pastCaption.style.opacity = '1';
            }, 100); // Slight delay for the fade-in effect
        }
    });
}

// Initialize the past path functionality when the window loads
window.onload = function() {
    handlePastPath();
};
