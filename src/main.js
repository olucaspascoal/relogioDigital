var hora, min, sec, dataCompleta;
var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feria', 'Quarta-feria', 'Quinta-feira', 'Sexta-feria', 'Sábado'];
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

var horarioAtual = function(){
    var date = new Date(); 
    hora = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();
    min  = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
    sec  = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();

    var horario =  hora + ":" + min + ":" + sec;
    document.getElementById('time').innerHTML = horario;
}

var date = new Date()

var diaAtual = (date) => {
    numSemana = date.getDay()
    return diasSemana[numSemana]
}

function mesAtual(date) {
    var numMes = date.getMonth()
    return meses[numMes];
}

dataCompleta = diaAtual(date) + ', ' + date.getDate() + ' de ' + mesAtual(date) + ' de ' + date.getFullYear();

document.getElementById('data').innerHTML = dataCompleta;

horarioAtual();
setInterval( () => {
    horarioAtual()
}, 1000);