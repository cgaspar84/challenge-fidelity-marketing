// Script Ejercicio 1
// Autor: Carlos Gaspar 

console.log("********** FIDELITY MARKETING CHALLENGE");
console.log("********** EJERCICIO 1");
CantidadMayusculas('Edelgard von Hresvelg')

function CantidadMayusculas(iStringValue) {
  var $amountUpperCases = (iStringValue.match(/[A-Z]/g) || []).length;
  console.log('[CantidadMayusculas] El input {'+iStringValue+'} tiene ' + $amountUpperCases + ' mayusculas.');
}
