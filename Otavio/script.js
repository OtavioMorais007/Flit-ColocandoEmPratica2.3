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

function calcularRentabilidadePassada(precoAtual, precoAnterior) {
    if(precoAtual <= 0 || precoAnterior <= 0) {
        return undefined
    }
    let valorFinal = (precoAtual / precoAnterior) * 100 - 100
    return valorFinal.toFixed(2)
}