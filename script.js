const slides=document.querySelectorAll(".slide");
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`;
    }
);

function goPrev(){
    if (counter == 0) {
        counter=slides.length-1;
        slideImage();
    }
    else{
        counter--;
        slideImage();
    }
}
function goNext(){
    if (counter == slides.length-1) {
        counter=0;
        slideImage();
    }
    else{
        counter++;
        slideImage();
    }
        
}
function slideImage(){
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`;
        }
    )
}