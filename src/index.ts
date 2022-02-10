function checaInicidad(q: string[]): boolean {
  let hasDups = false;
  for (let indx = 0; indx < q.length; indx++) {
    for (let subIndx = indx + 1; subIndx < q.length; subIndx++) {
      hasDups = hasDups || q[indx] === q[subIndx];
      if (hasDups) return true;
    }
  }
  return hasDups;
}

const prueba = "vbcdaefxr";
const result = checaInicidad(prueba.split(""));
console.log(result);
