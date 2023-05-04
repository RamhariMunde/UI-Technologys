const videoBtn = document.getElementById('video-btn');

videoBtn.addEventListener('click', () => {

  window.open('https://www.youtube.com/watch?v=5cX4GaIyDOU', '_blank');
});

window.addEventListener('message', (event) => {
  if (event.data === 'video-closed') {
    videoBtn.innerText = 'Watch Video';
    videoBtn.removeEventListener('click', closeVideo);
  }
});

function closeVideo() {
  childWindow.postMessage('close-video', '*');
  videoBtn.innerText = 'Watch Video';
  videoBtn.removeEventListener('click', closeVideo);
}

let childWindow;

window.addEventListener('message', (event) => {
  if (event.data === 'child-loaded') {
    childWindow = event.source;
    videoBtn.addEventListener('click', closeVideo);
    videoBtn.innerText = 'Close Video';
  }
});
