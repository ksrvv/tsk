//slider
var images = document.querySelectorAll('.slidr-img');



const sliderLine=document.querySelector(".slider-line")
var count =0;
var width;
function init()
{
 
    width=document.querySelector(".slider").offsetWidth;
sliderLine.style.width=width*images.length+"px";
images.forEach(item=>{
    item.style.width=width+"px"
    item.style.height="auto"
})
}
window.addEventListener("resize", init)
init()
document.querySelector(".slider-navigation-button.next").addEventListener("click", function(){
    // console.log(count)
    count ++;
    if(count>images.length-1){
        count=0;
    }
    rollSlider()
})
document.querySelector(".slider-navigation-button.prev").addEventListener("click", function(){
    count --;

    if(count<0){
        count=images.length-1;
    }
    rollSlider()
})
function rollSlider(){
    sliderLine.style.transform = "translate(-"+count*width+"px)"
}
function ToMainPage(){
    window.open("index.html");
}
function toResearch1(){
    window.open("https://files.eric.ed.gov/fulltext/ED378278.pdf", '_blank');
}
function toResearch2(){
    window.open("http://achievelearning.org/assets/documents/research_basis_for_tutoring.pdf", '_blank');
}
function toResearch3(){
    window.open("https://nclca.wildapricot.org/resources/Documents/Publications/TLAR/Issues/6_2_2.pdf", '_blank');
}
function ToLinkedIn(){
    window.open("https://www.linkedin.com/in/zabaleraa/", '_blank');

}
function ToTelegram(){
    window.open("https://t.me/zabaleraa", '_blank');

}
var animItems = document.querySelectorAll(".solution-img-img")
if(animItems.length>0){
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll(params){
        for(var index=0; index<animItems.length;index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 1;
            var animItemPoint = window.innerHeight - animItemHeight/animStart;
            if((pageYOffset>(animItemOffset-animItemPoint-300))&&(pageYOffset<(animItemOffset+animItemHeight))){
                animItem.classList.add("active")
            }
            else{
                // animItem.classList.remove("active")
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset||document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset||document.documentElement.scrollTop;
        return{top:rect.top+scrollTop, left:rect.left+scrollLeft}
    }
}

function hideResearches(){
    var textArea = document.getElementById("white-paper-research");
    var researchButtons=document.querySelectorAll(".research")
    var showMoreButton=document.getElementById("show-more-button");
    if(textArea.classList.contains("hidden")){
        textArea.classList.remove("hidden")
        researchButtons.forEach((element)=>{
            element.classList.remove("hidden")
            showMoreButton.textContent="Show less"
        })
    }
    else{
        textArea.classList.add("hidden")
        researchButtons.forEach((element)=>{
            element.classList.add("hidden")
            showMoreButton.textContent="Show more"
        })
    }
}
function showMenu(evt){
    const nav = document.querySelector(".nav")
     const header = document.querySelector(".header") 
 var navs = document.querySelectorAll(".nav-item")
 navs.forEach(navItem=>{
     navItem.addEventListener("click", function (){
         ret()
     })
 })
     if(evt.getAttribute('src')=="Burger Icon YB.svg"){
          evt.setAttribute('src', "X-MarkYB.svg")
          nav.classList.remove("disabled") 
          header.classList.add("active")
          document.body.classList.add("lock")
 
     }
     else {
        ret()
     }
     function ret(){
         evt.setAttribute('src', "Burger Icon YB.svg")
         nav.classList.add("disabled") 
         header.classList.remove("active")
         document.body.classList.remove("lock")
     }
 
 
  }
  var swiper = new Swiper(".mySwiper", {
    loop:true
  });