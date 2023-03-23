const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelector('.slides');
const images = slides.querySelectorAll('img');
const slideshow3 = document.querySelector('.slideshow3');
const slides3 = slideshow3.querySelector('.slides3');
const images3 = slides3.querySelectorAll('img');

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
function play3(){
    let count = 0;
    setInterval(function loop() {
    count += 1;

    if(count === images3.length){
     count = 0;
     }
        slides3.style.transform = `translate3d(${count * -712}px, 0, 0)`;
    } ,3000) 


}

play();
play3();