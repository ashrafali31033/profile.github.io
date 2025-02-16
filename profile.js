// JavaScript for Profile Website

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate form submission
    setTimeout(() => {
        this.reset();
        showMessage('Message sent successfully!', 'success');
    }, 1000);
});

// Show message function
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Toggle section visibility
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    const header = section.querySelector('h2');
    header.addEventListener('click', () => {
        section.classList.toggle('collapsed');
    });
});

// Add current year to footer
const year = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${year} My Profile`;

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
