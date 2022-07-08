function TestFunction() {
    alert("TEST");
}

function functionToExecute() {
	alert("CLICKED");
}


let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  alert("CLICKED");
};
let form = document.querySelector('.subscription');
form.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
}
let message = document.querySelector('.subscription-message');

