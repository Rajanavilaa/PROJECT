
 // JavaScript to handle form submission and success message
        document.getElementById('checkin-checkout-form').addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent form from submitting

            // Show success message
            document.getElementById('success-message').style.display = 'block';

            // Optionally, reset the form after submission
            document.getElementById('checkin-checkout-form').reset();

            // Scroll to success message (optional for better UX)
            window.scrollTo(0, 0);
        });

       