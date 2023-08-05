class Student {
    constructor(id, firstname, lastname, classid, email, phonenumber, dob) {
        this.id = id;
        this.firs_tname = firstname;
        this.last_name = lastname;
        this.class_id = classid;
        this.email = email;
        this.phone_number = phonenumber;
        this.dob = dob;
    }
    getFullName() {
        return this.last_name + ' ' + this.firs_tname;
    }
    getAge() {
        let mangtuoi = [];
        let day = new Date();
        let age = new Date(this.dob);
        let tuoi_year = day.getFullYear() - age.getFullYear();
        let tuoi_day = Math.ceil((day - age) / 86400000);
        mangtuoi.push(tuoi_year);
        mangtuoi.push(tuoi_day);
        return mangtuoi;
    }
}


//

const input = document.querySelectorAll('input');
const thongbao = document.querySelectorAll('p');
const xuatt = document.getElementById('xuatthongtin');
const thanhcong = document.getElementById('thongbaothanhcong');
var danhSachSinhVien = [];


var temp = new Student('PS3000','van','doan duy','11','f','f','2000/2/30');
var temp1 = new Student('PS4000','a','nguyen van','22','f','f','2005/2/30');
var temp2 = new Student('PS5000','b','nguyen van','33','f','f','1995/2/30');
var temp3 = new Student('PS6000','c','nguyen van','44','f','f','2010/2/30');
var temp4 = new Student('PS7000','d','nguyen van','55','f','f','1990/2/30');
danhSachSinhVien.push(temp);
danhSachSinhVien.push(temp1);
danhSachSinhVien.push(temp2);
danhSachSinhVien.push(temp3);
danhSachSinhVien.push(temp4);


function nhap() {
    if (kiemtra()) {
        return;
    }
    let mangngaysinh = input[6].value.split('/');
    let mangngaysinh1 = [mangngaysinh[2], mangngaysinh[1], mangngaysinh[0]];
    let ngaysinh = mangngaysinh1.join('/');
    let temp = new Student(input[0].value, input[1].value, input[2].value, input[3].value, input[4].value, input[5].value, ngaysinh);
    danhSachSinhVien.push(temp);
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
    thanhcong.innerHTML = 'Thêm Sinh Viên thành công.';
    setTimeout(() => { thanhcong.innerHTML = '' }, 1500);
}

function kiemtra() {
    let truefalse = false;
    for (let i = 0; i < thongbao.length; i++) {
        thongbao[i].innerHTML = '';
    }
    for (let i = 0; i < input.length; i++) {
        if (!input[i].checkValidity()) {
            truefalse = true;
            thongbao[i].innerHTML = 'Nhập sai định dạng';
        } else if (input[i].value == '') {
            truefalse = true;
            thongbao[i].innerHTML = 'Vui lòng nhập giá trị';
        }
    }
    return truefalse;
}

function xuatthongtin() {
    if (danhSachSinhVien.length === 0) {
        return;
    }
    danhSachSinhVien.sort(sortSinhVien);
    let temp1 = '';
    for (let i = 0; i < danhSachSinhVien.length; i++) {
        temp1 += `<div>` +
            `Số thứ tự ${i} <br>` +
            `ID sinh viên: ${danhSachSinhVien[i].id} <br>` +
            `Họ tên: ${danhSachSinhVien[i].getFullName()} <br>` +
            `Class ID: ${danhSachSinhVien[i].class_id} <br>` +
            `Email: ${danhSachSinhVien[i].email} <br>` +
            `Số điện thoại: ${danhSachSinhVien[i].phone_number}<br>` +
            `Ngày sinh: ${danhSachSinhVien[i].dob} <br>` +
            `Số năm tuổi: ${danhSachSinhVien[i].getAge()[0]} <br>` +
            `Số ngày tuổi: ${danhSachSinhVien[i].getAge()[1]} ` +
            ` </div> `;
    }
    xuatt.innerHTML = temp1;
}

function sortSinhVien(a, b) {
    let o1 = a.getAge()[1];
    let o2 = b.getAge()[1];
    console.log(typeof o1, 'kiểu o1', o1);
    console.log(typeof o2, 'kiểu o2', o2);
    return o1 > o2 ? 1 : -1;
}

const bom = document.getElementById('bom');
function kichthuoc(){
const rong = window.innerWidth;
const cao = window.innerHeight;
bom.innerHTML = `Chiều rộng: ${rong}, Chiều cao: ${cao}`; 
}
kichthuoc();
window.addEventListener('resize',kichthuoc);


