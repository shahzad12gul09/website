// Get the counter elements
const counterElement = document.getElementById('enrolled');
const counterCertfied = document.getElementById('certified');
const counterCourses = document.getElementById('courses');

// Retrieve counts from localStorage
let count = parseInt(localStorage.getItem('count')) || 0;
let certified = parseInt(localStorage.getItem('certified')) || 0;
let courses = parseInt(localStorage.getItem('courses')) || 0;

// Function to update the counter display
function updateCounter() {
    counterElement.textContent = `${count}+`;
    counterCertfied.textContent = `${certified}+`;
    counterCourses.textContent = `${courses}+`;
}

// Function to start counting
function startCounting() {
    // Set initial values if not present in localStorage
    certified = 10 * 10;
    count = 80 * 100;
    courses = 0;

    // Store initial values in localStorage
    localStorage.setItem('count', count);
    localStorage.setItem('certified', certified);
    localStorage.setItem('courses' , courses);
    
    // Update display immediately
    updateCounter(); 

    // Count for enrolled
    const interval = setInterval(() => {
        if (count < 8754) {
            count++;
            localStorage.setItem('count', count);
            updateCounter();
        } else {
            clearInterval(interval);
        }
    }, 0.5);

    // Count for certified
    const certifiedInterval = setInterval(() => {
        if (certified < 245) {
            certified++;
            localStorage.setItem('certified', certified);
            updateCounter();
        } else {
            clearInterval(certifiedInterval);
        }
    }, 25);

    const coursesInterval = setInterval(() => {
        if (courses < 15) {
            courses++;
            localStorage.setItem('courses' , courses);
            updateCounter();
        } else {
            clearInterval(coursesInterval);
        }
    }, 55);
}

// Start counting only if the counts are not already stored
if (!localStorage.getItem('count') && !localStorage.getItem('certified')) {
    updateCounter();
} else {
    startCounting();
}