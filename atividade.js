const dataHoje = new Date();
var dataDoEvento = new Date('2022-01-25');

const dataNascimento = new Date('1992-11-29');
const diff = Math.abs(dataHoje.getTime() - dataNascimento.getTime());
const idade = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365));

var qtdParticipantes = 50;

if (dataDoEvento > dataHoje &&  idade > 18 && qtdParticipantes < 100 )  {
    console.log("Cadastro permitido")
}
else if (dataDoEvento < dataHoje) { 
    console.log("Cadastro não permitido pois a data do evento é inválida.") 
}
else if (idade < 18) { 
    console.log("Cadastro não permitido devido a idade") 
}
else console.log("Cadastro não permitido pois excedeu a quantidade de participantes ")