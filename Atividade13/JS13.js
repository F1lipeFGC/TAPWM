function Botao1(){
    var Aluno1 = new Object();
    Aluno1.RA = prompt('Digite o RA do aluno:');
    Aluno1.Nome = prompt('Digite o nome do aluno:');
    alert(`RA: ${Aluno1.RA}`);
    alert(`Nome: ${Aluno1.Nome}`);
}


function Botao2(){
    var Aluno2 = new Object();;
    Aluno2["Nome"] = "Fernanda";
    Aluno2["RA"] = "1241231243";
    Aluno2["email do aluno"] = "fernanda@gmail.com";    
    alert("RA=" + Aluno2.RA + "Nome=" + Aluno2.Nome);
    alert(Aluno2["email do aluno"]);
}

function Botao3(){
const arr = [['codigo', 1],['nome','Joao'],['idade',23]];
const obj = Object.fromEntries(arr);
alert(JSON.stringify(obj));
}