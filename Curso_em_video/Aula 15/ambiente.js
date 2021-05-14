let num = [5,2,9,9,3]
num.push(6)
let tamanho = num.length
console.log(`Nosso vetor e o ${num} cujo tamanho e ${tamanho}`)
num.sort()
console.log(`O vetor ordenado e o ${num}`)
for(let i in num){
    console.log(`A posicao ${i} do vetor e ${num[i]}`)
}
console.log(num.indexOf(9), num.indexOf(9), num.indexOf(-3))