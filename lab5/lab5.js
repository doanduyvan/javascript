
const tentask = document.getElementById('tentask');
const mota = document.getElementById('mota');
const thongbao = document.getElementsByClassName('thongbao');
const btn1 = document.getElementById('add');
const khung1_button = document.getElementById('khung1_button');
let taskandmota = [];
let sukien = false;
var STT = [];

function addtask() {
  STT = document.querySelectorAll('.display div');
  let demo = document.createElement('div');
  let display = document.getElementById('display');
  display.appendChild(demo);

  let spanstt = document.createElement('span');
  spanstt.innerText = STT.length + 1;
  let spanvalue = document.createElement('span');
  spanvalue.innerText = tentask.value;
  let spanmota = document.createElement('span');
  spanmota.innerText = mota.value;
  let btndel = document.createElement('button');
  btndel.innerText = 'Delete';
  let btnedit = document.createElement('button');
  btnedit.innerText = 'Edit';
  
  demo.appendChild(spanstt);
  demo.appendChild(spanvalue);
  demo.appendChild(spanmota);
  demo.appendChild(btndel);
  demo.appendChild(btnedit);

  btndel.addEventListener('click',deletetask);
  btnedit.addEventListener('click',edittask);

  tentask.value = '';
  mota.value = '';
  if (sukien) {
    khung1_button.addEventListener('mousemove', move);
    sukien = false;
  }
  taskandmota[0] = false;
  taskandmota[1] = false;
}

function deletetask(e) {
  let temp1 = e.target;
  let temp = temp1.parentElement;
  temp.remove();
  STT = document.querySelectorAll('.display div');
  for (let i = 0; i < STT.length; i++) {
    let temp1 = STT[i].querySelectorAll('span');
    temp1[0].innerHTML = i + 1;
  }
}

const gallery = document.querySelector('.gallery');
function edittask(e) {
  let giatri = e.target;
  gallery.style.display = 'flex';
  let tentask_edit = document.getElementById('tentask_edit');
  let mota_edit = document.getElementById('mota_edit');
  let temp = giatri.parentElement;
  let task_old = temp.querySelector('span:nth-child(2)');
  let mota_old = temp.querySelector('span:nth-child(3)');
  tentask_edit.value = task_old.textContent;
  mota_edit.value = mota_old.textContent;
  const add_edit = document.getElementById('add_edit');
  add_edit.addEventListener('click', () => {
    task_old.textContent = tentask_edit.value;
    mota_old.textContent = mota_edit.value;
    gallery.style.display = 'none';
  })
}
let close1 = document.getElementById('close');
close1.addEventListener('click', () => {
  gallery.style.display = 'none';
});

function kiemtra(taskandmota) {
  if (taskandmota[0] === true && taskandmota[1] === true) {
    khung1_button.removeEventListener('mousemove', move);
    sukien = true;
  } else {
    if (sukien) {
      khung1_button.addEventListener('mousemove', move);
      sukien = false;
    }
  }
}

tentask.addEventListener('input', (e) => {
  let giatri = e.target.value;
  if (giatri.length > 5) {
    thongbao[0].innerHTML = '';
    taskandmota[0] = true;
    kiemtra(taskandmota);
    return;
  } else if (giatri == '') {
    thongbao[0].innerHTML = '';
  }
  else {
    thongbao[0].innerHTML = 'Vui lòng nhập lớn hơn 5 kí tự!';
  }
  taskandmota[0] = false;
 kiemtra(taskandmota);
});
mota.addEventListener('input', (e) => {
  let giatri = e.target.value;
  if (giatri.length > 20) {
    thongbao[1].innerHTML = '';
    taskandmota[1] = true;
    kiemtra(taskandmota);
    return;
  } else if (giatri == '') {
    thongbao[1].innerHTML = '';
  }
  else {
    thongbao[1].innerHTML = 'Vui lòng nhập lớn hơn 20 kí tự!';
  }
  taskandmota[1] = false;
  kiemtra(taskandmota);
});

khung1_button.addEventListener('mouseleave', (e) => {
  btn1.classList.remove('add_right');
  btn1.classList.remove('add_left');
});

function move(e) {
  const dx = e.clientX;
  let xleft = khung1_button.offsetLeft;
  let xright = xleft + khung1_button.offsetWidth;
  let xcenter = (xleft + xright) / 2;
  if (dx > xcenter) {
    btn1.classList.add('add_left');
    btn1.classList.remove('add_right');
  } else {
    btn1.classList.remove('add_left');
    btn1.classList.add('add_right');
  }
}

khung1_button.addEventListener('mousemove', move);




