function calc(nums){
   
    const [a, b, c] = nums;

    const soma = a + b + c;
    const quadrado1 = a * a;
    const quadrado2 = b * b;

    return `A soma dos três números é ${soma}, o primeiro quadrado é ${quadrado1} e o segundo é ${quadrado2}`;

}

function Exercicio1(){
    const num1 = parseFloat(prompt("Digite o primeiro número"));
    const num2 = parseFloat(prompt("Digite o segundo número"));
    const num3 = parseFloat(prompt("Digite o terceiro número"));

    const resultado = calc.apply(null, [[num1,num2,num3]]);
    alert(resultado)
}

function Exercicio2(palavra1, palavra2) {
    palavra1 = prompt("Insira aqui uma palavra: ")
    palavra2 = prompt("Insira aqui outra palavra: ")
    if (!palavra1 || !palavra2) {
        alert("ERRO!")
    }
    else if (palavra1.includes(palavra2)){
        alert("É subconjunto")
    }
    else {
        alert("Não é um subconjunto")
    }
}