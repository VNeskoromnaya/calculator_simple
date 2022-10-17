/*
Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.
*/

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const totalIntup = document.getElementById("total");
const btnAddition = document.querySelector("#btnAddition");
const btnSubtraction = document.querySelector("#btnSubtraction");
const btnMultiplication = document.querySelector("#btnMultiplication");
const btnDivision = document.querySelector("#btnDivision");

let total;

class Calculator {
  static addition = () => {
    total = Number(num1Input.value) + Number(num2Input.value);
    document.getElementById("total_error").style.display = "none";
    totalIntup.value = total;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
  };

  static subtraction = () => {
    total = Number(num1Input.value) - Number(num2Input.value);
    document.getElementById("total_error").style.display = "none";
    totalIntup.value = total;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
  };

  static multiplication = () => {
    total = Number(num1Input.value) * Number(num2Input.value);
    document.getElementById("total_error").style.display = "none";
    totalIntup.value = total;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
  };

  static division = () => {
    total = Number(num1Input.value) / Number(num2Input.value);
    if (Number(num2Input.value) == "0") {
      totalIntup.value = "Error!";
      console.log("WOW, я работаю");
      document.getElementById("total_error").style.display = "block";
    } else {
      totalIntup.value = total;
      console.log("я работаю");
      document.getElementById("total_error").style.display = "none";
    }
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
  };
}

btnAddition.addEventListener("click", Calculator.addition);
btnSubtraction.addEventListener("click", Calculator.subtraction);
btnMultiplication.addEventListener("click", Calculator.multiplication);
btnDivision.addEventListener("click", Calculator.division);
