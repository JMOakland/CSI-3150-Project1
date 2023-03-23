const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelector('.slides');
const images = slides.querySelectorAll('img');
const slideshow2 = document.querySelector('.slideshow2');
const slides2 = slideshow2.querySelector('.slides2');
const images2 = slides2.querySelectorAll('img');

function play(){
    let count = 0;
    setInterval(function loop() {
    count += 1;

    if(count === images.length){
     count = 0;
     }
        slides.style.transform = `translate3d(${count * -705}px, 0, 0)`;
    } ,3000) 


}
function play2(){
    let count = 0;
    setInterval(function loop() {
    count += 1;

    if(count === images2.length){
     count = 0;
     }
        slides2.style.transform = `translate3d(${count * -705}px, 0, 0)`;
    } ,3000) 


}

play();
play2();

