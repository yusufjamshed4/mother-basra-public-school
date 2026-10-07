// Initialize AOS Animations
document.addEventListener("DOMContentLoaded", function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Admission Form Submission Handler
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your inquiry has been submitted successfully to Mother Basra Public School. We will contact you soon.');
            admissionForm.reset();
        });
    }
});
