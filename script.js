function selectFlavor(flavour){
    const pic = document.getElementById("heroPicture");
    pic.src = "pics/" + flavour + ".png";
}

function buyDrink(){

}

let gamerMode = false;

function toggleGamerMode() {
    gamerMode = !gamerMode;

    const status = document.getElementById("modeStatus");
    status.textContent = "Gamer Mode: " + (gamerMode ? "ON" : "OFF");

    document.body.classList.toggle("gamer-active", gamerMode);
}

let startTime;

function startReactionTest() {
    const button = document.getElementById("reactionButton");
    const result = document.getElementById("reactionResult");

    result.textContent = "";
    button.hidden = true;

    const delay = Math.random() * 2000 + 1000;

    setTimeout(() => {
        startTime = Date.now();
        button.hidden = false;
    }, delay);
}


function recordReaction() {
    const reactionTime = Date.now() - startTime;
    const result = document.getElementById("reactionResult");

    result.textContent = `Reaction time: ${reactionTime} ms`;
    document.getElementById("reactionButton").hidden = true;
}

const effects = [
    "Uncontrollable headshots",
    "Seeing FPS counter everywhere",
    "Hands glowing RGB colors",
    "Keyboard overheating",
    "Sleep permanently disabled",
    "Sudden urge to say 'GG EZ'"
];

function generateEffect() {
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    document.getElementById("effectText").textContent = randomEffect;
}
