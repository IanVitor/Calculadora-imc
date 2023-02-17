const userName = document.querySelector(".nome-input");
const height = document.querySelector(".altura-input");
const weight = document.querySelector(".peso-input");
const result = document.querySelector(".result span");
const resultContainer = document.querySelector(".result ");

function setImcData (height, weight) {
    let imcClass = '';

    let imcResult = weight / ((height/100)**2).toFixed(1);

    if(imcResult < 18.5){
        imcClass = "abaixo do peso";
    }else if(imcResult < 25){
        imcClass = "Saúdavel";
    }else if(imcResult < 30){
        imcClass = "com sobrepeso";
    }else if(imcResult < 35){
        imcClass = "com Obesidade 1";
    }else if(imcResult < 40){
        imcClass = "com Obesidade 2";
    }else {
        imcClass = "com Obesidade 3";
    };

    return [imcClass, imcResult];
}

function checkUserData () {
    
    

    if(userName.value === "") {
        userName.classList.add("error");
        result.innerText = 'Valor inválido, preencha todos os campos.'
    }

    if(height.value === "") {
        height.classList.add("error");
        result.innerText = 'Valor inválido, preencha todos os campos.'
    }

    if(weight.value === "") {
        weight.classList.add("error");
        result.innerText = 'Valor inválido, preencha todos os campos.'
    }

    if(userName.value !== "" && weight.value !== "" && height.value !== ""){
        showImcData();
    }

    resultContainer.classList.remove("hide");
    
    setTimeout(throwError, 3000);
    
}

function throwError() {
    userName.classList.remove("error");
    height.classList.remove("error");
    weight.classList.remove("error");
}

function showImcData () {

    const data = setImcData(height.value, weight.value);

    result.innerText = `${userName.value}, seu IMC é de ${data[1].toFixed(2)} e você esta ${data[0]}.`;
}