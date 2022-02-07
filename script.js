const titleLib = {
    small: "Ты Гей!!!!",
    main: "Ты главный Гей этой тусовки!!!!",
};

const showTitle = (titleNode) => {
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    const title = titleLib[level];

    if (title) {
        titleNode.innerText = title
    } else {
        titleNode.innerText = titleLib.small
    }
}

const main = () => {
    const titleNode = document.getElementById('main-title');
    const loaderNode = document.getElementById('loader');
    showTitle(titleNode)

    setTimeout(() => {
        titleNode.classList.remove('hidden')
        loaderNode.classList.add('hidden')

        window.location.replace("http://ya.ru");
    }, 3000)
};

document.addEventListener('DOMContentLoaded', main, false);
