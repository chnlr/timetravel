// Function to start the new story by showing the caption
function startNewStory() {
    // Create a new caption div
    const newStoryCaption = document.createElement('div');
    newStoryCaption.id = 'new-story-caption';
    newStoryCaption.innerText = "Is this a real time machine?!";
    newStoryCaption.style.opacity = '0';
    newStoryCaption.style.transition = 'opacity 1.5s ease'; // Smooth fade-in effect
    document.body.appendChild(newStoryCaption);
  
    // Fade in the caption
    setTimeout(function() {
      newStoryCaption.style.opacity = '1';
    }, 100); // Delay to ensure smooth fade-in
  }
  
  // Call the function to start the new story
  startNewStory();
  