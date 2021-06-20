const $btnMenuMobile = document.querySelector(".btn-menu-mobile")

const $nav = document.querySelector("#nav")

$btnMenuMobile.addEventListener("click", ()=>{
    $nav.classList.toggle("ativo")

})

