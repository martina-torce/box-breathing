/* ------------------------------------------
VARIABLES
------------------------------------------ */

// first page elements
const mainTitle = document.querySelector('.main-title');
const startButton = document.querySelector('.start-button');
const sliderSection = document.querySelector('.slider-section');

// second page elements
const breathingSection = document.querySelector('.breathing-section');
const topSection = document.querySelector('.top-section');
const instruction = document.querySelector('.instruction');
const timer = document.querySelector('.timer');
const boxSection = document.querySelector('.box-section');
const breathingBox = document.querySelector('.breathing-box');
const buttonSection = document.querySelector('.button-section');
const stopButton = document.querySelector('.stop-button');
const movingElement = document.querySelector('.moving-element');

// slider values
const inhaleSlider = document.getElementById('inhale-slider');
const holdSlider = document.getElementById('hold-slider');
const exhaleSlider = document.getElementById('exhale-slider');
const relaxSlider = document.getElementById('relax-slider');

// logic 
const instructions = ['Inhale...', 'Hold...', 'Exhale...', 'Relax...'];
const sliders = [inhaleSlider, holdSlider, exhaleSlider, relaxSlider];

/* ------------------------------------------
FUNCTIONS
------------------------------------------ */

// Function to start the breathing cycle
function startBreathingCycle() {
    // fill in 1s delay
    instruction.innerText = `Ready?`;

    let currentIndex = 0;
    // Function to update instruction and timer every second
    function updateInstructionAndTimer() {
        const currentInstruction = instructions[currentIndex];
        const currentSlider = sliders[currentIndex];
        const sliderValue = currentSlider.value;
        
        // Update the timer element every second
        let countdown = sliderValue;
        const countdownInterval = setInterval(() => {
            // Update the instruction text
            instruction.innerText = `${currentInstruction}`;
            timer.innerText = countdown;
            countdown--;
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                currentIndex = (currentIndex + 1) % sliders.length;
                // Start the next phase
                updateInstructionAndTimer();
            }
        }, 1000);
    }

    // Start the first phase
    updateInstructionAndTimer();
}

/* ------------------------------------------
EVENTS
------------------------------------------ */

// Pressing the start button
startButton.addEventListener('click', () => {
    // Hide 
    mainTitle.classList.add('hidden');
    startButton.classList.add('hidden');
    sliderSection.classList.add('hidden');

    // Display
    breathingSection.classList.remove('hidden');
    topSection.classList.remove('hidden');
    instruction.classList.remove('hidden');
    timer.classList.remove('hidden');
    boxSection.classList.remove('hidden');
    breathingBox.classList.remove('hidden');
    buttonSection.classList.remove('hidden');
    stopButton.classList.remove('hidden');
    movingElement.classList.remove('hidden');

    // Start the breathing cycle
    startBreathingCycle();
});

// Reloads the page
stopButton.addEventListener('click', function() {
    location.reload();
});