const body = document.querySelector('body');
const act2Start = document.querySelector('.act2Container');
// get coordinates of act2Container
const act2coords = act2Start.getBoundingClientRect();
const act3Start = document.querySelector('.act3Container');
const act3coords = act3Start.getBoundingClientRect();
const act4Start = document.querySelector('.act4Container');
const act4coords = act4Start.getBoundingClientRect();
const act5Start = document.querySelector('.act5Container');
const act5coords = act5Start.getBoundingClientRect();
const act6Start = document.querySelector('.act6Container');
const act6coords = act6Start.getBoundingClientRect();
let last_known_scroll_position = 0;

// remove all background color styling
function removeClasses(){
  body.classList.remove("act1", "act2", "act3", "act4", "act5");
}

// run removeClasses, and then add the act1 class
function changeBGAct1 (){
  removeClasses();
  body.classList.add("act1");
}

// run removeClasses, and then add the act2 class
function changeBGAct2 (){
  removeClasses();
  body.classList.add("act2");
}

// run removeClasses, and then add the act3 class
function changeBGAct3 (){
  removeClasses();
  body.classList.add("act3");
}

// run removeClasses, and then add the act4 class
function changeBGAct4 (){
  removeClasses();
  body.classList.add("act4");
}

// run removeClasses, and then add the act5 class
function changeBGAct5 (){
  removeClasses();
  body.classList.add("act5");
}

// listen for scroll event
window.addEventListener('scroll', function(e) {
  // set variable to the y coordinate of the top edge of the viewport
  last_known_scroll_position = window.scrollY;

  // if last_known_scroll_position is less than the position of the top of the act2 div,
  if(last_known_scroll_position < act2coords.top) {
    window.requestAnimationFrame(function() {
      // run changeBGAct1
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
