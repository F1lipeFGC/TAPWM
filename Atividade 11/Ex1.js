
function maiorNumero(a, b, c, d) {
    let maior = a;
    if (b > maior) {
        maior = b;
    }
    if (c > maior) {
        maior = c;
    }
    if (d > maior) {
        maior = d;
    }
    return maior;
}

// 
function maiorNumeroMath(a, b, c, d) {
    return Math.max(a, b, c, d);
}

// user sort professora
function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}


function executarFuncoes() {

    let a = parseFloat(prompt("Digite o primeiro número:"));
    let b = parseFloat(prompt("Digite o segundo número:"));
    let c = parseFloat(prompt("Digite o terceiro número:"));
    let d = parseFloat(prompt("Digite o quarto número:"));
    

    let maior = maiorNumero(a, b, c, d);
    let maiorMath = maiorNumeroMath(a, b, c, d);
    let numerosOrdenados = ordenarNumeros(a, b, c);
    

    alert("Maior dos números: " + maior);
    alert("Maior dos número usando Math: " + maiorMath);
    alert("Números em ordem: " + numerosOrdenados);
}
