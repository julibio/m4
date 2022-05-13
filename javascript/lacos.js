const frutas = ["banana", "uva","abacaxi","laranja"]
//                 0        1       2           3

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i], i)
    if(frutas[i] == "uva") break
}

frutas.forEach((fruta)=>{console.log(fruta)
if(fruta == "uva") return 
/* return e break nao
 funciona no forEach*/
})

let contador = 0

while(contador < 5){
console.log("estou no while...")
contador++
}


