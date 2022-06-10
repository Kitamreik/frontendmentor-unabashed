const hamburgerIcon = document.querySelector(".menu");
const navUl = document.querySelector(".nav-bar");
hamburgerIcon.addEventListener("click", () => {
    console.log("this has been clicked");
    navUl.classList.toggle("open-sesame");
});