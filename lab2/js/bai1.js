function phuongTrinhBac1(a, b) {
    if (a === 0 && b === 0) {
        return 'Phương trình có vô số nghiệm.';
    } else if (a === 0 && b !== 0) {
        return 'Phương trình vô nghiệm.'
    } else {
        let x = -b / a;
        return x;
    }
}
function phuongTrinhBac2(a, b, c) {

    // nếu a bằng 0 thì sẽ giải phương trình bậc 1.
    if (a === 0) {
        return phuongTrinhBac1(b, c);
    }

    // giải phương trình bậc 2
    var delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
        return 'Phương trình vô nghiệm';
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return [x];
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }
}
var onoff = 0;
var kq_bandau;
function thucThi() {
    var phuongTrinh = document.getElementById('hien_thi_phuong_trinh');
    var ketqua = document.getElementById('hien_thi_ket_qua');
    phuongTrinh.style.color = '';
    alert('Bạn đang giải phương trình bậc 2');
    let a = prompt('Nhập Hệ số a: ');
    if (isNaN(a) || a === null || a === '') {
        error();
        ketqua.innerHTML = '';
        if (onoff === 1) {
            throw new Error('Thao tác không hợp lệ!');
            console.log(Error);
        }
        return;
    }
    let b = prompt('Nhập Hệ Số b: ');
    if (isNaN(b) || b === null || b === '') {
        error();
        ketqua.innerHTML = '';
        if (onoff === 1) {
            throw new Error('Thao tác không hợp lệ!');
            console.log(Error);
        }
        return;
    }
    let c = prompt('Nhập Hệ Số c: ');
    if (isNaN(c) || c === null || c === '') {
        error();
        ketqua.innerHTML = '';
        if (onoff === 1) {
            throw new Error('Thao tác không hợp lệ!');
            console.log(Error);
        }
        return;
    }
    var nghiem = phuongTrinhBac2(parseFloat(a), parseFloat(b), parseFloat(c));
    display_result(a, b, c, nghiem);
    kq_bandau = nghiem;
    if (onoff === 1) {
        see_console(nghiem);
    }
}

function error() {
    var phuongTrinh = document.getElementById('hien_thi_phuong_trinh');
    phuongTrinh.innerHTML = 'Bạn đã thao tác không hợp lệ!';
    phuongTrinh.style.color = 'red';
}

function display_result(a, b, c, result) {
    var phuongTrinh = document.getElementById('hien_thi_phuong_trinh');
    var ketqua = document.getElementById('hien_thi_ket_qua');
    if (a == 0) {
        phuongTrinh.innerHTML = 'Vì a = 0 nên sẽ được chuyển đổi về phương trình bậc 1' +
            `<br> Phương trình: ${b}x + ${c} = 0`;
    } else {
        phuongTrinh.innerHTML = `Phương trình: ${a}x<sup>2</sup> + ${b}x + ${c} = 0`;
    }
    if (typeof result === 'string') {
        ketqua.innerHTML = result;
    } else if (typeof result === 'number') {
        ketqua.innerHTML = 'Phương trình có 1 nghiệm là: ' + result;
    } else if (typeof result === 'object') {
        if (result.length === 1) {
            ketqua.innerHTML = 'Phương trình có nghiệm kép là: ' + result[0];
        } else {
            ketqua.innerHTML = 'Phương trình có 2 nghiệm phân biệt. <br>' +
                'Nghiệm thứ nhất là: ' + result[0] + '<br>Nghiệm thứ 2 là: ' + result[1];
        }
    }

}
function onoff_console() {
    var btn = document.getElementById('see_log');
    if (onoff === 1) {
        onoff = 0;
        btn.style.background = '';
    } else {
        onoff = 1;
        btn.style.background = 'orangered';
        see_console(kq_bandau);
    }

}
function see_console(kq_console) {
    if (typeof kq_console === 'string') {
        console.log(kq_console);
    } else if (typeof kq_console === 'number') {
        console.log('Phương trình có 1 nghiệm là: ', kq_console);
    } else if (typeof kq_console === 'object') {
        if (kq_console.length === 1) {
            console.log('Phương trình có nghiệm kép là: ', kq_console[0]);
        } else {
            console.log('Phương trình có 2 nghiệm phân biệt.');
            console.log('nghiệm thứ nhất là: ', kq_console[0]);
            console.log('nghiệm thứ 2 là: ', kq_console[1]);
        }
    }
}
