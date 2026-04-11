// Arrays
let nome = ['vt', 'timbalada', 'neguin', 'miguelzinn', 'bruxin', 'trator', 'general', 'vn']

// adiciona no final elementos no array
nome.push('francisco')
console.log(nome.length);

// adiciona no começo elementos no array
nome.unshift('ada')

// remover no final do array
nome.pop() // removeu o francisco

// remver no começo do array
nome.shift() //remove a ada

// remove o proximo baseado na casa do primeiro numero
nome.splice(2,1) // no caso aqui removeu o neguin

// verifica se o elemento existe no array
console.log(nome.includes('vn'))






// boas vindas para todos
let tamanho = nome.length

for(let i=0; i<tamanho; i++){
    // console com crase
    console.log(`seja bem vindo ${nome[i]}`)
}