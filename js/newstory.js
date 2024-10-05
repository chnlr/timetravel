// Trigger the new story caption
setTimeout(function() {
    const caption = document.getElementById('caption');
    caption.innerText = "Is this a real time machine?!"; // New story caption
    caption.style.opacity = '0';
    caption.style.transition = 'opacity 2s ease';
    
    // Fade in the new story caption
    setTimeout(function() {
      caption.style.opacity = '1'; // Fade in caption
    }, 200); // 200ms delay for fade-in effect
  }, 1000); // 1 second delay after all areas clicked