const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = () => {
navLinks.classList.toggle("active");
};


// Dark Mode

const toggle = document.getElementById("modeToggle");

toggle.onclick = () => {
document.body.classList.toggle("dark");
};


// Form Validation

document.getElementById("contactForm").addEventListener("submit", function(e){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name=="" || email==""){
alert("Please fill all fields");
e.preventDefault();
}

});


// Smooth Scrolling

document.querySelectorAll("a[href^='#']").forEach(anchor=>{
anchor.addEventListener("click", function(e){
e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});
});
