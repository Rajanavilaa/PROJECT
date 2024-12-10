 // Open Modal and Display Image
        function openModal(imageId) {
            const modal = document.getElementById("modal");
            const modalImage = document.getElementById("modal-image");

            // Set image based on the clicked item
            if (imageId === 'image1') {
                modalImage.src = 'https://via.placeholder.com/600x400?text=Image+1';
            } else if (imageId === 'image2') {
                modalImage.src = 'https://via.placeholder.com/600x400?text=Image+2';
            } else if (imageId === 'image3') {
                modalImage.src = 'https://via.placeholder.com/600x400?text=Image+3';
            } else if (imageId === 'image4') {
                modalImage.src = 'https://via.placeholder.com/600x400?text=Image+4';
            } else if (imageId === 'image5') {
                modalImage.src = 'https://via.placeholder.com/600x400?text=Image+5';
            } else if (imageId === 'image6') {
                modalImage.src = 'https://via.placeholder.com/600x400?text=Image+6';
            }

            // Show the modal
            modal.style.display = "flex";
        }

        // Close Modal
        function closeModal() {
            const modal = document.getElementById("modal");
            modal.style.display = "none";
        }

        // Close modal when clicking outside of the image
        window.onclick = function(event) {
            const modal = document.getElementById("modal");
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }