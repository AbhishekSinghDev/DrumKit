let allButtons = document.querySelectorAll(".drum");
for(let i=0; i<allButtons.length; i++) {
    //? why we did't pass like ("click", handleClick()) with parenthesis becoz whenever the js code start executing the word by word line by line the moment compiler hits the handClick() it straight away call the function. so that's why function is passed without parenthesis.
    //* allButtons[i].addEventListener("click", handleClick);

    //? another way of calling a function called ananonymous function - a function without name
    allButtons[i].addEventListener("click", function () {
        let keyPressed = this.textContent;
        playMusic(keyPressed);
        buttonAnimation(keyPressed);
    });
}

document.addEventListener("keydown", function (event) {
    let keyPressed = event.key;
    playMusic(keyPressed);
    buttonAnimation(keyPressed);
});

function buttonAnimation(keyPressed) {
    let element = document.querySelector("." + keyPressed);
    element.classList.add("pressed");

    setTimeout(function() {
        element.classList.remove("pressed");
    }, 100);
}

function playMusic(keyPressed) {
    switch(keyPressed) {
        case "w":
            let song1 = new Audio("./sounds/crash.mp3")
            song1.play();
            break;
        case "a":
            let song2 = new Audio("./sounds/kick-bass.mp3")
            song2.play();
            break;
        case "s":
            let song3 = new Audio("./sounds/snare.mp3")
            song3.play();
            break;
        case "d":
            let song4 = new Audio("./sounds/tom-1.mp3")
            song4.play();
            break;
        case "j":
            let song5 = new Audio("./sounds/tom-2.mp3")
            song5.play();
            break;
        case "k":
            let song6 = new Audio("./sounds/tom-3.mp3")
            song6.play();
            break;
        case "l":
            let song7 = new Audio("./sounds/tom-4.mp3")
            song7.play();
            break;
        default:
            console.log("wrong key pressed");
    }
}