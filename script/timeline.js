const body = document.querySelector('body');
let last_known_scroll_position = 0;
const act2Start = document.querySelector('.act2Container');
const act2coords = act2Start.getBoundingClientRect();
const act3Start = document.querySelector('.act3Container');
const act3coords = act3Start.getBoundingClientRect();
const act4Start = document.querySelector('.act4Container');
const act4coords = act4Start.getBoundingClientRect();
const act5Start = document.querySelector('.act5Container');
const act5coords = act5Start.getBoundingClientRect();
const act6Start = document.querySelector('.act6Container');
const act6coords = act6Start.getBoundingClientRect();

function removeClasses(){
  body.classList.remove("act1", "act2", "act3", "act4", "act5");
}

function changeBGAct1 (){
  removeClasses();
  body.classList.add("act1");
}

function changeBGAct2 (){
  removeClasses();
  body.classList.add("act2");
}

function changeBGAct3 (){
  removeClasses();
  body.classList.add("act3");
}

function changeBGAct4 (){
  removeClasses();
  body.classList.add("act4");
}

function changeBGAct5 (){
  removeClasses();
  body.classList.add("act5");
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if(last_known_scroll_position < act2coords.top) {
    window.requestAnimationFrame(function() {
      changeBGAct1();
    });
  } else if (last_known_scroll_position < act3coords.top) {
    window.requestAnimationFrame(function() {
      changeBGAct2();
    });
  } else if (last_known_scroll_position < act4coords.top) {
    window.requestAnimationFrame(function() {
      changeBGAct3();
    });
  } else if (last_known_scroll_position < act5coords.top) {
    window.requestAnimationFrame(function() {
      changeBGAct4();
    });
  } else if (last_known_scroll_position < act6coords.top) {
    window.requestAnimationFrame(function() {
      changeBGAct5();
    });
  }
})

// changeBG();
