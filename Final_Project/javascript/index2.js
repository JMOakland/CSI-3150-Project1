const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelector('.slides');
const images = slides.querySelectorAll('img');
function play(){
    let count = 0;
    /** Will run my code in 3 second intervals infinitely */
    setInterval(function loop() {
    count += 1;

    if(count === images.length){
     count = 0;
     
     }
        slides.style.transform = `translate3d(${count * -705}px, 0, 0)`;
    } ,6000) 
    
    /**if (images[count].id === 'lastSlide'){
        
    }*/

}
play();