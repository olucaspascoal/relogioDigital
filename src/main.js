var hora, min, sec;

var horarioAtual = function(){
    var date = new Date(); 
    hora = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours;
    min  = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
    sec  = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();

    var horario =  hora + ":" + min + ":" + sec;
    document.getElementById('time').innerHTML = horario;
}

setInterval( function(){
    horarioAtual()
}, 1000);