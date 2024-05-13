var resultado = document.querySelector("#resultado");
var valorImc = 0;

const form = document.getElementById('formulario')
form.addEventListener('submit', e => {
    e.preventDefault();
    calculaImc();
})

function calculaImc() {
  var peso = document.querySelector("#peso").value;
  var altura = document.querySelector("#altura").value;
  valorImc = peso / (altura*altura) * 100000;

  if (valorImc <= 18.5) {
    resultado.innerHTML = `Seu imc é: ${valorImc} você está com magreza.`;
  } else if (valorImc <= 24.9) {
    resultado.innerHTML = `Seu imc é: ${valorImc} você está normal.`;
  } else if (valorImc <= 29.9) {
    resultado.innerHTML = `Seu imc é: ${valorImc} você está com sobrepeso.`;
  } else if (valorImc <= 39.9) {
    resultado.innerHTML = `Seu imc é: ${valorImc} você está com obesidade I.`;
  } else if (valorImc >= 40) {
    resultado.innerHTML = `Seu imc é: ${valorImc} você está com obesidade II.`;
  }
}
