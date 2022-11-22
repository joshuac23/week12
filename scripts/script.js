const ClickMeButton = document.querySelector(".clickme")

function clickmefunc () {
    alert("You clicked the button!");
    // ClickMeButton.removeEventListener("click", clickmefunc)
}

ClickMeButton.addEventListener("click", clickmefunc, {once: true})