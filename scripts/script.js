const form = document.querySelector("#imc_form");
const weight = document.querySelector("#weight_input");
const height = document.querySelector("#height_input");
const imcResult = document.querySelector("#imc_content span");
const classResult = document.querySelector("#class_content span");
const resultContent = document.querySelector("#result_content span");
const resultContainer = document.querySelector(".result_container");

form.addEventListener("click", (e) =>{
    e.preventDefault();
})

function imcCalc (height, weight) {
    let imc = {};

    imc.result = weight / ((height/100)**2).toFixed(1);
    imc.class = "Você está ";

    if(imc.result < 18.5){
        imc.class += "abaixo do peso";
    }else if(imc.result < 25){
        imc.class += "Saúdavel";
    }else if(imc.result < 30){
        imc.class += "com sobrepeso";
    }else if(imc.result < 35){
        imc.class += "com Obesidade 1";
    }else if(imc.result < 40){
        imc.class += "com Obesidade 2";
    }else if(imc.result >= 40) {
        imc.class += "com Obesidade 3";
    };

    return imc;
}

function showImcData () {
    const data = imcCalc(height.value, weight.value);

    resultContainer.innerHTML = `
        <div id="imc_result">
            <h1 id="imc_content"><span>${data.result.toFixed(2)}</span></h1>
            <p id="result_content"><span>seu imc</span></p>
        </div>
        <div id="imc_class">
            <p id="class_content"><span>${data.class}</span></p>
        </div>
    `
}

function checkUserData () {

    if(height.value === "" || weight.value === "") {
        height.classList.add("error");
        weight.classList.add("error");
        resultContainer.innerHTML = '<p>Valor inválido, preencha todos os campos.</p>';
        return
    }

    if(height.value <= 0 || weight.value <= 0) {
        height.classList.add("error");
        weight.classList.add("error");
        resultContainer.innerHTML = '<p>Ambos os valores devem ser maiores do que zero.</p>';
        return
    }

    showImcData();

    resultContainer.classList.remove("hide");
    
    setTimeout(throwError, 3000);
}

function throwError() {
    height.classList.remove("error");
    weight.classList.remove("error");
}