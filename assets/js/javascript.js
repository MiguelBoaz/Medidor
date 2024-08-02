const nome = document.getElementById("nome");
const emailVar = document.getElementById("email");
const button = document.querySelector("button");
const bar = document.querySelectorAll(".bar");
const popupCard = document.querySelector(".popupSection");
const popup = document.querySelector(".popup");
const popupText = document.querySelector(".popupText");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close");

function playBar() {
    let gaymometer = Math.random() * 10;
    let gayVar = new Gay(nome.value, emailVar.value);

    console.log(gaymometer);
    bar.forEach ((barPar) => {barPar.style.width = `${gaymometer*10}%`});

    setTimeout (() => {
        popupText.innerText = `${gayVar.name} é ${Math.floor(gaymometer * 10)}% gay.`;
        popupCard.classList.add('show');
        overlay.classList.add('show');
    }, 2000);
    
}

function enterKey(key) {
    if(key.keyCode === 13) {
        playBar();
    }
}

function close()  {
    popupCard.classList.remove('show');
    overlay.classList.remove('show');
    nome.value = "";

    bar.forEach ((barPar) => {barPar.style.width = '0%'});
}

class Gay{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


button.addEventListener('click', playBar);
nome.addEventListener('keyup', enterKey);
emailVar.addEventListener('keyup', enterKey);
closeIcon.addEventListener('click', close);

// console.log(bar);