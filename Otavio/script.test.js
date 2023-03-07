const funcoes = require('../Otavio/script')

test('Calcular juros Compostos', () => {
    expect(funcoes.calcularJurosCompostos(1000, 2, 1)).toBe(1268.24);
});

test('Calcular Rentabilidade Passada', () => {
    expect(funcoes.calcularRentabilidadePassada(14, 9)).toBe(55.55);
});
