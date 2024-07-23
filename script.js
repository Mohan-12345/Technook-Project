// JavaScript for rotating carousel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function carousel() {
    items.forEach(item => item.style.display = 'none');
    items[currentIndex].style.display = 'block';
    currentIndex = (currentIndex + 1) % totalItems;
    setTimeout(carousel, 5000); // Change slide every 5 seconds
}

carousel();
