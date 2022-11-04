var skillCardHeaders=document.getElementsByClassName("skill-card-header")
function expandSkillCard (e){
 var body=document.getElementById(e.id.replace('Button',''))   
    if(e.firstChild.getAttribute('src')=="add.png"){
        
body.classList.remove("hidden")
 e.firstChild.setAttribute('src', 'minus.png');
    }
   
    else {
        body.classList.add("hidden")
          e.firstChild.setAttribute('src', 'add.png');
    }

}
function getToResume(){
    window.open("https://drive.google.com/file/d/1QWKV66HMQ52FxrycfnqQdmH4BJJixlSF/view?usp=drivesdk", '_blank');
}