const hamburger = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

const hamburgerMenu = () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active')
}

hamburger.addEventListener('click', hamburgerMenu);