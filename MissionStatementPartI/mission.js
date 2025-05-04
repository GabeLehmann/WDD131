const themeSelector = document.querySelector('#theme-select');
const logo = document.querySelector('#logo');
const body = document.body;

function changeTheme() {
    const currentTheme = themeSelector.value;

    if (currentTheme === 'dark') {
        body.classList.add('dark');
        logo.setAttribute('src', 'images/byui-logo_white.webp');
    } else {
        body.classList.remove('dark');
        logo.setAttribute('src', 'images/byui-logo_blue.webp');
    }
}

themeSelector.addEventListener('change', changeTheme);
