let slider3 = document.getElementById("slider3");
let slider4 = document.getElementById("slider4");

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");

first.addEventListener('click', ()=>{
    first.classList.add("active-crew");
    second.classList.remove("active-crew");
    third.classList.remove("active-crew");
    fourth.classList.remove("active-crew");
    slider3.style.left = "0";
    slider4.style.left = "-90rem";
})
second.addEventListener('click', ()=>{
    second.classList.add("active-crew");
    first.classList.remove("active-crew");
    third.classList.remove("active-crew");
    fourth.classList.remove("active-crew");
    slider3.style.left = "-35rem";
    slider4.style.left = "-60rem";
})
third.addEventListener('click', ()=>{
    third.classList.add("active-crew");
    first.classList.remove("active-crew");
    second.classList.remove("active-crew");
    fourth.classList.remove(".active-crew");
    slider3.style.left = "-70rem";
    slider4.style.left = "-30rem";
})
fourth.addEventListener('click', ()=>{
    fourth.classList.add("active-crew");
    first.classList.remove(".active-crew")
    second.classList.remove("active-crew");
    third.classList.remove("active-crew");
    slider3.style.left = "-105rem";
    slider4.style.left = "0";
})