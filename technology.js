let slider5 = document.getElementById("slider5");
let slider6 = document.getElementById("slider6");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

one.addEventListener('click', ()=>{
    one.classList.add("active-technology");
    two.classList.remove("active-technology");
    three.classList.remove("active-technology");
    slider5.style.top = "0";
    slider6.style.top = "0";
})
two.addEventListener('click', ()=>{
    two.classList.add("active-technology");
    one.classList.remove("active-technology");
    three.classList.remove("active-technology");
    slider5.style.top = "-20rem";
    slider6.style.top = "-30rem";
})
three.addEventListener('click', ()=>{
    three.classList.add("active-technology");
    one.classList.remove("active-technology");
    two.classList.remove("active-technology");
    slider5.style.top = "-40rem";
    slider6.style.top = "-60rem";
})