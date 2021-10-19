// ===============for vertical navbar=================
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
            document.getElementById('vertical_nav_box').style.display = "block";
        if (window.scrollY > 50) {
            document.getElementById('vertical_nav_box').style.display = "block";
            document.getElementById('vertical_nav_box').style.opacity = "1";
        } else {
            document.getElementById('vertical_nav_box').style.opacity = "0";
            document.getElementById('vertical_nav_box').style.display = "none";
        } 
    });
  }); 

// ===============Skills=================

document.getElementById("skills").addEventListener("click", function(){
    skill = document.getElementById("skill_contains");
    edu = document.getElementById("edu_contains");
    skill.style.display = "flex";
    edu.style.display = "none";
    document.getElementById("skills").classList.add("current");
    document.getElementById("educations").classList.remove("current");
});
document.getElementById("educations").addEventListener("click", function(){
    edu = document.getElementById("edu_contains");
    edu.style.display = "flex";
    skill.style.display = "none";
    document.getElementById("skills").classList.remove("current");
    document.getElementById("educations").classList.add("current");
});




function showhide()
    {  
         var mobNavbar = document.getElementById("mob_nav");
         if (mobNavbar.style.display !== "flex") 
         {  
             mobNavbar.style.display = "flex";
             document.getElementById("menu_a").innerHTML = '<i class="fas fa-times"></i>';  
         }  
         else
         {  
             mobNavbar.style.display = "none";  
             document.getElementById("menu_a").innerHTML = '<i class="fas fa-bars"></i>';
         }  
    }  






// ===============for text heading=================
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
