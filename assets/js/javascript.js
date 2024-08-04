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
    let baldometer = Math.random() * 10;
    let baldVar = new Bald(nome.value, emailVar.value);
    if(baldVar.email == "" ){
        alert("Por favor insira um email válido.")
    } else {
        console.log(baldometer);
        bar.forEach ((barPar) => {barPar.style.width = `${baldometer*10}%`});
    
        setTimeout (() => {
            popupText.innerText = `${baldVar.name} é ${Math.floor(baldometer * 10)}% calvo.`;
            popupCard.classList.add('show');
            overlay.classList.add('show');
        }, 2000);
    
        const data = {
            name: nome,
            email: baldVar.email,
            message: `${baldVar.name} é ${Math.floor(baldometer * 10)}% calvo.`,
            bar_width: `${baldometer*10}%`
        };
    
        fetch('http://192.168.0.20:3000/send-email', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
    }
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

class Bald{
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