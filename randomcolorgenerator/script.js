let currentColor = document.querySelector('.current-color');
let bodyElem = document.querySelector('body');
let generateBtn = document.querySelector('.generate-btn');

bodyElem.style.backgroundColor = currentColor.innertext;

generateBtn.addEventListener('click', ()=> {
    let randomColor = "";
    let characters = "0123456789abcdef"

/*
    THE FOR LOOP IS VERY USEFUL IN JAVASCRIPT SYNTAX:
    FOR (INITIALISER; CONDITION; INCREMENT) {
        CODE
    }
*/

    for(let i = 0; i < 6; i++) {
        randomColor = randomColor + characters[Math.floor(Math.random() * 16)];
    }

    currentColor.innerText = "#" + randomColor;
    bodyElem.style.backgroundColor = "#" + randomColor;
})