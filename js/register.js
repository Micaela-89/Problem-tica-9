var validations = document.querySelector('.validations-hidden');
var validText = "Validation results:";

var formExists= function() {
    if (document.querySelector('#registerForm')) {
        validations.append( validText + " " + 'Form is found' + " ");
    }
    else {
        validations.append(validText + " " + 'Form is not found' + " ");
    }
}
formExists();


var inputsQuantity = function () {
    var inputs = document.querySelectorAll('input');
    var inputsNumber = inputs.length;

    if (inputsNumber = 4) {
        validations.append(validText + " " + 'Input fields are correct' + " ");
    }
    else {
        validations.append(validText + " " + 'There are missing inputs' + " ");
    }
}

inputsQuantity()

var requiredInputs = function () {
    var inputs = document.querySelectorAll('.infoInput').required;
    if (inputs = true) {
        validations.append(validText + " " + 'All fields are required' + " ");
    }
    else {
        validations.append(validText + " " + 'Required attributes missing' + " ");
    }
}
requiredInputs();


var labels = function () {
    var inputs = document.querySelectorAll('.infoInput').name;
    var labels = document.querySelectorAll('labels').for;
    if (inputs === labels) {
        validations.append(validText + " " + 'Each input has its label' + " ");
    }
    else {
        validations.append(validText + " " + 'There are missing labels for inputs' + " ");
    }
}
labels();

var validAnchor = function (){
    var anchor = document.querySelectorAll('submit').href;
    var validAnchor = "login.html";
    if (anchor = validAnchor) {
        validations.append(validText + " " + 'Valid anchor' + " ");
    }
    else {
        validations.append(validText + " " + 'Wrong anchor' + " ");
    }
}
validAnchor ();

var validBtns = function() {
    var submitBtn = document.querySelector('.submitBtn').nodeValue;
    var resetBtn = document.querySelector('.resetBtn').nodeValue;
    var submitValue = 'Submit';
    var resetValue = 'Reset';
    if ((submitBtn = submitValue) && (resetBtn = resetValue)) {
        validations.append(validText + " " + 'Buttons content is correct' + " ");
    }
    else {

        validations.append(validText + " " + 'Buttons content is wrong' + " ");
    }
}
validBtns();


var validateAll = function () {
    var divHidden = document.querySelector('.validations-hidden');
    divHidden.className = 'validations';
    if ((formExists = true) && (inputsQuantity = true) && (requiredInputs = true) &&
    (labels = true) && (validBtns = true)){
        validations.style.backgroundColor = 'green';
        validations.style.color= 'white';
        validations.textContent =  'Every validation has passed!';
}
    else {
        validations.style.backgroundColor = 'red';
        validations.style.color= 'white';
        validations.textContent = errors;
}
    }
validateAll();
