const menu = document.getElementById('menu')

const handleSelect = () => {
    const selectedOption = document.querySelector('select').value;
    if (selectedOption) {
        window.location.href = selectedOption;
    }
}

const resetSelect = () => {
    menu.selectedIndex = 0;
}

window.addEventListener('pageshow', resetSelect);