let _img = document.querySelector('.image')

_img.addEventListener('mousemove', function (e) {

    let width = _img.offsetWidth;
    let height = _img.offsetHeight;
    let mousex = e.offsetX;
    let mousey = e.offsetY;
    // console.log(mousex+ ':'+ mousey)
    // console.log(width+ ':'+ height)

    let posx = (mousex / width * 100)
    let posy = (mousey / height * 100)

    _img.style.backgroundPosition = `${posx}% ${posy}%`;

})

_img.addEventListener('mouseleave', function () {
    _img.style.backgroundPosition = "center";
})