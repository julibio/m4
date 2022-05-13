let frutas = ["maçã", "pera", "limão", "uva"]

let tamanho = frutas.length
console.log(tamanho)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])

frutas.push("tangerina")
console.log(frutas.length)
frutas.pop()

frutas.splice(1,1)

frutas.forEach((fruta,index)=>{
    console.log(fruta,index)}
)

console.log(frutas.includes("abacaxi"))