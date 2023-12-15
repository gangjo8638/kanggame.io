//글자
document.addEventListener('DOMContentLoaded', function() {
    const textElements = document.querySelectorAll('.animated-text');

    textElements.forEach((textElement, index) => {
        setTimeout(() => {
            textElement.textContent = textElement.getAttribute('data-text');
            textElement.style.opacity = 1;
            textElement.style.transform = 'translateY(0)';
        }, index * 1000);
    });
});


//햄버거

const toggleBtn = document.querySelector('#nav_a');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});