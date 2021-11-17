const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

