var hamburger = document.querySelector(".hamburger-menu");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle(click);
    navlist.classList.toggle("open");
})
