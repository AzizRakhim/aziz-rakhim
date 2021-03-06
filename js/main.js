// MENU START

let elMenuBtn = document.getElementById("menuBtn");
let elMenuBox = document.getElementById("menuBox");
let elIconBtn = document.getElementById("iconBtn");
let count = 0;

elMenuBtn.addEventListener("click", function() {
  elMenuBox.classList.toggle("show");
  if (count == 0){
    elIconBtn.className = "bx bx-x";
    count--;
  } else{
    elIconBtn.className = "bx bx-menu";
    count++;
  }
})

// HEADER START

window.onscroll = () => {
  scrollNavbar()
};

scrollNavbar = () => {
  const navBar = document.getElementById("navBar");
  const links = document.querySelectorAll("#navBar a");

  if (document.documentElement.scrollTop > 0) {
    navBar.classList.add("fixed-header");

    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.add('text-black');
    }

  } else {
    navBar.classList.remove("fixed-header");

    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.remove('text-black');
    }
  }
}

// HEADER END
// SETTING MODAL START

let elSettingBtn = document.getElementById("settingBtn");
let elSettingBox = document.getElementById("settingBox");

elSettingBtn.addEventListener("click", function () {
  elSettingBox.classList.toggle("show");
})

// SETTING MODAL END
// ROOT START

let elBlueBtn = document.getElementById("blueBtn");
let elGreenBtn = document.getElementById("greenBtn");
let elYellowBtn = document.getElementById("yellowBtn");
let elPinkBtn = document.getElementById("pinkBtn");
let elOrangeBtn = document.getElementById("orangeBtn");
let elBlackBtn = document.getElementById("blackBtn");
let elPurpleBtn = document.getElementById("purpleBtn");
let elLightBlueBtn = document.getElementById("lightBlueBtn");
let elDarkBlueBtn = document.getElementById("darkBlueBtn");
let elCrimsonBtn = document.getElementById("crimsonBtn");
let elClayColorBtn = document.getElementById("clayColorBtn");let elRedBtn = document.getElementById("redBtn");
let elConvertBox = document.getElementById("convert");
var elms = document.querySelectorAll("[id='convert']");

elBlueBtn.addEventListener("click", function() {
    for(var i = 0; i < elms.length; i++) 
      elms[i].classList.add("blue"); 
})

elGreenBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("green"); 
})

elYellowBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("yellow"); 
})

elPinkBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("pink"); 
})

elOrangeBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("orange"); 
})

elBlackBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("black"); 
})

elPurpleBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("purple"); 
})

elLightBlueBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("light-blue"); 
})

elDarkBlueBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("dark-blue"); 
})

elCrimsonBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("crimson"); 
})

elClayColorBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("clay-color"); 
})

elRedBtn.addEventListener("click", function() {
  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("red"); 
})

// ROOT END
// REVEL START

ScrollReveal({
  reset: true,
  distance: '100px',
  duration: 2500,
  delay: 70
});

ScrollReveal().reveal('.about__left-img, .skill-content', {delay: 70, origin: 'left'});

ScrollReveal().reveal('.about__center, .resume-cover, .blog__appear', {delay: 70, origin: 'top'});

ScrollReveal().reveal('.about__right, .skill__stats, .portfolio', {delay: 70, origin: 'bottom'});

ScrollReveal().reveal('.testimonial__img-holder, .blog__item:first-child', {delay: 70, origin: 'left'});

ScrollReveal().reveal('.testimonial__content, .blog__item:last-child', {delay: 70, origin: 'right'});

ScrollReveal().reveal('.portfolio__item', {delay: 70, origin: 'bottom', interval: 70});

ScrollReveal().reveal('.service__item:nth-child(odd)', {delay: 70, origin: 'left', interval: 70});

ScrollReveal().reveal('.service__item:nth-child(even)', {delay: 70, origin: 'right', interval: 70});

ScrollReveal().reveal('.resume__list-intro, .numeral__project', {delay: 70, origin: 'bottom', interval: 300});

// SCROLL REVEAL END

