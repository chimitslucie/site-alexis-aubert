let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");

burger.addEventListener("click", function(e) {
    
    if(burger.classList.contains("active")) {
        burger.classList.remove("active");
    } else {
        burger.classList.add("active");
    }

    if(nav.classList.contains("open")) {
        nav.classList.remove("open");
    } else {
        nav.classList.add("open");
    }

})