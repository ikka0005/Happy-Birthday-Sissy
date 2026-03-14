document.getElementById('reveal-btn').addEventListener('click', function() {
    const intro = document.getElementById('intro-page');
    const content = document.getElementById('birthday-content');

    // Hide the intro
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.display = 'none';
    }, 800);

    // Show the birthday content
    content.classList.remove('hidden');

    // Start the Cake Rain!
    setInterval(createCake, 300); 
});

function createCake() {
    const cake = document.createElement('div');
    cake.classList.add('cake');
    cake.innerText = '🎂';
    
    // Randomize horizontal position
    cake.style.left = Math.random() * 100 + "vw";
    
    // Randomize fall duration (between 3s and 6s)
    const duration = Math.random() * 3 + 3;
    cake.style.animationDuration = duration + "s";
    
    // Randomize size slightly
    cake.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(cake);

    // Remove the element after it finishes falling to keep the page fast
    setTimeout(() => {
        cake.remove();
    }, duration * 1000);
}


// Add this at the bottom of your script.js

let heartCounter = 0;

document.addEventListener('mousemove', function(e) {
    // Only create a heart every 5th mouse movement to keep it smooth
    heartCounter++;
    if (heartCounter % 5 !== 0) return;

    const heart = document.createElement('div');
    heart.classList.add('heart-trail');
    heart.innerHTML = '❤️'; // You can change this to 💖 or ✨
    
    // Position the heart at the mouse coordinates
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';

    // Randomize horizontal drift slightly
    const drift = (Math.random() - 0.5) * 40; 
    heart.style.setProperty('--drift', drift + 'px');

    document.body.appendChild(heart);

    // Clean up the heart element after animation ends
    setTimeout(() => {
        heart.remove();
    }, 1000);
});