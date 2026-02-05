// Get DOM elements
const openButton = document.getElementById('openButton');
const cardFront = document.getElementById('cardFront');
const cardInside = document.getElementById('cardInside');
const confettiCanvas = document.getElementById('confetti-canvas');
const photoCards = document.querySelectorAll('.photo-card');

// Open card functionality
openButton.addEventListener('click', () => {
    cardFront.classList.add('hidden');
    cardInside.classList.add('visible');
    
    // Start confetti after a slight delay
    setTimeout(() => {
        startConfetti();
    }, 400);
});

// Photo flip functionality
photoCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Confetti Animation
const ctx = confettiCanvas.getContext('2d');
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiPieces = [];
let animationId;

class ConfettiPiece {
    constructor() {
        this.x = Math.random() * confettiCanvas.width;
        this.y = -10;
        this.size = Math.random() * 10 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.color = this.randomColor();
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }

    randomColor() {
        const colors = [
            '#4a90e2', // Blue
            '#c0c0c0', // Silver
            '#ffffff', // White
            '#5ba3f5', // Light Blue
            '#a8a8a8', // Gray
            '#357abd'  // Dark Blue
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > confettiCanvas.height) {
            return false; // Remove this piece
        }
        return true; // Keep this piece
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function startConfetti() {
    // Create initial burst of confetti
    for (let i = 0; i < 150; i++) {
        confettiPieces.push(new ConfettiPiece());
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    // Update and draw each confetti piece
    confettiPieces = confettiPieces.filter(piece => {
        const keep = piece.update();
        if (keep) {
            piece.draw();
        }
        return keep;
    });

    // Continue animation if there are still pieces
    if (confettiPieces.length > 0) {
        animationId = requestAnimationFrame(animateConfetti);
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});

// Prevent context menu on long press (mobile)
document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.photo-card')) {
        e.preventDefault();
    }
});
