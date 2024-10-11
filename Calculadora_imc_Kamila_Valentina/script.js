var peso
var altura;
var imc;
var resultado;

//recebendo o event
function calcular(event) {
    //refresh dos inpputs

    event.preventDefault();
    //alert('teste');

    //recebendo os dados digitados pelo usuario
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //calculo do imc 
    imc = peso / (altura * altura);

    //testado a recepão dos valores de peso e atura
    //e testado o calculo do imc 

    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');
    if (imc < 17) {
        resultado.innerHTML = '</br> Seu resultado foi:'
            + imc.toFixed(2) + '</br>Cuidado você está muito abaixo do ';
    }
    else if (imc <= 17 && imc < 18.5) {
        resultado.innerHTML = '</br> Seu resultado foi:'
            + imc.toFixed(2) + '</br>Cuidado você está abaixo do peso';
    }

    else if (imc <= 18 && imc < 24.99) {
        resultado.innerHTML = '</br> Seu resultado foi:'
            + imc.toFixed(2) + '</br>Você está no peso normal';
    }

    else if (imc <= 25 && imc < 29.99) {
        resultado.innerHTML = '</br> Seu resultado foi:'
            + imc.toFixed(2) + '</br>Você está acima do peso';
    }
    else if (imc < 30) {
        resultado.innerHTML = '</br> Seu resultado foi:'
            + imc.toFixed(2) + '</br>Você está obeso';
    }
}