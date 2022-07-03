window.onload = function() {
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

    window.onresize = function(event) {
        if (window.screen.width > 768) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('scroll_lock');
        }
    }
}