function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
}

// Método para calcular a área
Retangulo.prototype.calcularArea = function() {
    return this.base * this.altura;
};

// Função para criar e exibir o retângulo
function criarERetornarRetangulo() {
    // Solicitar base e altura ao usuário
    const base = parseFloat(prompt("Digite a base do retângulo:"));
    const altura = parseFloat(prompt("Digite a altura do retângulo:"));

    // Verificar se os valores são válidos
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para base e altura.");
        return;
    }

    // Criar um objeto do tipo Retângulo
    const meuRetangulo = new Retangulo(base, altura);

    // Calcular e exibir a área
    const area = meuRetangulo.calcularArea();
    alert(`Área do retângulo: ${area}`);
}


class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(valor) {
        this._nomeCorrentista = valor;
    }

    get banco() {
        return this._banco;
    }

    set banco(valor) {
        this._banco = valor;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(valor) {
        this._numeroConta = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    exibirDados() {
        return `Nome: ${this.nomeCorrentista}\nBanco: ${this.banco}\nNúmero da Conta: ${this.numeroConta}\nSaldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }

    exibirDados() {
        return `${super.exibirDados()}\nSaldo Especial: R$ ${this.saldoEspecial.toFixed(2)}`;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, taxaJuros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.taxaJuros = taxaJuros;
        this.dataVencimento = dataVencimento;
    }

    get taxaJuros() {
        return this._taxaJuros;
    }

    set taxaJuros(valor) {
        this._taxaJuros = valor;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(valor) {
        this._dataVencimento = valor;
    }

    exibirDados() {
        return `${super.exibirDados()}\nTaxa de Juros: ${this.taxaJuros.toFixed(2)}%\nData de Vencimento: ${this.dataVencimento}`;
    }
}

function Contas() {
    const nomeCorrentistaCorrente = prompt("Digite o nome do correntista da Conta Corrente:");
    const bancoCorrente = prompt("Digite o banco da Conta Corrente:");
    const numeroContaCorrente = prompt("Digite o número da conta da Conta Corrente:");
    const saldoCorrente = parseFloat(prompt("Digite o saldo da Conta Corrente:"));
    const saldoEspecial = parseFloat(prompt("Digite o saldo especial da Conta Corrente:"));

    const contaCorrente = new Corrente(nomeCorrentistaCorrente, bancoCorrente, numeroContaCorrente, saldoCorrente, saldoEspecial);

    const nomeCorrentistaPoupanca = prompt("Digite o nome do correntista da Conta Poupança:");
    const bancoPoupanca = prompt("Digite o banco da Conta Poupança:");
    const numeroContaPoupanca = prompt("Digite o número da conta da Conta Poupança:");
    const saldoPoupanca = parseFloat(prompt("Digite o saldo da Conta Poupança:"));
    const taxaJuros = parseFloat(prompt("Digite a taxa de juros da Conta Poupança (em %):"));
    const dataVencimento = prompt("Digite a data de vencimento da Conta Poupança (YYYY-MM-DD):");

    const contaPoupanca = new Poupanca(nomeCorrentistaPoupanca, bancoPoupanca, numeroContaPoupanca, saldoPoupanca, taxaJuros, dataVencimento);

    alert('Dados da Conta Corrente:\n' + contaCorrente.exibirDados());
    alert('Dados da Conta Poupança:\n' + contaPoupanca.exibirDados());
}





