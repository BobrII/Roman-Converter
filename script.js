const inputNumber = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const resultText = document.getElementById("output");

const romanNumbers = {
    1000 : "M",
    900 : "CM",
    500 : "D",
    400 : "CD",
    100 : "C",
    90 : "XC",
    50 : "L",
    40 : "XL",
    10 : "X",
    9 : "IX",
    5 : "V",
    4 : "IV",
    1 : "I"
};

const decimalKeys = Object.keys(romanNumbers).reverse();
let result = "";

function checkInputNumbers(){
    resultText.innerText = "";
    const inputInt = parseInt(inputNumber.value);
    result = "";
    resultText.style.display = "flex";

    if(inputNumber.value === ""){
        resultText.innerText = "Please enter a valid number";
        return;
    }
    else if (inputInt <= 0){
        resultText.innerText = "Please enter a number greater than or equal to 1";
        return;
    }
    else if(inputInt >= 4000){
        resultText.innerText = "Please enter a number less than or equal to 3999";
        return;
    }
    convertNumbers(inputInt);
};
function convertNumbers(number){
    for(let i = 0; i < decimalKeys.length; i++){
        const decimalValue = parseInt(decimalKeys[i]);
        const romanValue = romanNumbers[decimalValue];

        while(number >= decimalValue){
            result += romanValue;
            number -= decimalValue;
        };
    };
    resultText.innerText = result;
};

convertButton.addEventListener("click", checkInputNumbers);

inputNumber.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkInputNumbers();
    };
});