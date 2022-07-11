document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})


function isrightH(obj)
    {
        var value= +obj.value.replace(/\D/g,'')||0;
        if (value<3) value=3;
        if (value>12) value=12;
        obj.value = value;

    }

function isright(obj)
{
    var value= +obj.value.replace(/\D/g,'')||0;
    if (value<1) value=1;
    if (value>10000) value=10000;
    obj.value = value;
}


function infoparsing(){
    var type_app = '';
    var app_tariff = '';
    let type_app_vip = document.getElementById('vip').checked ;
    if (type_app_vip==true){
        type_app = 'Платная';
        let day = document.getElementById('day').checked;
        let week = document.getElementById('week').checked;
        let month = document.getElementById('month').checked;
        if (day==true){
            app_tariff = '1 - 3 дня (800 рублей за человека)';
        }
        else if(week==true){
            app_tariff = '3 - 7 дней (2400 рублей за человека)';
        }
        else if(month==true){
            app_tariff = '1 недели - 2 месяцев (4000 рублей за человека)';
        }
    }
    else{
        type_app='Бесплатная';
    }
    let date = document.getElementById('date-input').value;
    if (date==''){
        date = '2022-12-20';
        document.getElementById('date-input').value = date;
    }
    let time = document.getElementById('time-input').value;
    if (time==''){
        time = '08:00';
        document.getElementById('time-input').value = time;
    }
    let price_per_hour = document.getElementById('price-per-hour-input').value;
    if (price_per_hour==''){
        price_per_hour = '200';
        document.getElementById('price-per-hour-input').value = price_per_hour;
    }
    let address = document.getElementById('address-input').value;
    if (address==''){
        address = 'test address';
        document.getElementById('address-input').value = address;
    }
    let count_hours = document.getElementById('count-hours-input').value;
    if (count_hours==''){
        count_hours = '3';
        document.getElementById('count-hours-input').value = count_hours;
    }
    let count_persons = document.getElementById('count-persons-input').value;
    if (count_persons.replace(/\D/g, '')==''){
        count_persons = '1';
        document.getElementById('count-persons-input').value = count_persons;
    }
    let comment = document.getElementById('comment-area').value;
    if (comment==''){
        comment = 'comment';
        document.getElementById('comment-area').value = comment;
    }
    let skill = document.getElementById('skill-select').value;
    let kind_of_work = document.getElementById('kind-of-work-select').value;
    let qr = document.getElementById('qr-code-select').value;
    let age = document.getElementById('age-select').value;}
