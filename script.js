 const image = [
     'images'
 ];
//_________________________Option 1____________________________

let count = 0;
function cycleImages(){
    const imageElement = document.getElementById('image');
    console.log(imageElement);
    imageElement.setAttribute('src', image[count]);
    count++;
    if (count >= image.length) {
        count =0;
    }
};

window.onload = function() {
    cycleImages();
};