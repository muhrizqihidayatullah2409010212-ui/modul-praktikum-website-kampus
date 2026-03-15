document.addEventListener("DOMContentLoaded", function(){

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

if(window.scrollY > 50){
navbar.style.background = "rgba(0,170,255,0.3)";
navbar.style.boxShadow = "0 5px 20px rgba(0,170,255,0.3)";
}else{
navbar.style.background = "rgba(0,170,255,0.3)";
navbar.style.boxShadow = "none";
}

});


const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}

});

});


const toggle = document.getElementById("darkToggle");

if(toggle){

toggle.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggle.textContent="☀️";
}else{
toggle.textContent="🌙";
}

});

}


const form = document.querySelector("form");

if(form){

const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function(e){

let valid = true;

inputs.forEach(input => {

if(input.value.trim()===""){
valid=false;
}

});

if(!valid){
e.preventDefault();
alert("Semua field harus diisi!");
}else{
alert("Pesan berhasil dikirim!");
}

});

}


const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.getAttribute("data-target");

let count = 0;

function update(){

if(count < target){

count += Math.ceil(target / 80);
counter.innerText = count;

setTimeout(update,30);

}else{

counter.innerText = target;

}

}

update();
observer.unobserve(counter);

}

});

},{ threshold:0.5 });


counters.forEach(counter => {
observer.observe(counter);
});

});
