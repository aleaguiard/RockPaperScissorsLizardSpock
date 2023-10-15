let site;
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
    site = document.getElementById("site");
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

function starting(){
    buttonStart.disabled = true;
    buttonRules.disabled = true;
    site.style.pointerEvents = "none";
    site.style.opacity = 0.5; 
    myName.focus(); 
}

function activeButton(){
    if(myName.value.length >= 2){
        buttonStart.disabled = false;
    }else {         
        buttonStart.disabled = true;
    }
};

function activeGame() {
    if (buttonStart.disabled) {
        site.style.pointerEvents = "none"; 
        site.style.opacity = 0.5; 
        buttonStart.style.display = "block";
        buttonRules.style.display = "block"; 
    } else {
            site.style.pointerEvents = "auto";
            site.style.opacity = 1;
            buttonRules.disabled = false;
            getRandomOpponentChoice();
    }
};

function changeNames (){
    document.getElementById("changeName").textContent = myName.value;
};

function popUpRules(){
    let popupImagen = new Image();
    popupImagen.src = "images/rulesGame.png";
    popupImagen.style.width = "100%";
    popupImagen.style.height = "100%";
    let ventanaEmergente = window.open("", "Popup", "width=600,height=400"); 
    ventanaEmergente.document.body.style.margin = "0";
    ventanaEmergente.document.body.appendChild(popupImagen);
};

function zoomInImage() {
    this.style.transform = "scale(1.4)";
    this.style.transition = "transform 0.3s";
};

function zoomOutImage() {
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.3s";
};

function getRandomOpponentChoice() {
    const opponentChoices = ["rock.png", "paper.png", "scissor.png", "lizard.png", "spock.png"];
    let randomOpponentChoice = () => {
        let randomIndex = Math.floor(Math.random() * opponentChoices.length);
        return opponentChoices[randomIndex];
    }
    opponentChoiceInterval = setInterval(() => {
        opponentChoice.src = `images/${randomOpponentChoice()}`;
    }, 50);
};

function myChoice() {
    
};


function setListeners(){
    myName.addEventListener("input", activeButton);
    buttonStart.addEventListener("click", changeNames)
    buttonStart.addEventListener("click", activeGame)
    buttonRules.addEventListener("click", popUpRules);

    const images = [rock, paper, scissor, lizard, spock];
    images.forEach((image) => {
        image.addEventListener("mouseover", zoomInImage);
        image.addEventListener("mouseout", zoomOutImage);
    });
};

window.addEventListener("load",()=>{
    variableInitialization();
    starting();  
    setListeners();
});
