// Configurar data
var countDownDate = new Date("May 27, 2019 00:00:00").getTime();
// Update de contador a cada 1s
var countDownfunction = setInterval(function() {
    // Pegar a data e horas
    var now = new Date().getTime();
    // Achar a diferença entre "now" e "countDownDate"
    var distance = countDownDate - now;
    // Calculos de tempo para dias, horas, minutos e segundos
    var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
    var hours = Math.floor((distance % (100 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Renderizar o resultado em um elemento com uma id="demo"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    // se o contador zerar, mostrar o seguinte texto:
    if(distance < 0) {
        clearInterval(countDownfunction);
        document.getElementById("timer").innerHTML = "Atualize a Página";
    }
}, 1000);