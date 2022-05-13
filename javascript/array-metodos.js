const frutas = [
    {nome:"banana", preco: 5}, 
    {nome:"uva", preco:2},
    {nome:"abacaxi", preco: 7},
    {nome:"laranja", preco: 1}
]

// aumento de 20%

let frutas_aumento = frutas.map((fruta)=>{
    return {
        nome: fruta.nome, 
        novoPreco: fruta.preco * 1.2
    }
})

frutas_aumento.forEach((fruta)=>{console.log(fruta)})






