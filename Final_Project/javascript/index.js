const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelector('.slides');
 const images = slides.querySelectorAll('img');

function play(){
    let count = 0;
    setInterval(function loop() {
    count += 1;

    if(count === images.length){
        count = 0;
    }
    slides.style.transform = `translate3d(${count * 1720}px, 0, 0)`;
   } ,3000) 

    
}

play();