const intext = document.querySelector('.text');
const slides = document.querySelector('.slides');
const slides_items = document.querySelectorAll('.slides .slide');
const slides_length = slides_items.length;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');
let active = 0;
let onpause = true;
next.onclick = function () {
    slides.style.transition = '1s linear';
    if (active == slides_length - 1) {
        active = 0;
        dot();
        const lastPst = 100 * (slides_length + 1);
        slides.style.transform = `translateX(-${lastPst}%)`;
        intext.innerHTML = `Ảnh ${active + 1} / ${slides_length}`;
        setTimeout(() => {
            slides.style.transition = 'none';
            changeslide();
        }, 1000);
        return; 
    }
    active += 1;
    dot();
    changeslide();
}
prev.onclick = function () {
    slides.style.transition = '1s linear';
    if (active == 0) {
        active = slides_length - 1;
        dot();
        slides.style.transform = `translateX(0)`;
        intext.innerHTML = `Ảnh ${active + 1} / ${slides_length}`;
        setTimeout(() => {
            slides.style.transition = 'none';

            changeslide();
        }, 1000);
        return;
    }
    active -= 1;
    dot();
    changeslide();
}
let autoslide = setInterval(() => { next.click() }, 3000);
function changeslide() {
    let checkImg = slides_items[active].offsetLeft;
    // let checkImgWidth = slides_items[0].offsetWidth;
    // let checkImg = checkImgWidth * active;
    // console.log('vịtri: ', checkImg);
    slides.style.transform = `translateX(-${checkImg}px)`;
    intext.innerHTML = `Ảnh ${active + 1} / ${slides_length}`;
    if (onpause) {
        clearInterval(autoslide);
        autoslide = setInterval(() => { next.click() }, 3000);
    }
}

dots.forEach((span, index) => {
    span.addEventListener('click', () => {
        active = index;
        intext.innerHTML = `Ảnh ${active + 1} / ${slides_length}`;
        dot();
        changeslide();
    });
});

function dot() {
    let dot_active = document.querySelector('.dots span.active');
    dot_active.classList.remove('active');
    dots[active].classList.add('active');
}
// bổ sung thêm nút pause

const pause = document.querySelector('.pause');
const continue1 = document.querySelector('.continue');
const div_btn = document.querySelectorAll('.btn_div');
pause.onclick = () => {
    div_btn[0].style.display = 'none';
    div_btn[1].style.display = 'block';
    clearInterval(autoslide);
    onpause = false;
}
continue1.onclick = () => {
    div_btn[0].style.display = 'block';
    div_btn[1].style.display = 'none';
    autoslide = setInterval(() => { next.click() }, 3000);
    onpause = true;
}



// Test.classList.toggle();
// DataTransfer.getdata , 