const image = [
    'images/Quiz.png',
    'images/To-do.png',
    'images/Memory.png'
];

let count = 0;
function cycleImages(){
    const imageElement = document.getElementById('image');
    console.log(imageElement);
    imageElement.setAttribute('src', image[count]);
    count++;
    if (count >= image.length) {
        count =0;
    }
}