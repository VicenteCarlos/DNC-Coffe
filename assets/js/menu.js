const menuButtonOpen = document.getElementById("menu-button")
const menuButtonClose = document.getElementById("menu-button-open")
const menu = document.getElementById("menu-is-open")

const openMenu = () => {
    mainParts.forEach(item => item.style.display = "none")

    menu.style.display = "flex"
}

menuButtonOpen.onclick = openMenu

const closeMenu = () => {
    mainParts.forEach(item => item.style.display = "flex")

    menu.style.display = "none"
}

menuButtonClose.onclick = closeMenu

