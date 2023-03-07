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

CalcularJurosSimples(1000, 2, 1)



// Formula: R = (1 + r) / (1 + i) - 1
// R = valor final
// r = rentabilidade em decimal
// i = inflação em decimal  


function CalcularRentabilidadeReal(rentabilidade, inflacao) {
    let r = rentabilidade / 100
    let i = inflacao / 100
    let valorFinal = ((1 + r) / (1 + i) - 1) * 100
    console.log("A rentabilidade real é: " + (valorFinal).toFixed(1) + "%")
    return valorFinal
}

CalcularRentabilidadeReal(8, 4)