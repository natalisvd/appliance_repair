document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    let currentIndex = 0;

    function moveCarousel(direction) {
        console.log('Carousel button clicked');
        const carousels = document.querySelectorAll('.carousel-images');
        carousels.forEach(carousel => {
            const images = carousel.querySelectorAll('img');
            const totalImages = images.length;
            currentIndex = (currentIndex + direction + totalImages) % totalImages;
            console.log(`Current index: ${currentIndex}`);
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    window.moveCarousel = moveCarousel;

    function openModal() {
        console.log('Open modal');
        document.getElementById("contactModal").style.display = "block";
    }

    function closeModal() {
        console.log('Close modal');
        document.getElementById("contactModal").style.display = "none";
    }

    window.openModal = openModal;
    window.closeModal = closeModal;

    window.onclick = function(event) {
        if (event.target == document.getElementById("contactModal")) {
            closeModal();
        }
    }
});
