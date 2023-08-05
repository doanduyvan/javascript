var toan = document.getElementById('toan');
var ly = document.getElementById('ly');
var hoa = document.getElementById('hoa');
var sinh = document.getElementById('sinh');
const thongbao = document.getElementsByClassName('thongbao');
const menu = document.getElementById('menu');
const ketqua = document.getElementById('ketqua');
const in_ketqua = document.getElementById('in_ketqua');
var onoff = 0;
function kiemtra() {
    for (let i = 0; i < thongbao.length; i++) {
        thongbao[i].innerHTML = '';
    }
    if (kiemtradieukien(toan.value) || kiemtradieukien(ly.value) || kiemtradieukien(hoa.value) || kiemtradieukien(sinh.value)) {

        if (kiemtradieukien(toan.value)) {
            toan.classList.add('rung');
            setTimeout(() => { toan.classList.remove('rung') }, 500);
            if (toan.value === '') {
                thongbao[0].innerHTML = 'Vui lòng nhập giá trị';
            } else {
                thongbao[0].innerHTML = 'Nhập sai, nhập lại!';
            }
        }
        if (kiemtradieukien(ly.value)) {
            ly.classList.add('rung');
            setTimeout(() => { ly.classList.remove('rung') }, 500);
            if (ly.value === '') {
                thongbao[1].innerHTML = 'Vui lòng nhập giá trị';
            } else {
                thongbao[1].innerHTML = 'Nhập sai, nhập lại!';
            }
        }
        if (kiemtradieukien(hoa.value)) {
            hoa.classList.add('rung');
            setTimeout(() => { hoa.classList.remove('rung') }, 500);
            if (hoa.value === '') {
                thongbao[2].innerHTML = 'Vui lòng nhập giá trị';
            } else {
                thongbao[2].innerHTML = 'Nhập sai, nhập lại!';
            }
        }
        if (kiemtradieukien(sinh.value)) {
            sinh.classList.add('rung');
            setTimeout(() => { sinh.classList.remove('rung') }, 500);
            if (sinh.value === '') {
                thongbao[3].innerHTML = 'Vui lòng nhập giá trị';
            } else {
                thongbao[3].innerHTML = 'Nhập sai, nhập lại!';
            }
        }
        return;
    }
    for (let i = 0; i < thongbao.length; i++) {
        thongbao[i].innerHTML = '';
    }
    menu.style.display = 'none';
    ketqua.style.display = 'block';
    if(onoff === 0){
        let temp = avgif(parseFloat(toan.value), parseFloat(ly.value), parseFloat(hoa.value), parseFloat(sinh.value));
        in_ketqua.innerHTML = `Code bằng lệnh if else <br>` +
        `Điểm trung bình: ${temp[0]} <br>` +
        `Học lực: ${temp[1]}`;
    }else{
        let temp = avgswitch(parseFloat(toan.value), parseFloat(ly.value), parseFloat(hoa.value), parseFloat(sinh.value));
        in_ketqua.innerHTML = `Code bằng lệnh Switch case <br>` +
        `Điểm trung bình: ${temp[0]} <br>` +
        `Học lực: ${temp[1]}`;
    } 
    toan.value = '';
    ly.value = ''; 
    hoa.value = '';
    sinh.value = '';

}

function kiemtradieukien(monhoc) {
    if (isNaN(monhoc)) {
        return true;
    }
    if (monhoc == '') {
        return true;
    }
    let monhoc1 = parseFloat(monhoc);
    if (monhoc1 >= 0 && monhoc1 <= 10) {
        return false
    }
    return true;

}

// dùng if else
function avgif(toan1, ly1, hoa1, sinh1) {
    let total = (toan1 + ly1 + hoa1 + sinh1) / 4;
    var trave = [];
    trave[0] = total;
    if (total >= 9) {
        trave.push('Giỏi');
    } else if (total >= 7) {
        trave.push('Khá');
    } else if (total >= 5) {
        trave.push('Trung Bình');
    } else {
        trave.push('Yếu');
    }
    return trave;
}
// dùng switch
function avgswitch(toan1, ly1, hoa1, sinh1) {
    let total = (toan1 + ly1 + hoa1 + sinh1) / 4;
    var trave = [];
    trave[0] = total;
    switch (true) {
        case total >= 9:
            trave.push('Giỏi');
            break;
        case total >= 7:
            trave.push('Khá');
            break;
        case total >= 5:
            trave.push('Trung Bình');
            break;
        default:
            trave.push('Yếu');
    }
    return trave;
}

function nhaplai() {
    menu.style.display = 'block';
    ketqua.style.display = 'none';
}

let buttonif = document.getElementById('nhapif');
let buttonswich = document.getElementById('nhapswitch')
function nhapif() {
    onoff = 1;
    buttonif.style.display = 'none';
    buttonswich.style.display = 'inline-block';
}
function nhapswitch() {
    onoff = 0;
    buttonif.style.display = 'inline-block';
    buttonswich.style.display = 'none';
}