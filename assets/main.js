//debugger
const num1Input = document.getElementById('num1'),
      num2Input = document.getElementById('num2'),
      totalIntup = document.getElementById('total');

let total;

const addition = () => {
    let total = Number(num1Input.value) + Number(num2Input.value);
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    totalIntup.value = total;
}

const subtraction = () => {
    let total = Number(num1Input.value) - Number(num2Input.value);
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    totalIntup.value = total;
}

const multiplication = () => {
    let total = Number(num1Input.value) * Number(num2Input.value);
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    totalIntup.value = total;
}

const division = () => {
    let total = Number(num1Input.value) / Number(num2Input.value);
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    totalIntup.value = total;
    console.log(totalIntup.value);
}
