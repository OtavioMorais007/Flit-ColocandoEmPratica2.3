const juros = require("./index")

test("Testando função de cálculo de juros simples", () => {
    expect(juros.CalcularJurosSimples(1000, 2, 1)).toBe(240)
})

test("Testando função de cálculo de juros simples", () => {
    expect(juros.CalcularJurosSimples(2000, 10, 2)).toBe(4800)
})

test("Testando função de cálculo de rentabilidade real", () => {
    expect(juros.CalcularRentabilidadeReal(8, 4)).toBe(3.8)
})

test("Testando função de cálculo de rentabilidade real", () => {
    expect(juros.CalcularRentabilidadeReal(20, 5)).toBe(14.3)
})