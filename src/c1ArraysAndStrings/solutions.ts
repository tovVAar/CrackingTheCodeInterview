// Ejercicios del capítulo 1

// 1.1
export function checaUnicidad(q: string[]): boolean {
  // not using another data structure
  let hasDups = false;
  for (let indx = 0; indx < q.length; indx++) {
    for (let subIndx = indx + 1; subIndx < q.length; subIndx++) {
      hasDups = hasDups || q[indx] === q[subIndx];
      if (hasDups) return true;
    }
  }
  return hasDups;
}

//1.2
export function checaPermutacion(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;

  let isPermutation = true;
  let letters = new Map<string, number>();

  for (let indx = 0; indx < a.length; indx++) {
    const prevCount = letters.get(a[indx]) || 0;
    letters.set(a[indx], prevCount + 1);
  }
  for (let indx = 0; indx < b.length; indx++) {
    if (!letters.has(b[indx])) return false;

    const prevCount = letters.get(b[indx]) || 0;
    letters.set(b[indx], prevCount - 1);
  }

  for (let value of letters.values()) {
    if (value !== 0) return false;
  }

  return isPermutation;
}
