cconsole.log("********** FIDELITY MARKETING CHALLENGE");
console.log("********** EJERCICIO 3");
var iArrayExample = [4,7,1,2,7,5,9,2,21,13,11];
OrdenarValores(iArrayExample);

function OrdenarValores(iArrayValues) {
  console.log("[OrdenarValores] Array base: [" + iArrayValues + "]");
  var oArrayResult = new Array();
  
  for (idx in iArrayValues) {      
      oArrayResult[idx] = iArrayValues[idx];
  }
  
  console.log("[OrdenarValores] Array resultado: [" + oArrayResult.sort(ComparaValores) + "]");
}

function ComparaValores(iValueA, iValueB) {
    return iValueA - iValueB;
}
