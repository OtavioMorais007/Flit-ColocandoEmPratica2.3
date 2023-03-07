// Formula: J = C * I * t
// J = valor final
// C = valor inicial 
// i = taxa de juros em decimal
// t = tempo de cálculo  em meses


function CalcularJurosSimples(valorInicial, TaxaDeJuros, TempoEmAnos) {
    let jurosDecimal = TaxaDeJuros / 100
    let tempoEmMeses = TempoEmAnos * 12
    let valorFinal = valorInicial * jurosDecimal * tempoEmMeses
    console.log("O lucro ao fim da aplicação é : " + valorFinal)
    return valorFinal
}

// Formula: R = (1 + r) / (1 + i) - 1
// R = valor final
// r = rentabilidade em decimal
// i = inflação em decimal  

function CalcularRentabilidadeReal(rentabilidade, inflacao) {
    let r = rentabilidade / 100
    let i = inflacao / 100
    let valorFinal = ((1 + r) / (1 + i) - 1) * 100
    console.log("A rentabilidade real é: " + (valorFinal).toFixed(1) + "%")
    return parseFloat(valorFinal.toFixed(1))
}

module.exports = {CalcularJurosSimples, CalcularRentabilidadeReal}