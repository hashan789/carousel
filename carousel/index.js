
const slides = document.querySelector(".slides-sli");
const images = document.querySelectorAll(".slides-sli img");

let counter = 0;
const size = images[0].clientWidth;

var click1 = document.querySelector("#radio1");
var click2 = document.querySelector("#radio2");
var click3 = document.querySelector("#radio3");

click1.addEventListener("click",() => {

    slides.style.transform = 'translateX(' + (-size * 3) + 'px)';
});

click2.addEventListener("click",() => {

    slides.style.transform = 'translateX(' + (-size * 1) + 'px)';
   // document.querySelector(".first").style.marginLeft = '-1349px';
});

click3.addEventListener("click",() => {

     slides.style.transform = 'translateX(' + (-size * 2) + 'px)';
  //  document.querySelector(".first").style.marginLeft = '-2698px';
});


function changeImg(){

  slides.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';

    slides.addEventListener('transitionend',() => {
      if(images[counter].id ===  'last'){
        slides.style.transition = "none";
        counter = images.length - 2;
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }
     else if(images[counter].id ===  'first'){
        slides.style.transition = "none";
        counter = images.length - counter;
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }
     // console.log(counter);
    });
  
}

setInterval(changeImg, 5000);

window.onload = changeImg;