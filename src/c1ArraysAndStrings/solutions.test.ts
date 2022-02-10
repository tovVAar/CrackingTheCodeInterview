import { checaUnicidad, checaPermutacion } from "./solutions";

describe("1.1", () => {
  it("no dups", () => {
    const prueba = "vbcdaefxr".split("");
    const result = checaUnicidad(prueba);
    expect(result).toBeFalsy();
  });

  it("dups", () => {
    const prueba = "avbcdaefxr".split("");
    const result = checaUnicidad(prueba);
    expect(result).toBeTruthy();
  });
});

describe("1.2", () => {
  it("is permutation", () => {
    const a = "pero".split("");
    const b = "epro".split("");
    const result = checaPermutacion(a, b);
    expect(result).toBeTruthy();
  });

  it("not a permutation - different length", () => {
    const a = "pero".split("");
    const b = "repro".split("");
    const result = checaPermutacion(a, b);
    expect(result).toBeFalsy();
  });

  it("not a permutation - same length", () => {
    const a = "pero".split("");
    const b = "repr".split("");
    const result = checaPermutacion(a, b);
    expect(result).toBeFalsy();
  });
});
