let menuButton = document.querySelector("#menuButton")
let ulElement = document.querySelector("#links")
let Buttons = document.querySelector("#Buttons")
let closeButton = document.querySelector("#closeBtn")

menuButton.addEventListener("click", function(){
    ulElement.style.display = "flex"
    Buttons.style.display = "block"
    menuButton.style.display = "none"
    closeButton.style.display = "block"
})

closeButton.addEventListener("click", function(){
    ulElement.style.display = "none"
    Buttons.style.display = "none"
    menuButton.style.display = "block"
    closeButton.style.display = "none"
})

