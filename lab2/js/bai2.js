var xacnhan = false;
    let input1 = false;
    let input2 = false;
    let input3 = false;
    var onoff1 = 0;
function kiemTraNhapLieu(index,data){
    var canh = document.getElementsByClassName('canh');
    var img = document.getElementsByClassName('img');
    
    if(data === ''){
      //  console.log(index,'khong có j')
       if(index==0){
        img[0].style.display = 'none';
        img[1].style.display = 'none';
        input1 = false;
       }else if(index==1){
        img[2].style.display = 'none';
        img[3].style.display = 'none';
        input2 = false;
       }else{
        img[4].style.display = 'none';
        img[5].style.display = 'none';
        input3 = false;
       }
       canh[index].classList.remove('rung');
       canh[index].style.border = '1px solid black';
       
    }else if(isNaN(data)){
    //    console.log(index,'day là text')
        if(index==0){
            img[0].style.display = 'block';
            img[1].style.display = 'none';
            input1 = false;
           }else if(index==1){
            img[2].style.display = 'block';
            img[3].style.display = 'none';
            input2 = false;
           }else{
            img[4].style.display = 'block';
            img[5].style.display = 'none';
            input3 = false;
           }
           canh[index].classList.add('rung');
           canh[index].style.border = '1px solid red';
    }
    else{
     //   console.log(index,'day la so')
        if(index==0){
            img[0].style.display = 'none';
            img[1].style.display = 'block';
            input1 = true;
           }else if(index==1){
            img[2].style.display = 'none';
            img[3].style.display = 'block';
            input2 = true;
           }else{
            img[4].style.display = 'none';
            img[5].style.display = 'block';
            input3 = true;
           }
           canh[index].classList.remove('rung');
           canh[index].style.border = '1px solid black';
    }
    if(input1===true && input2===true && input3===true){
        xacnhan = true;
    }else{
        xacnhan = false;
    }
}

var canh1 = document.getElementById('canh1');
var canh2 = document.getElementById('canh2');
var canh3 = document.getElementById('canh3');
//var giatri1 = canh1.value;
canh1.addEventListener('input',()=>{kiemTraNhapLieu(0,canh1.value)});
canh2.addEventListener('input',()=>{kiemTraNhapLieu(1,canh2.value)});
canh3.addEventListener('input',()=>{kiemTraNhapLieu(2,canh3.value)});

function tamgiac(a,b,c){
    if(a+b<c || b+c<a || a+c<b){
        // day không phai hinh tam giac
        return 'Đây không phải là 1 hình tam giác';
    }
    if(a===b && b===c){
        // tam giác đều 
        return 'Đây là tam giác đều có 3 cạnh bằng nhau';
    }else if(a===b || b===c || a ===c){
        if(a**2+b**2===c**2 || b**2+c**2===a**2 || a**2+c**2===b**2){
            // day la tam giac can vuong.
            return 'Đây là hình tam giác cân vuông';
        }else{
            // day la tam giac can nhưng không vuong
            return 'Đây là hình tam giác cân nhưng không vuông';
        }
    }else if(a**2+b**2===c**2 || b**2+c**2===a**2 || a**2+c**2===b**2){
        // day la tam giac vuông nhưng không cân
        return 'Đây là hình tam giác vuông nhưng không cân';
    }else{
        // day la tam giac thường
        return 'Đây là tam giác thường';
    }
}

function thucThiInPut(){
    var ketqua = document.getElementById('display_ketqua');
    ketqua.style.display = 'none';
    var input = document.getElementById('input');
    input.style.display = 'flex';
    canh1.value = '';
    canh2.value = '';
    canh3.value = '';
    var img = document.getElementsByClassName('img');
    for(let i =0;i<img.length;i++){
        img[i].style.display = 'none';
    }
    xacnhan = false;
    input1 = false;
    input2 = false;
    input3 = false;
}


function kiemtra(){
    if(!xacnhan){
        var kiemtra = document.getElementById('kiemtra');
        kiemtra.classList.add('rung');
        setTimeout(()=>{kiemtra.classList.remove('rung');},500);
        return false;
    }
    var input = document.getElementById('input');
    input.style.display = 'none';
    var ketqua = document.getElementById('display_ketqua');
    ketqua.style.display = 'block';
    var cauhoi = document.getElementById('p_ketqua');
    var ketqua1 = tamgiac(parseFloat(canh1.value),parseFloat(canh2.value),parseFloat(canh3.value)); 
    cauhoi.innerHTML = `Cạnh a = ${canh1.value} | Cạnh b = ${canh2.value} | Cạnh c = ${canh3.value}`+
    `<br> ${ketqua1}`;
    if(onoff1===1){
        console.log(`Cạnh a = ${canh1.value} | Cạnh b = ${canh2.value} | Cạnh c = ${canh3.value}`);
        see_console(ketqua1);
    }
}

function cuasoprompt(){
    var input = document.getElementById('input');
    input.style.display = 'none';
    var ketqua = document.getElementById('display_ketqua');
    ketqua.style.display = 'block';
    var thongbao = document.getElementById('p_ketqua');
    thongbao.innerHTML = '';
    thongbao.style.color = '';
    alert('Nhập 3 cạnh của tam giác');
    var canha = prompt('Nhập cạnh a');
    if(isNaN(canha) || canha === '' || canha === null ){
        thongbao.innerHTML = 'Bạn đã thao tác không hợp lệ!';
        thongbao.style.color = 'red';
        return;
    }
    var canhb = prompt('Nhập cạnh b');
    if(isNaN(canhb) || canhb === '' || canhb === null ){
        thongbao.innerHTML = 'Bạn đã thao tác không hợp lệ!';
        thongbao.style.color = 'red';
        return;
    }
    var canhc = prompt('Nhập cạnh c');
    if(isNaN(canhc) || canhc === '' || canhc === null ){
        thongbao.innerHTML = 'Bạn đã thao tác không hợp lệ!';
        thongbao.style.color = 'red';
        return;
    }
    var ketqua1 = tamgiac(parseFloat(canha),parseFloat(canhb),parseFloat(canhc));
    thongbao.innerHTML = `Cạnh a = ${canha} | Cạnh b = ${canhb} | Cạnh c = ${canhc}`+
    `<br> ${ketqua1}`;
    if(onoff1===1){
        console.log(`Cạnh a = ${canha} | Cạnh b = ${canhb} | Cạnh c = ${canhc}`);
        see_console(ketqua1);
    }
}

function see_console(ketqua){
    console.log(ketqua);
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