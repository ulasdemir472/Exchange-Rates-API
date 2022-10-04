// https://api.exchangerate.host/latest


const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const outputResult = document.getElementById("outputResult");

const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect);

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].text);
        ui.changeFirstOutput(firstSelect.options[firstSelect.selectedIndex].text);

    };
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].text);
        ui.changeSecondOutput(secondSelect.options[secondSelect.selectedIndex].text);
    };
}


function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result => ui.showResult(result))
    .catch(err => console.log(err));

}




