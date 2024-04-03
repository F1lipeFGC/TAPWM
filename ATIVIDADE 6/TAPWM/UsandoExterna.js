document.write('Está é uma forma de usar JavaScript externo')

var nome = prompt("Digite seu nome: ")
var primeira_nota = prompt("digite a primeira nota: ")
var segunda_nota = prompt("digite a segunda nota: ")
var terceira_nota = prompt("digite a terceira nota: ")

const resposta = ((parseFloat(primeira_nota) + parseFloat(primeira_nota) + parseFloat(terceira_nota)) / 3);

alert(nome + " sua média foi: " + resposta);