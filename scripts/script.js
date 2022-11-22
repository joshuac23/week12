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
function changeText () {
    if (ClickMeButton.textContent === "Click me!"){
    ClickMeButton.textContent = "Clicked!";
    }

    else {
        ClickMeButton.textContent = "Click me!";
    }
}

ClickMeButton.addEventListener("click", changeText);