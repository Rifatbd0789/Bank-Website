// Function to get value from field
function getFieldValueFromUser(inputUser) {
    const Element = document.getElementById(inputUser);
    const elementString = Element.value;
    const elementTotal = parseFloat(elementString);
    Element.value = '';
    return elementTotal;
}
// Function Get the value of Current field
function getCurrentFieldValue(currentField) {
    const Element = document.getElementById(currentField);
    const elementString = Element.innerText;
    const ElementTotal = parseFloat(elementString);
    return ElementTotal;
}
// Function to set the value
function setGivenValue(input, output) {
    const inputValue = document.getElementById(input);
    inputValue.innerText = output;
}