document.addEventListener('mousemove', (event) => {
    const svg = document.getElementById('mySVG');
    const { clientX: mouseX, clientY: mouseY } = event;
    const { innerWidth: width, innerHeight: height } = window;
    const svgWidth = svg.clientWidth;
    const svgHeight = svg.clientHeight;
 
    let offsetX = mouseX - svgWidth / 2;
    let offsetY = mouseY - svgHeight / 2;
 
    offsetX = Math.max(0, Math.min(offsetX, width - svgWidth));
    offsetY = Math.max(0, Math.min(offsetY, height - svgHeight));

    svg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// active text for services part animation
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-wave');
    const text = textElement.innerText;
    textElement.innerHTML = '';
 
    const letters = text.split('').map(letter => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = letter;
        return span;
    });
 
    letters.forEach(letter => textElement.appendChild(letter));
    let currentIndex = 0;
    function animateLetters() { 
        letters.forEach(letter => letter.classList.remove('active')); 
        letters[currentIndex].classList.add('active'); 
        currentIndex = (currentIndex + 1) % letters.length; 
        setTimeout(animateLetters, 800);
    }
    animateLetters();
});