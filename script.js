var skillCardHeaders=document.getElementsByClassName("skill-card-header")
function expandSkillCard (e){
 var cardbody=document.getElementById(e.id.replace('Button',''))   
    if(e.firstChild.getAttribute('src')=="add.png"){
        
        cardbody.classList.remove("hidden")
 e.firstChild.setAttribute('src', 'minus.png');
    }
   
    else {
        cardbody.classList.add("hidden")
          e.firstChild.setAttribute('src', 'add.png');
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
    if(evt.getAttribute('src')=="list_icon.svg"){
         evt.setAttribute('src', "cancel_icon.svg")
         nav.classList.remove("disabled") 
         header.classList.add("active")
         document.body.classList.add("lock")

    }
    else {
       ret()
    }
    function ret(){
        evt.setAttribute('src', "list_icon.svg")
        nav.classList.add("disabled") 
        header.classList.remove("active")
        document.body.classList.remove("lock")
    }


 }
function getToResume(){
    window.open("https://drive.google.com/file/d/1QWKV66HMQ52FxrycfnqQdmH4BJJixlSF/view?usp=drivesdk", '_blank');
}
function getToYoungBy(){
    window.open("youngby.html", '_blank');

}
// const menuLinks=document.querySelectorAll(".nav-item [data-goto]");
// menuLinks.forEach(menuLink=>{
//     menuLink.addEventListener("click", onMenuLinkClick)
// })
// function onMenuLinkClick(e){
// const menuLink=e.target;
// const gotoSection = document.querySelector(menuLink.dataset.goto).getBoundingClientRect().top
// window.scrollTo({
//     top:gotoSection,
//     behaviour:"smooth"
// })
// e.preventDefault();
// }

(function($){
    $(window).on("load",function(){
        $("nav a").mPageScroll2id({
            offset:100
        });
        
      
    });
})(jQuery);

