/* ------------------------------------------
VARIABLES
------------------------------------------ */

// first page elements
const mainTitle = document.querySelector('.main-title');
const startButton = document.querySelector('.start-button');
const sliderSection = document.querySelector('.slider-section');

// second page elements
const breathingSection = document.querySelector('.breathing-section');
const instruction = document.querySelector('.instruction');
const timer = document.querySelector('.timer');

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
    mainTitle.style.display = 'none';
    startButton.style.display = 'none';
    sliderSection.style.display = 'none';

    // Display
    breathingSection.style.display = 'block';
    instruction.style.display = 'block';
    timer.style.display = 'block';

    // Start the breathing cycle
    startBreathingCycle();
});