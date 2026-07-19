// Smooth scrolling

document.querySelectorAll("nav a").forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Sticky navbar shadow
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){
    header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";
}
else{
    header.style.boxShadow="none";
}

});

// Simple typing effect
const text=["Full Stack Developer","Web Designer","IT Student"];

let count=0;
let index=0;
let current="";
let letter="";

(function type(){

if(count===text.length){
count=0;
}

current=text[count];
letter=current.slice(0,++index);

document.querySelector(".hero-text h2").textContent=letter;

if(letter.length===current.length){
count++;
index=0;
setTimeout(type,1500);
}
else{
setTimeout(type,120);
}

})();
// EmailJS Initialization
emailjs.init("s6VPPQ6hh41fvaHgT");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Email to you
    emailjs.sendForm(
        "service_qijr7vs",
        "template_j0f0sha",
        this
    ).then(function () {

        // Auto reply to visitor
        emailjs.send(
            "service_qijr7vs",
            "template_ls9sfx4",
            {
                name: form.name.value,
                email: form.email.value
            }
        );

        alert("Message sent successfully!");
        form.reset();

    }).catch(function (error) {
        console.log(error);
        alert("Failed to send message.");
    });
});