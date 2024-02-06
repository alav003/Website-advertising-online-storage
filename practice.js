document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Alert when Sign up button is clicked
    const signUpButton = document.querySelector('.btn');
    signUpButton.addEventListener('click', () => {
        alert('Sign up button clicked!');
    });
});
