const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura**2)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso';
        }else if(valorIMC < 25){
            classificacao = 'Saudável';
        }else if(valorIMC < 30){
            classificacao = 'com Sobrepeso';
        }else if(valorIMC < 35){
            classificacao = 'com Obesidade 1';
        }else if(valorIMC < 40){
            classificacao = 'com Obesidade 2';
        }else {
            classificacao = 'com Obesidade 3';
        }

        resultado.textContent = `${nome}, seu IMC é de ${valorIMC} e você está ${classificacao}`;

    } else{

        resultado.textContent = 'Preencha todos os campos.'
    }

}

calcular.addEventListener('click', imc)