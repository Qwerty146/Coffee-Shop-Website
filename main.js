let button_arrow = document.querySelector('.button_arrow');
let navbar = document.querySelector('nav');

button_arrow.addEventListener('click', () => {
    window.scrollTo({
        top: 500,
        behavior: 'smooth'
    });
});

let previousScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if(previousScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-150px';
    }
    previousScrollPos = currentScrollPos;
}