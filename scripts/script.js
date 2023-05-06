const form = document.querySelector("#imc_form");
const height = document.querySelector(".altura-input");
const weight = document.querySelector(".peso-input");
const result = document.querySelector(".result span");
const resultContainer = document.querySelector(".result ");

form.addEventListener("click", (e) =>{
    e.preventDefault();
    checkUserData();
})

function imcCalc (height, weight) {
    let imc = {};

    imc.result = weight / ((height/100)**2).toFixed(1);

    if(imc.result < 18.5){
        imc.class = "abaixo do peso";
    }else if(imc.result < 25){
        imc.class = "Saúdavel";
    }else if(imc.result < 30){
        imc.class = "com sobrepeso";
    }else if(imc.result < 35){
        imc.class = "com Obesidade 1";
    }else if(imc.result < 40){
        imc.class = "com Obesidade 2";
    }else {
        imc.class = "com Obesidade 3";
    };

    return imc;
}

function showImcData () {

    const data = imcCalc(height.value, weight.value);

    result.innerText = `IMC é de ${data.result.toFixed(2)} e você esta ${data.class}.`;
}

function checkUserData () {

    if(height.value === "" || weight.value === "") {
        height.classList.add("error");
        result.innerText = 'Valor inválido, preencha todos os campos.'
    }

    showImcData();

    resultContainer.classList.remove("hide");
    
    setTimeout(throwError, 3000);
}

function throwError() {
    height.classList.remove("error");
    weight.classList.remove("error");
}