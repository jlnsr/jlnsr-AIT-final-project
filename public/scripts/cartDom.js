// button to request /cart
const backToMenu = document.querySelector(".to-menu")
backToMenu.addEventListener("click", toMenu)

function toMenu(){
    console.log('returning to menu')
    window.location.href = '/menu'
}