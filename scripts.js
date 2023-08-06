const body=document.querySelector("body"),
      nav=document.querySelector("nav"),
      navbar=document.querySelector(".nav-bar"),
      home=document.querySelector(".home-main"),
      about=document.querySelector(".about-main"),
      skill=document.querySelector(".skills-sec"),
      portfolio=document.querySelector(".portfolio-main"),
      contact=document.querySelector(".contact-main");
      footer=document.querySelector(".footer-main");
      modeToggle=document.querySelector(".dark-light"),
    sidebar=document.querySelector(".sidebar"),
      sideopen=document.querySelector(".sideopen");
     sideopen.addEventListener("click",() =>{
    nav.classList.add("active");
});
//toggle light and dark mode
modeToggle.addEventListener("click",()=>{
    modeToggle.classList.toggle("active");
    nav.classList.toggle("dark");
    navbar.classList.toggle("dark");
    home.classList.toggle("dark");
    about.classList.toggle("dark");
    skill.classList.toggle("dark");
    portfolio.classList.toggle("dark");
    contact.classList.toggle("dark");
    footer.classList.toggle("dark");
});
//side bar code
body.addEventListener("click",e =>{
    let clickedElm=e.target;

    if(!clickedElm.classList.contains("sideopen") && !clickedElm.classList.contains("menu"))
    nav.classList.remove("active");
});