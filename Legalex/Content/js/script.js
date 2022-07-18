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
    const sectionTopLeftSeparators = document.querySelectorAll('.top-left__separator');
    const sectionBottomLeftSeparators = document.querySelectorAll('.bottom-left__separator');
    const sectionTopRightSeparators = document.querySelectorAll('.top-right__separator');
    const sectionBottomRightSeparators = document.querySelectorAll('.bottom-right__separator');

    setPopupState(body);
    setBurgerState(body, burger, menu);
    setSeparatorSize(sectionTopLeftSeparators, sectionBottomLeftSeparators, sectionTopRightSeparators, sectionBottomRightSeparators);
    window.onresize = function(event) {
        setSeparatorSize(sectionTopLeftSeparators, sectionBottomLeftSeparators, sectionTopRightSeparators, sectionBottomRightSeparators);

        if (window.screen.width > 768) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('scroll_lock');
        }
    }
}

function setSeparatorSize(sectionTopLeftSeparators, sectionBottomLeftSeparators, sectionTopRightSeparators, sectionBottomRightSeparators) {
    if (sectionTopLeftSeparators != null) {
        sectionTopLeftSeparators.forEach(element => {
            element.style.borderLeft = document.body.clientWidth + "px solid #E9E3E7";
        });
    }

    if (sectionBottomLeftSeparators != null) {
        sectionBottomLeftSeparators.forEach(element => {
            element.style.borderLeft = document.body.clientWidth + "px solid #E9E3E7";
        });
    }

    if (sectionTopRightSeparators != null) {
        sectionTopRightSeparators.forEach(element => {
            element.style.borderRight = document.body.clientWidth + "px solid #E9E3E7";
        });
    }

    if (sectionBottomRightSeparators != null) {
        sectionBottomRightSeparators.forEach(element => {
            element.style.borderRight = document.body.clientWidth + "px solid #E9E3E7";
        });
    }
}

function setBurgerState(body, burger, menu) {
    burger.onclick = function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('scroll_lock');
    }
}

function setPopupState(body) {
    const popupLinks = document.querySelectorAll('.popup-link');
    const popupCloseIcon = document.querySelectorAll('.close-popup');

    if (popupLinks.length > 0) {
        popupLinks.forEach(function(popupLink) {
            popupLink.addEventListener("click", function(event) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const currentPopup = document.getElementById(popupName);
                popupOpen(currentPopup, body);
                event.preventDefault();
            })
        });
    }

    if (popupCloseIcon.length > 0) {
        popupCloseIcon.forEach(function(closeIcon) {
            closeIcon.addEventListener("click", function(event) {
                popupClose(event.target.closest('.popup'), body);
                event.preventDefault();
            })
        })
    }
}

function popupOpen(currentPopup, body) {
    if (currentPopup) {
        body.classList.add('scroll_lock');
    }

    currentPopup.classList.add('open');
    currentPopup.addEventListener("click", function(event) {
        if (!event.target.closest('.popup__content')) {
            popupClose(event.target.closest('.popup'), body);
        }
    })
}

function popupClose(currentPopup, body) {
    currentPopup.classList.remove('open');
    body.classList.remove('scroll_lock');
}