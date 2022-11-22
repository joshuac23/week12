const ClickMeButton = document.querySelector(".clickme")

function clickmefunc () {
    alert("You clicked the button!");
    // ClickMeButton.removeEventListener("click", clickmefunc)
}

function changebackgroundcolour () {
    document.body.classList.add("pink");
}

// ClickMeButton.addEventListener("click", clickmefunc);
ClickMeButton.addEventListener("click", changebackgroundcolour);


// change text in button after clicking
function changeText (event) {
    console.log(event.target)
    if (ClickMeButton.textContent === "Click me!"){
    ClickMeButton.textContent = "Clicked!";
    }

    else {
        ClickMeButton.textContent = "Click me!";
    }
}

ClickMeButton.addEventListener("click", changeText);

// add new button
function createAddButton() {
    const newButton = document.createElement("button");
    // newButton.classList.add("green-bg")
    newButton.addEventListener("mousemove", changeBGgreen)
    newButton.textContent = "Purple";
    document.body.appendChild(newButton);

}

ClickMeButton.addEventListener("click", createAddButton, {once:true});


// add paragraph
function createAddParagraph() {
    const newPara = document.createElement("p");
    // newPara.classList.add("green-bg");
    newPara.addEventListener("mouseover", changeBGgreen)
    newPara.textContent = "My paragraph";
    document.body.appendChild(newPara);

}

ClickMeButton.addEventListener("click", createAddParagraph, {once: true});

function changeBGgreen(event){
    event.target.classList.toggle("green-bg")
}

const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener("mouseover", changeBGgreen);


buttonContainer.addEventListener("click", changeParaCol);

function changeParaCol(event){
    // console.log(event.target.textContent)
    event.target.style.backgroundColor = event.target.textContent;
}