window.onload = function() {
    const body = document.querySelector('body');
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');

    burger.onclick = function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('scroll_lock');
    }

    window.onresize = function(event) {
        if (window.screen.width > 768) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('scroll_lock');
        }
    }
}