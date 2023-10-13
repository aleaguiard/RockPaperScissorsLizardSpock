let myName;
let changeName;
let buttonStart;
let scoreOpponent;
let yourScore;
let rock;
let paper;
let scissor;
let lizard;
let spock;
let yourChoice;
let opponentChoice;
let result;
let buttonRules;


function variableInitialization(){
    myName = document.getElementById("name");
    changeName = document.getElementById("changeName");
    buttonStart = document.getElementById("start"); 
    scoreOpponent = document.getElementById("opponent-score");
    yourScore = document.getElementById("your-score");
    rock = document.getElementById("rock");
    paper = document.getElementById("paper");
    scissor = document.getElementById("scissor");
    lizard = document.getElementById("lizard");
    spock = document.getElementById("spock");
    yourChoice = document.getElementById("your-choice");
    opponentChoice = document.getElementById("opponent-choice");
    result = document.getElementById("result");
    buttonRules = document.getElementById("rules");
};

function addName(){
    if(myName.value.length == 0){
        myName.focus();
    }else{
        document.getElementById("changeName").textContent = myName.value;
    }
};

function popUpRules(){
    let popupImagen = new Image();
    popupImagen.src = "images/rulesGame.png";
    popupImagen.style.width = "100%";
    popupImagen.style.height = "100%";
    let ventanaEmergente = window.open("", "Popup", "width=600,height=400"); // No se usa coma (,) en "width=600,height=400"
    ventanaEmergente.document.body.style.margin = "0";
    ventanaEmergente.document.body.appendChild(popupImagen);
};

function zoomInImage() {
    this.style.transform = "scale(1.3)";
    this.style.transition = "transform 0.3s";
}

function zoomOutImage() {
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.3s";
}

function setListeners(){
    buttonStart.addEventListener("click", addName);
    buttonRules.addEventListener("click", popUpRules);

    const images = [rock, paper, scissor, lizard, spock];
    images.forEach((image) => {
        image.addEventListener("mouseover", zoomInImage);
        image.addEventListener("mouseout", zoomOutImage);
    });
};

window.addEventListener("load",()=>{
    variableInitialization();
    setListeners();
    myName.focus();
});
