window.onload = function() {
    const swiper = new Swiper('.swiper', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        spaceBetween: 20,
        loop: true,
        watchOverflow: true,
        loopedSlides: 0,
        breakpoints: {
            320: {
                slidesPerView: 1,
                centeredSlides: true
            },
            860: {
                spaceBetween: 32,
                slidesPerView: 2,
                centeredSlides: false
            },
            1300: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 48
            },
            1860: {
                slidesPerView: 4,
                spaceBetween: 56
            },
            2400: {
                slidesPerView: 5
            }
        }
    });
    const body = document.querySelector('body');
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const sectionTopLeftSeparator = document.querySelector('.top-left__separator');
    const sectionBottomLeftSeparator = document.querySelector('.bottom-left__separator');
    const sectionTopRightSeparator = document.querySelector('.top-right__separator');
    const sectionBottomRightSeparator = document.querySelector('.bottom-right__separator');

    setBurgerState(body, burger, menu);
    setSeparatorSize(sectionTopLeftSeparator, sectionBottomLeftSeparator, sectionTopRightSeparator, sectionBottomRightSeparator);
    window.onresize = function(event) {
        setSeparatorSize(sectionTopLeftSeparator, sectionBottomLeftSeparator, sectionTopRightSeparator, sectionBottomRightSeparator);

        if (window.screen.width > 768) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('scroll_lock');
        }
    }
}

function setSeparatorSize(sectionTopLeftSeparator, sectionBottomLeftSeparator, sectionTopRightSeparator, sectionBottomRightSeparator) {
    if (sectionTopLeftSeparator != null) {
        sectionTopLeftSeparator.style.borderLeft = document.body.clientWidth + "px solid #E9E3E7";
    }

    if (sectionBottomLeftSeparator != null) {
        sectionBottomLeftSeparator.style.borderLeft = document.body.clientWidth + "px solid #E9E3E7";
    }

    if (sectionTopRightSeparator != null) {
        sectionTopRightSeparator.style.borderRight = document.body.clientWidth + "px solid #E9E3E7";
    }

    if (sectionBottomRightSeparator != null) {
        sectionBottomRightSeparator.style.borderRight = document.body.clientWidth + "px solid #E9E3E7";
    }
}

function setBurgerState(body, burger, menu) {
    burger.onclick = function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('scroll_lock');
    }
}