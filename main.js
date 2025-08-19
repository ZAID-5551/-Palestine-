(function(){
    const sliderContainer = document.querySelector(".slider-wrapper"),
    slides = document.querySelectorAll(".slider .text"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next");
    let sliderIndex = 0 ;
    let slideWidth = sliderContainer.offsetWidth;
    slides.forEach(slide=>{
        slide.style.width = slideWidth + "px";
    })
   
    sliderContainer.style.width = slides.length * slideWidth + "px";
    next.addEventListener("click",()=>{
        sliderIndex == slides.length - 1 ? sliderIndex = 0 : sliderIndex++;
        sliderContainer.style.marginRight = - (sliderIndex * slideWidth) + "px";
    })
    prev.addEventListener("click",()=>{
        sliderIndex == 0 ? sliderIndex = slides.length - 1 : sliderIndex--;
        sliderContainer.style.marginRight = - (sliderIndex * slideWidth) + "px";
    })
})();   
const nav = document.querySelector("#nav"),
      toggler = document.querySelector(".toggler"),
      searchBox = document.querySelector(".searchBox");
toggler.addEventListener("click",()=>{
    nav.classList.toggle("active");
    searchBox.classList.toggle("hidden");

})