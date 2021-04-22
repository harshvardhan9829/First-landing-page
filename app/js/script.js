const menubtn = document.querySelector('#menubtn');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
menubtn.addEventListener('click', function() {
    console.log("hello world");

    if (header.classList.contains('open')) { // if .header conatins open class then close the hamburger menu by removing the .open

        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            console.log("hello fadelem")
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    } else { // else open the hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});