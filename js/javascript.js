let btn = document.querySelector("#btn3"),
    img = document.querySelector("#img"),
    modal = document.querySelector(".modal"),
    close = document.querySelector(".close"),
    popup = document.querySelector(".popup");

btn.addEventListener('mouseover', function () {
    btn.classList.add('btn3__hover');
});
btn.addEventListener('mouseout', function () {
    btn.classList.remove('btn3__hover');
    btn.classList.toggle('btn3__hover-cont');
    function removeClass() {
        btn.classList.remove('btn3__hover-cont');
    }
    setTimeout(removeClass, 800);
});

img.addEventListener("click", function () {
    modal.classList.add("modal__activ");
});
close.addEventListener("click", function () {
    modal.classList.remove("modal__activ");
});



