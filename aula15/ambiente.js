let num = [4, 2, 5, 3, 1]
num.push(6)
console.log(`Nosso vetor tem ${num.length} elementos:`)
console.log(`${num.sort()}`)
let pos = num.indexOf(7) // Pesquisa um elemento do vetor no caso, 8.
if (pos == -1){// -1 significa, no JS, que o elemento/valor não está no vetor.
    console.log(`O valor 7 não está no vetor`)
}
console.log(`O valor 5 está na posição ${pos}`)
