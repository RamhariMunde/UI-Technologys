const button = document.getElementById("btn");

// Function to generate a random background color
function change() {
    const randomColor = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
    document.body.style.backgroundColor = randomColor;
    document.getElementById('modal').style.display = "block"; // Show modal
}

// Function to close the modal
function closeLogic() {
    document.getElementById('modal').style.display = "none"; // Hide modal
}

// Function to update the clock
function updateClock() {
    const now = new Date(); // Get the current time
    const hours = String(now.getHours()).padStart(2, '0'); // Hours
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Seconds

    // Update the clock content in the modal
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
