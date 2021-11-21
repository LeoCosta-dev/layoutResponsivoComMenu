const mobile = document.getElementById("mobile")
const menuMobile = document.getElementById("menu-mobile")

mobile.addEventListener("click", () => {
    if(menuMobile.style.display == "none"){
        menuMobile.style.display = "flex";
        menuMobile.style.height = "max-content"
    } else {
        menuMobile.style.display = "none"
    }
})