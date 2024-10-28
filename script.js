let currentCount = 1000; // Starting player count

function updatePlayerCount() {
    // Simulate player count change
    const randomChange = Math.floor(Math.random() * 10) - 5; // Change by -5 to +5
    currentCount += randomChange;

    // Ensure the count doesn't go below zero
    if (currentCount < 0) {
        currentCount = 0;
    }

    document.getElementById('playerCount').innerText = currentCount; // Update player count display
}

// Update player count every second
setInterval(updatePlayerCount, 1000);

// Function to toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'; // Toggle between display states
}
