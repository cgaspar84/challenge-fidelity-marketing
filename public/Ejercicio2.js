
console.log("********** FIDELITY MARKETING CHALLENGE");
console.log("********** EJERCICIO 2\n");
var iArrayExample = [1,2,3,4,5,6,7];
IncrementarValores(iArrayExample);
    
function IncrementarValores(iArrayValues) {
  console.log("[IncrementarValores] Array base: [" + iArrayValues + "]");
  for (idx in iArrayValues) {
      iArrayValues[idx] = iArrayValues[idx] + 1;
  }
  
  console.log("[IncrementarValores] Array respuesta: [" + iArrayValues+ "]");
} 