// DESTINATION

let slider = document.getElementById("slider");
let slider2 = document.getElementById("slider2");

let moon = document.getElementById("moon");
let mars = document.getElementById("mars");
let europa = document.getElementById("europa");
let titan = document.getElementById("titan");

moon.addEventListener('click', ()=>{
    moon.classList.add("active");
    mars.classList.remove("active");
    europa.classList.remove("active");
    titan.classList.remove("active");
    slider.style.left = "0rem";
    slider2.style.left = "-75rem";
})

mars.addEventListener('click', ()=>{
    mars.classList.add("active");
    moon.classList.remove("active");
    europa.classList.remove("active");
    titan.classList.remove("active");
    slider.style.left = "-25rem";
    slider2.style.left = "-50rem";
})

europa.addEventListener('click', ()=>{
    europa.classList.add("active");
    moon.classList.remove("active");
    mars.classList.remove("active");
    titan.classList.remove("active");
    slider.style.left = "-50rem";
    slider2.style.left = "-25rem";
})

titan.addEventListener('click', ()=>{
    titan.classList.add("active");
    moon.classList.remove("active");
    mars.classList.remove("active");
    europa.classList.remove("active");
    slider.style.left = "-75rem";
    slider2.style.left = "0rem";
})
