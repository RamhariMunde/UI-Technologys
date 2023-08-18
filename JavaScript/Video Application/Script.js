const videoBtn = document.getElementById('video-btn');

videoBtn.addEventListener('click', () => {
  // Open the child page with the video
  window.open('https://www.youtube.com/watch?v=5cX4GaIyDOU', '_blank');
});

// Listen for the message sent from the child page
window.addEventListener('message', (event) => {
  if (event.data === 'video-closed') {
    // Reset the button text and remove the event listener
    videoBtn.innerText = 'Watch Video';
    videoBtn.removeEventListener('click', closeVideo);
  }
});

function closeVideo() {
  // Send a message to the child page to close the video
  childWindow.postMessage('close-video', '*');
  // Reset the button text and remove the event listener
  videoBtn.innerText = 'Watch Video';
  videoBtn.removeEventListener('click', closeVideo);
}

let childWindow;

// Listen for the child page to finish loading
window.addEventListener('message', (event) => {
  if (event.data === 'child-loaded') {
    // Store a reference to the child window
    childWindow = event.source;
    // Add a click event listener to the button to close the video
    videoBtn.addEventListener('click', closeVideo);
    // Set the button text to "Close Video"
    videoBtn.innerText = 'Close Video';
  }
});
