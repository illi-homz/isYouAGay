const titleLib = {
    small: "Ты Гей!!!!",
    main: "Ты главный Гей этой тусовки!!!!",
};

const main = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    const title = titleLib[level];

    const titleNode = document.getElementById('main-title');

    if (title) {
        titleNode.innerText = title
    } else {
        titleNode.innerText = titleLib.small
    }
    
};

document.addEventListener('DOMContentLoaded', main, false);
