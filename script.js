

// frequently asked quetions


function show(){

let opEn = document.querySelector(".open");
let shoanSwer = document.querySelector(".shoanSwer");

opEn.style.display= 'block';

}


// active links
const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();
if(pageName==="index.html"){
    document.querySelector(".home").classList.add("active");
}

if(pageName==="about.html"){
    document.querySelector(".about").classList.add("active");
}

if(pageName==="course.html"){
    document.querySelector(".course").classList.add("active")
}

if(pageName==="contact.html"){
    document.querySelector(".contact").classList.add("active")
}
 
// sidebar
function showSidebar(){
    const showSidebar = document.querySelector("#sidebar");
    showSidebar.style.display = "block";
}

function closeSidebar(){
    const closeSidebar = document.querySelector("#sidebar");
    closeSidebar.style.display = "none"
}

// change navbar color when scrol
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle('window-scrol', window.scrollY > 0);

    const links = nav.querySelectorAll("a");
    links.forEach(link => {
        link.style.color = window.scrollY > 0 ? "#000" : ""; // Set color to black if scrolled, otherwise reset
    });
});
