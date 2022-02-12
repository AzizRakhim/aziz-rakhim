// HEADER START

window.onscroll = () => {
  scrollNavbar()
};

scrollNavbar = () => {
  const navBar = document.getElementById("navBar");
  const links = document.querySelectorAll("#navBar a");

  if (document.documentElement.scrollTop > 1) {
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
// SEETING MODAL START

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

elBlueBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("blue"); 
})

elGreenBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("green"); 
})

elYellowBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("yellow"); 
})

elPinkBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("pink"); 
})

elOrangeBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("orange"); 
})

elBlackBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("black"); 
})

elPurpleBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("purple"); 
})

elLightBlueBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("light-blue"); 
})

elDarkBlueBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("dark-blue"); 
})

elCrimsonBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("crimson"); 
})

elClayColorBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("clay-color"); 
})

elRedBtn.addEventListener("click", function() {
  var elms = document.querySelectorAll("[id='convert']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].classList.add("red"); 
})

