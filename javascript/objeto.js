const pessoa = {
    altura: 172,
    peso: 65,
    olhos: "verde",
    aposentado: false,
    calculoIMC(){
        return this.peso / (this.altura * this.altura)
    }
}

console.log(pessoa.altura)
console.log(pessoa.peso)
console.log(pessoa.calculoIMC())

pessoa.peso = 45

console.log(pessoa.peso)
console.log(pessoa.calculoIMC())

const pessoa2 = Object.create(pessoa)
pessoa2.altura = 180
// pessoa2.peso = 81

console.log(pessoa2.altura)
console.log(pessoa.altura)
console.log(pessoa2.peso)
