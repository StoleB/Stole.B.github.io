let currdeg=0;
document.querySelector('.next').addEventListener('click', rotate);
document.querySelector('.prev').addEventListener('click', rotate);

function rotate(e) {
    if (e.target.className =='next') {
        currdeg = currdeg -60;
    }
    if (e.target.className =='prev') {
        currdeg = currdeg +60;
    }
    document.querySelector('.items').style.transform='rotateY('+currdeg + 'deg)';
}

function navigateTo(url) {
    window.location.href = url;
}
