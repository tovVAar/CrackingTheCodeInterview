import { checaUnicidad } from "./solutions";

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
