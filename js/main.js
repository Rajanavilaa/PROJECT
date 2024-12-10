// Select the hamburger icon and nav links
const Hotel = document.getElementById('Hotel');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to toggle the nav menu
Hotel.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    Hotel.classList.toggle('active');
});











