const title = document.querySelector('.title');
let items = document.querySelectorAll('.title span');
const boxs = document.querySelectorAll('section .box');
let temp;
let boxtemp;
let del = true;
boxs.forEach(box => {
    box.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    box.addEventListener('drop', function (e) {
        del = false;
        if (this !== boxtemp) {
            if (temp) {
                box.appendChild(temp);
            } else {
                const idthamchieu = e.dataTransfer.getData('ff');
                if (idthamchieu) {
                    const phantu = document.getElementById(idthamchieu);
                    const bansao = phantu.cloneNode(true);
                    box.appendChild(bansao);
                }
            }
        }
        temp = undefined;
        reloadspan();
    });
});

items.forEach(span => {
    span.setAttribute('draggable', true);
    span.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('ff', this.id);
        temp = undefined;
        boxtemp = undefined;
    });
});

function reloadspan() {
    boxs.forEach(box => {
        let span = box.querySelectorAll('span');
        span.forEach(data => {
            data.addEventListener('dragstart', function () {
                temp = this;
                boxtemp = this.parentElement;
                del = true;
            });
            data.addEventListener('dragend', () => {
                if (del) {
                    temp.remove();
                }
            });
        });
    });
}