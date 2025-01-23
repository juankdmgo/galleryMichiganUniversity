// Declare global variables
let firstPic, secondPic, thirdPic, imageDisplay;

document.addEventListener('DOMContentLoaded', function () {
    // Assign the DOM elements to global variables once the DOM is fully loaded
    firstPic = document.getElementById('img1');
    secondPic = document.getElementById('img2');
    thirdPic = document.getElementById('img3');
    imageDisplay = document.querySelector('.imageDisplay');

    // Check if the elements are available (for debugging)
    console.log('firstPic:', firstPic);
    console.log('secondPic:', secondPic);
    console.log('thirdPic:', thirdPic);
    console.log('imageDisplay:', imageDisplay);

    // If the elements are found, call the init function
    if (firstPic && secondPic && thirdPic && imageDisplay) {
        init();
    } else {
        console.error("One or more elements not found.");
    }
});

// Function to initialize images and randomization
function init() {
    const images = [1, 2, 3, 4, 5, 6];
    const alts = [
        "Katz restaurant",
        "New York Skyline",
        "Immigration Museum Ellis Island",
        "South Manhattan Street",
        "Central Park meadow",
        "Central Park lake reflection"
    ];

    function setRandoms() {
        let random = [];
        while (random.length < 3) {
            const randomNum = Math.floor(Math.random() * 6 + 1);
            if (!random.includes(randomNum)) {
                random.push(randomNum);
            }
        }
        console.log(random); // Logs the selected random numbers
        return random;
    }

    function setImages() {
        const random = setRandoms();
        firstPic.src = `./assets/images/img${random[0]}.jpg`;
        firstPic.alt = alts[random[0] - 1];

        secondPic.src = `./assets/images/img${random[1]}.jpg`;
        secondPic.alt = alts[random[1] - 1];

        thirdPic.src = `./assets/images/img${random[2]}.jpg`;
        thirdPic.alt = alts[random[2] - 1];
    }

    setImages(); // Initialize images after DOM content is loaded

    // Add event listeners for onmouseover, onmouseleave
    firstPic.addEventListener('mouseover', handleMouseOver);
    firstPic.addEventListener('mouseleave', handleMouseLeave);
    secondPic.addEventListener('mouseover', handleMouseOver);
    secondPic.addEventListener('mouseleave', handleMouseLeave);
    thirdPic.addEventListener('mouseover', handleMouseOver);
    thirdPic.addEventListener('mouseleave', handleMouseLeave);

    // Add event listeners for onfocus, onblur
    firstPic.addEventListener('focus', handleFocus);
    firstPic.addEventListener('blur', handleBlur);
    secondPic.addEventListener('focus', handleFocus);
    secondPic.addEventListener('blur', handleBlur);
    thirdPic.addEventListener('focus', handleFocus);
    thirdPic.addEventListener('blur', handleBlur);
}

// Handle events for firstPic, secondPic, thirdPic
function handleMouseOver(event) {
    console.log('Mouse over on', event.target);

    // Change the content of the image display area
    imageDisplay.style.backgroundImage = `url(${event.target.src})`; // Set background image to the hovered image
    imageDisplay.style.color = 'white'; // Set the text color to white
    imageDisplay.innerHTML = event.target.alt; // Set alt text as content inside the display area
}

function handleMouseLeave(event) {
    console.log('Mouse leave from', event.target);

    // Reset the content of the image display area
    imageDisplay.style.backgroundImage = ''; // Remove the background image
    imageDisplay.style.color = ''; // Reset the text color
    imageDisplay.innerHTML = 'Hover over an image below to display here.'; // Reset the text
}

// Handle events for onfocus and onblur
function handleFocus(event) {
    console.log('Focus on', event.target);

    // When the image receives focus, you can change the display behavior
    imageDisplay.style.backgroundImage = `url(${event.target.src})`; // Set background image to the focused image
    imageDisplay.style.color = 'white'; // Set text color to white
    imageDisplay.innerHTML = event.target.alt; // Show alt text in the display area
}

function handleBlur(event) {
    console.log('Blur from', event.target);

    // When the image loses focus, reset the display
    imageDisplay.style.backgroundImage = ''; // Remove the background image
    imageDisplay.style.color = ''; // Reset the text color
    imageDisplay.innerHTML = 'Hover over an image below to display here.'; // Reset the text
}