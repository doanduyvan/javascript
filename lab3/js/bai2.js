var in_ketqua = document.getElementById('ketqua');
const maytinh = document.getElementById('maytinh');
var mangtinhtoan = [];

function batsukien(event) {
  let buttonElement = event.target;
  let valueButton = buttonElement.textContent;
  if (buttonElement.tagName !== 'BUTTON') {
    return;
  }
    
  if (valueButton === '=') {    // khi người dùng bấm dấu =
    if (mangtinhtoan.length === 0) {
        return;
    } else if (mangtinhtoan.length === 1) {
      in_ketqua.innerHTML = mangtinhtoan.join(''); 
      return;
    } else if (mangtinhtoan.length === 2) {
      mangtinhtoan.pop();
      in_ketqua.innerHTML = mangtinhtoan.join('');
       return;
    } 
    
    if (mangtinhtoan.length % 2 == 0) {
      mangtinhtoan.pop();
    }
    let temp1 = hangdoi(mangtinhtoan);   // gọi hàm tính toán ra tính
    if (temp1 == 0) {
      mangtinhtoan = [];
      in_ketqua.innerHTML = '0';
    } else if (temp1 == 'Infinity' || !temp1 || temp1 == '-Infinity' ) {
      mangtinhtoan = [];
      in_ketqua.innerHTML = '<span style="font-size:30px; color:red;">Không thể chia cho 0</span>';
    } else {
      let temp2 = temp1.toString();
      mangtinhtoan = [];
      mangtinhtoan.push(temp2);
      in_ketqua.innerHTML = temp1;
    }
  } else if (valueButton === 'C') {    // khi người dùng bấm C để xóa
    mangtinhtoan = [];
    in_ketqua.innerText = '0';
    return;
  } else if (!/\d/.test(valueButton)) {     // khi người dùng nhập toán tử
    if (mangtinhtoan.length === 0) {
      mangtinhtoan.push('0');
      mangtinhtoan.push(valueButton);
      in_ketqua.innerHTML = mangtinhtoan.join(' ');
    } else if (mangtinhtoan.length % 2 == 0) {
      mangtinhtoan.pop();
      mangtinhtoan.push(valueButton);
      in_ketqua.innerHTML = mangtinhtoan.join(' ');
    } else {
      mangtinhtoan.push(valueButton);
      in_ketqua.innerHTML = mangtinhtoan.join(' ');
    }
  } else {    // khi người dùng nhập số
    if (mangtinhtoan.length === 0) {
      mangtinhtoan.push(valueButton);
      in_ketqua.innerHTML = mangtinhtoan.join(' ');
    } else if (mangtinhtoan.length % 2 == 0) {
      mangtinhtoan.push(valueButton);
      in_ketqua.innerHTML = mangtinhtoan.join(' ');
    } else {
      let congchuoi = mangtinhtoan.pop();
      congchuoi += valueButton;
      mangtinhtoan.push(congchuoi);
      in_ketqua.innerHTML = mangtinhtoan.join(' ');
    }
  }
  console.log(mangtinhtoan);
}

maytinh.addEventListener('click', batsukien);

//

function hangdoi(expression) {
  const operators = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
  };

  const outputQueue = []; 
  const operatorStack = [];

  for (let i = 0; i < expression.length; i++) {
    const token = expression[i];

    if (operators.hasOwnProperty(token)) {
      while (
        operatorStack.length > 0 &&
        operators[token] <= operators[operatorStack[operatorStack.length - 1]]
      ) {
        console.log('i la',i);
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else {
      outputQueue.push(token);
    }
  }
  console.log('outputQueue', outputQueue);
  console.log('operatorStack',operatorStack);
  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop());
  }
  return tinhtoan(outputQueue);
}



function tinhtoan(expression) {
  console.log('day la', expression);

  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const token = expression[i];

    if (token.match(/\d+/)) {
      stack.push(parseFloat(token));
      console.log('212', stack, ' i=', i);
    } else {
      const b = stack.pop();
      const a = stack.pop();
      console.log('token', token)
      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break; 
      }
    }
  }

  return stack.pop();
}

var n = ['3', '-', '3', '*', '1', '*', '2','/','5']
console.log('n = ',n)
var m = hangdoi(n);
console.log(m);


