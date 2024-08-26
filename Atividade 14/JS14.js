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


function Conta(nome, banco, numero, saldo) {
    this._nome = nome;
    this._banco = banco;
    this._numero = numero;
    this._saldo = saldo;
}

Conta.prototype = {
    get nome() {
        return this._nome;
    },
    set nome(value) {
        this._nome = value;
    },
    get banco() {
        return this._banco;
    },
    set banco(value) {
        this._banco = value;
    },
    get numero() {
        return this._numero;
    },
    set numero(value) {
        this._numero = value;
    },
    get saldo() {
        return this._saldo;
    },
    set saldo(value) {
        this._saldo = value;
    },
    exibirDados() {
        return `Nome: ${this._nome}, Banco: ${this._banco}, Número: ${this._numero}, Saldo: ${this._saldo}`;
    }
};

// Função construtora para Conta Corrente com Saldo Especial
function ContaCorrente(nome, banco, numero, saldo, saldoEspecial) {
    Conta.call(this, nome, banco, numero, saldo);
    this._saldoEspecial = saldoEspecial;
}

// Herança e métodos get e set para ContaCorrente
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype = {
    get saldoEspecial() {
        return this._saldoEspecial;
    },
    set saldoEspecial(value) {
        this._saldoEspecial = value;
    },
    exibirDados() {
        return `${super.exibirDados()}, Saldo Especial: ${this._saldoEspecial}`;
    }
};

// Função construtora para Conta Poupança com Juros e Data de Vencimento
function ContaPoupanca(nome, banco, numero, saldo, juros, dataVencimento) {
    Conta.call(this, nome, banco, numero, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
}

// Herança e métodos get e set para ContaPoupanca
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype = {
    get juros() {
        return this._juros;
    },
    set juros(value) {
        this._juros = value;
    },
    get dataVencimento() {
        return this._dataVencimento;
    },
    set dataVencimento(value) {
        this._dataVencimento = value;
    },
    exibirDados() {
        return `${super.exibirDados()}, Juros: ${this._juros}, Data de Vencimento: ${this._dataVencimento}`;
    }
};

// Aqui esta  segunda ATV
function contaCorrente() {

    const nomeCorrente = prompt("Digite o nome do correntista da Conta Corrente:");
    const bancoCorrente = prompt("Digite o banco da Conta Corrente:");
    const numeroContaCorrente = prompt("Digite o número da Conta Corrente:");
    const saldoCorrente = parseFloat(prompt("Digite o saldo da Conta Corrente:"));
    const saldoEspecial = parseFloat(prompt("Digite o saldo especial da Conta Corrente:"));


    const contaCorrente = new ContaCorrente(nomeCorrente, bancoCorrente, numeroContaCorrente, saldoCorrente, saldoEspecial);
    alert(contaCorrente.exibirDados());

    function contaPoupanca(){

    const nomePoupanca = prompt("Digite o nome do correntista da Conta Poupança:");
    const bancoPoupanca = prompt("Digite o banco da Conta Poupança:");
    const numeroContaPoupanca = prompt("Digite o número da Conta Poupança:");
    const saldoPoupanca = parseFloat(prompt("Digite o saldo da Conta Poupança:"));
    const juros = parseFloat(prompt("Digite a taxa de juros da Conta Poupança:"));
    const dataVencimento = prompt("Digite a data de vencimento da Conta Poupança (formato YYYY-MM-DD):");


    const contaPoupanca = new ContaPoupanca(nomePoupanca, bancoPoupanca, numeroContaPoupanca, saldoPoupanca, juros, dataVencimento);
    alert(contaPoupanca.exibirDados());

    }
}



