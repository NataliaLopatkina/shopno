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
