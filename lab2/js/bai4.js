var display = document.getElementById('display');
var button = document.getElementById('button');
var p_display = document.getElementById('p_display');
var giatriphantu = document.getElementById('giatriphantu');
var vitriphantu = document.getElementById('nhapindex');
var mangcodinh = ['Tue','Thu','Sat','Nine'];
p_display.innerHTML = `Mảng được cho sẵn Array = [${mangcodinh}];`;
console.log('Mảng được cho sẵn:',mangcodinh);

function themphantudaumang(){
    if(giatriphantu.value === ''){
        var them = document.getElementById('giatriphantu');
        them.classList.add('rung');
        setTimeout(()=>{them.classList.remove('rung')},500);
        return;
    }
    mangcodinh.unshift(giatriphantu.value);
   // p_display.style.textAlign = 'left';
    p_display.innerHTML = `Mảng sau khi được thay đổi Array = [${mangcodinh}];`;
    giatriphantu.value = '';
    console.log('Mảng sau khi được thay đổi Array:',mangcodinh);
}

function themphantucuoimang(){
    if(giatriphantu.value === ''){
        var them = document.getElementById('giatriphantu');
        them.classList.add('rung');
        setTimeout(()=>{them.classList.remove('rung')},500);
        return;
    }
    mangcodinh.push(giatriphantu.value);
    p_display.innerHTML = `Mảng sau khi được thay đổi Array = [${mangcodinh}];`;
    giatriphantu.value = '';
    console.log('Mảng sau khi được thay đổi Array:',mangcodinh);
}

function xoaphantudaumang(){
 //   p_display.style.textAlign = '';
    if(mangcodinh.length === 0){
        var them = document.getElementById('xoadau');
        them.classList.add('rung');
        setTimeout(()=>{them.classList.remove('rung')},500);
        return;
    }
    mangcodinh.shift(giatriphantu.value);
    p_display.innerHTML = `Mảng sau khi được thay đổi Array = [${mangcodinh}];`;
    giatriphantu.value = '';
    console.log('Mảng sau khi được thay đổi Array:',mangcodinh);
}

function xoaphantucuoimang(){
 //   p_display.style.textAlign = '';
    if(mangcodinh.length === 0){
        var them = document.getElementById('xoacuoi');
        them.classList.add('rung');
        setTimeout(()=>{them.classList.remove('rung')},500);
        return;
    }
    mangcodinh.pop(giatriphantu.value);
    p_display.innerHTML = `Mảng sau khi được thay đổi Array = [${mangcodinh}];`;
    giatriphantu.value = '';
    console.log('Mảng sau khi được thay đổi Array:',mangcodinh);
}

function themtheoindex(){
    if(giatriphantu.value === '' || isNaN(vitriphantu.value)){
        if(giatriphantu.value === ''){
            var them = document.getElementById('giatriphantu');
            them.classList.add('rung');
            setTimeout(()=>{them.classList.remove('rung')},500);
        }
        if(isNaN(vitriphantu.value) || vitriphantu.value === ''){
            var them1 = document.getElementById('nhapindex');
            them1.classList.add('rung');
            setTimeout(()=>{them1.classList.remove('rung')},500);
        }
        return;
    }
    var vitri = parseInt(vitriphantu.value);
    vitri-=1;
    if(vitri<0){
        vitri = 0;
    }else if(vitri > mangcodinh.length ){
        vitri = mangcodinh.length;
    }
    
    mangcodinh.splice(vitri,0,giatriphantu.value);
//    p_display.style.textAlign = 'left';
    p_display.innerHTML = `Mảng sau khi được thay đổi Array = [${mangcodinh}];`;
    giatriphantu.value = '';
    vitriphantu.value = '';
    console.log('Mảng sau khi được thay đổi Array:',mangcodinh);
}


function xoatheoindex(){
    if(isNaN(vitriphantu.value) || vitriphantu.value === ''){
        var them1 = document.getElementById('nhapindex');
        them1.classList.add('rung');
        setTimeout(()=>{them1.classList.remove('rung')},500);
       return; 
    }
    var vitri = parseInt(vitriphantu.value);
    vitri-=1;
  //  console.log(vitri);
    if(vitri<0){
        vitri = 0;
    }else if(vitri >= mangcodinh.length ){
        vitri = mangcodinh.length;
        vitri-=1;
     //   console.log('vi tri trong if',vitri);
    }
    if(giatriphantu.value !== ''){
        mangcodinh.splice(vitri,1,giatriphantu.value); 
    }else{
        mangcodinh.splice(vitri,1); 
    }
    
 //   p_display.style.textAlign = 'left';
    p_display.innerHTML = `Mảng sau khi được thay đổi Array = [${mangcodinh}];`;
    giatriphantu.value = '';
    vitriphantu.value = '';
    console.log('Mảng sau khi được thay đổi Array:',mangcodinh);
}
