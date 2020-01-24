// Open/close menu

class Menu {
    constructor() {
        this.menu = document.querySelector('.nav__menu');
        this.buttonMenu = document.querySelector('.button-menu');
        this.menuList = document.querySelector('.nav__list');

        this.toggleMenu();
    }

    toggleMenu() {
        this.buttonMenu.addEventListener('click', () => {
            if (this.menu.classList.contains('is-active')) {
                this.menu.classList.remove('is-active');
                this.buttonMenu.classList.remove('button-menu--closed');
                this.menu.style.height = 0;
            } else {
                this.menu.classList.add('is-active');
                this.buttonMenu.classList.add('button-menu--closed');
                this.addHeight();
            }
        })
    }

    addHeight() {
        const heightMenu = this.menuList.offsetHeight;
        this.menu.style.height = heightMenu + 'px';
    }
}

const menu = new Menu();

// Slider

class Slider {
    constructor() {
        this.slideIndex = 1;
        this.sliderList = document.querySelector('.advantage-images__list');
        this.sliderItems = document.querySelectorAll('.advantage-images__item');
        
        this.toggleSlides(this.slideIndex);
        this.init();
    }

    init() {
        const controls = document.querySelectorAll('.controls__button');

        controls.forEach((item) => {
            item.addEventListener('click', () => {
                this.slideIndex = +event.target.dataset.button;

                this.toggleSlides(this.slideIndex);
                this.setActiveDot(controls, this.slideIndex);
                this.slides(this.slides);
            })
        })
    }

    toggleSlides(slideIndex) {
        
        const activeSlide = document.querySelector(`[data-slide='${slideIndex}']`);

        this.sliderItems.forEach((item) => {
            item.classList.add('not-active')
        })

        activeSlide.classList.remove('not-active');    
    }

    setActiveDot(controls, slideIndex) {
        controls.forEach(function (item) {
            item.classList.remove("is-active");
        })

        const activeControl = document.querySelector(`[data-button='${slideIndex}']`);
        activeControl.classList.add("is-active");
    }
}

const slider = new Slider();

// Services

class Services {
}

const services = new Services();
