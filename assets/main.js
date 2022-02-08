//debugger
const num1Input = document.getElementById('num1'),
      num2Input = document.getElementById('num2'),
      totalIntup = document.getElementById('total');

let total;

const addition = () => {
    let total = Number(num1Input.value) + Number(num2Input.value);
    document.getElementById('total_error').style.display = 'none';
    totalIntup.value = total;
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}

const subtraction = () => {
    let total = Number(num1Input.value) - Number(num2Input.value);
    document.getElementById('total_error').style.display = 'none';
    totalIntup.value = total;
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}

const multiplication = () => {
    let total = Number(num1Input.value) * Number(num2Input.value);
    document.getElementById('total_error').style.display = 'none';
    totalIntup.value = total;
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}

const division = () => {
    let total = Number(num1Input.value) / Number(num2Input.value);
    if(Number(num2Input.value) == '0') {
    totalIntup.value = 'Error!';
    document.getElementById('total_error').style.display = 'block';
    }
    else {
        totalIntup.value = total;
        document.getElementById('total_error').style.display = 'none';
    }
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}
