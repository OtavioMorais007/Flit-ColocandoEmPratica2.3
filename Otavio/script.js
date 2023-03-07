const { error } = require("console");

function calcularJurosCompostos(valorInicial, taxaDeJuros, tempoAnos) {
  if (valorInicial !== Math.floor(valorInicial) || taxaDeJuros !== Math.floor(taxaDeJuros) || tempoAnos !== Math.floor(tempoAnos)) {
    return undefined
  }
  let taxaDeJurosDecimal = taxaDeJuros / 100;
  let tempoMeses = tempoAnos * 12;

  let valorFinal = valorInicial * (1 + taxaDeJurosDecimal) ** tempoMeses;
  return valorFinal.toFixed(2);
}

console.log(calcularJurosCompostos(1000, 2, 1));
