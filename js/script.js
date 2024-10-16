// Get the counter elements
const counterElement = document.getElementById('enrolled');
const counterCertfied = document.getElementById('certified');
const counterCourses = document.getElementById('courses');
const counterStudent = document.getElementById('student');

// Retrieve counts from localStorage
let count = parseInt(localStorage.getItem('count')) || 0;
let certified = parseInt(localStorage.getItem('certified')) || 0;
let courses = parseInt(localStorage.getItem('courses')) || 0;
let student = parseInt(localStorage.getItem('student')) || 0;


// Function to update the counter display
function updateCounter() {
    counterElement.textContent = `${count}+`;
    counterCertfied.textContent = `${certified}+`;
    counterCourses.textContent = `${courses}+`;
    counterStudent.textContent = `${student}+`;
}

// Function to start counting
function startCounting() {
    // Set initial values if not present in localStorage
    certified = 10 * 10;
    count = 80 * 100;
    courses = 0;
    student = 80 * 100;

    // Store initial values in localStorage
    localStorage.setItem('count', count);
    localStorage.setItem('certified', certified);
    localStorage.setItem('courses' , courses);
    localStorage.setItem('student' , student);
    
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
    
    const studentInterval = setInterval(() => {
        if (student < 8871) {
            student++;
            localStorage.setItem('student' , student);
            updateCounter();
        } else {
            clearInterval(studentInterval);
        }
    }, 0.5);
}

// Start counting only if the counts are not already stored
if (!localStorage.getItem('count') && !localStorage.getItem('certified') && !localStorage.getItem('courses') && !localStorage.getItem('student')) {
    updateCounter();
} else {
    startCounting();
}


// Multi Step Page
 

const expert = document.getElementById('expert');
const cost = document.getElementById('cost');
const flexible = document.getElementById('flexible');
const support = document.getElementById('support');

const expert_section = document.getElementById('expert-section');
const cost_section = document.getElementById('cost-section');
const flexible_section = document.getElementById('flexible-section');
const support_section = document.getElementById('support-section');


expert.addEventListener('click', () =>{
    expert.classList.add('activate');
    cost.classList.remove('activate');
    flexible.classList.remove('activate');
    support.classList.remove('activate');
    expert_section.classList.remove('d-none');
    cost_section.classList.add('d-none');
    flexible_section.classList.add('d-none');
    support_section_section.classList.add('d-none');
});

cost.addEventListener('click', () =>{
    expert.classList.remove('activate');
    cost.classList.add('activate');
    flexible.classList.remove('activate');
    support.classList.remove('activate');
    expert_section.classList.add('d-none');
    cost_section.classList.remove('d-none');
    flexible_section.classList.add('d-none');
    support_section_section.classList.add('d-none');
});

flexible.addEventListener('click', () =>{
    expert.classList.remove('activate');
    cost.classList.remove('activate');
    flexible.classList.add('activate');
    support.classList.remove('activate');
    expert_section.classList.add('d-none');
    cost_section.classList.add('d-none');
    flexible_section.classList.remove('d-none');
    support_section_section.classList.add('d-none');
});

support.addEventListener('click', () =>{
    expert.classList.remove('activate');
    cost.classList.remove('activate');
    flexible.classList.remove('activate');
    support.classList.add('activate');
    expert_section.classList.add('d-none');
    cost_section.classList.add('d-none');
    flexible_section.classList.add('d-none');
    support_section.classList.remove('d-none');
});
