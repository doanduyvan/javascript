let hoten = document.getElementById('hoten');
let input = document.getElementById('input');
let display_ketqua = document.getElementById('display_ketqua');
let p_ketqua = document.getElementById('p_ketqua');
let p_ketqua1 = document.getElementById('p_ketqua1');
let gioitinh = document.getElementById('gioitinh');
var onoff1 = 0;
function kiemtra() {
    p_ketqua.style.color = '';
    let hoten1 = hoten.value;
    let manghoten = hoten1.trim().split(' ');
    if (manghoten.length < 2 || /\d/.test(hoten1)) {
        var rung = document.getElementById('kiemtra');
        rung.classList.add('rung');
        setTimeout(() => { rung.classList.remove('rung') }, 500);
        return;
    }
    inKetQua(hoten1,gioitinh.value);
}

function inKetQua(hoten1,gioitinh1) {
    input.style.display = 'none';
    display_ketqua.style.display = 'block';
    var manghoten = hoten1.trim().split(' ');
    let ho1 = manghoten[0];
    let ten1 = manghoten[manghoten.length - 1];
    let ho = ho1.charAt(0).toUpperCase() + ho1.slice(1);
    let ten = ten1.charAt(0).toUpperCase() + ten1.slice(1);
    let tendem;
    if (manghoten.length > 2) {
        var tendem1 = hoten1.substring(hoten1.indexOf(" ") + 1, hoten1.lastIndexOf(" "));
        var mangtendem = tendem1.split(' ');
        var mangInhoa = [];
        for (let i = 0; i < mangtendem.length; i++) {
            var temp = mangtendem[i].charAt(0).toUpperCase() + mangtendem[i].slice(1);
            mangInhoa.push(temp);
        }
        tendem = mangInhoa.join(' ');
        p_ketqua.innerHTML = `Họ của nạn nhân: ${ho}` +
            `<br>Tên đệm của nạn nhân: ${tendem}` +
            `<br>Tên của nạn nhân: ${ten}` +
            `<br>Giới tính của nạn nhân: ` + (gioitinh1 === 'nam' ? 'Nam' : 'Nữ');
    } else {
        p_ketqua.innerHTML = `Họ của nạn nhân: ${ho}` +
            `<br>Tên của nạn nhân: ${ten}` +
            `<br>Giới tính của nạn nhân: ` + (gioitinh1 === 'nam' ? 'Nam' : 'Nữ');
    }
    if (gioitinh1 === 'nam') {
        p_ketqua1.innerHTML = `Tên mới của nạn nhân là: ${ho} Văn ${ten}`;
    } else {
        p_ketqua1.innerHTML = `Tên mới của nạn nhân là: ${ho} Vẽ ${ten}`;
    }
    if(onoff1 === 0) {return}
    console.log(`Họ của nạn nhân: ${ho}`);
    if (manghoten.length > 2){console.log(`Tên đệm của nạn nhân: ${tendem}`)}
    console.log(`Tên của nạn nhân: ${ten}`);
    if (gioitinh1 === 'nam') {
        console.log(`Tên mới của nạn nhân là: ${ho} Văn ${ten}`);
    } else {
        console.log(`Tên mới của nạn nhân là: ${ho} Vẽ ${ten}`);
    }
}

hoten.addEventListener('input', () => {
    let hoten1 = hoten.value;
    let img1 = document.getElementsByClassName('img');
    let mangHoten = hoten1.trim().split(' ');
    //   console.log(mangHoten.length);
    if (hoten1 === '') {
        img1[0].style.display = 'none';
        img1[1].style.display = 'none';
    }
    else if (mangHoten.length < 2 || /\d/.test(hoten1)) {
        // console.log('vui long nhap ho ten')
        img1[0].style.display = 'block';
        img1[1].style.display = 'none';
    } else {
        // console.log('ban da nhap dung')
        img1[0].style.display = 'none';
        img1[1].style.display = 'block';
    }
});

function thucThiInPut(){
    display_ketqua.style.display = 'none';
    input.style.display = 'flex';
    hoten.value = '';
    let img1 = document.getElementsByClassName('img');
    img1[0].style.display = 'none';
    img1[1].style.display = 'none';
}

function cuasoprompt(){
    p_ketqua1.innerHTML = '';
    display_ketqua.style.display = 'block';
    input.style.display = 'none';
    var hoten = prompt('Nhập Họ tên');
    if(hoten==='' || hoten === null){
        p_ketqua.innerHTML = 'Bạn đã hủy thao tác!';
        p_ketqua.style.color = 'red';
        if(onoff1===1){
            console.log('Bạn đã hủy thao tác!');
        }
        return;
    }
    if(/\d/.test(hoten)){
        p_ketqua.innerHTML = 'Vui lòng không nhập số vào tên!';
        p_ketqua.style.color = 'red';
        if(onoff1===1){
            console.log('Vui lòng không nhập số vào tên!');
        }
        return;
    }
    var hoten2 = hoten.trim().split(' ');
    if(hoten2.length<2){
        p_ketqua.innerHTML = 'Vui lòng nhập đúng họ tên!';
        p_ketqua.style.color = 'red';
        if(onoff1===1){
            console.log('Vui lòng nhập đúng họ tên!');
        }
        return;
    }
    var gioitinh5 = prompt('Nhập giới tính: nam/nu, vui lòng viết không có dấu');
    if(gioitinh5===null || gioitinh5 === ''){
        p_ketqua.innerHTML = 'Không xác định được giới tính';
        p_ketqua.style.color = 'red';
        if(onoff1===1){
            console.log('Không xác định được giới tính');
        }
        return;
    }
    var temp = gioitinh5.trim().toLowerCase();
    if(!(temp==='nam'||temp==='nu')){
        p_ketqua.innerHTML = 'Không xác định được giới tính';
        p_ketqua.style.color = 'red';
        if(onoff1===1){
            console.log('Không xác định được giới tính');
        }
        return;
    }
    p_ketqua.style.color = '';
    inKetQua(hoten,temp);
}

function onoff(){
    var seelog = document.getElementById('seelog');
    if(onoff1===1){
        onoff1 = 0;
        seelog.style.background = '';
    }else{
        onoff1 = 1;
        seelog.style.background = 'orangered';
    }
}

function kiemtraso(so){
var k = /\d/.test(t);
console.log(k);
}
