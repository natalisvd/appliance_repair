let currentIndex = 0;

function moveCarousel(direction) {
    const carousels = document.querySelectorAll('.carousel-images');
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        currentIndex = (currentIndex + direction + images.length) % images.length;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

function openModal() {
    document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("contactModal")) {
        closeModal();
    }
}
