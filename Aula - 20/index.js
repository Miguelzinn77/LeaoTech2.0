console.log('Bem vindo a aula 20');

// function funcao() {
//     console.log(' Mc nao é bandido ')
// }

let nome = document.getElementById('miguel').innerHTML = "<h2> Nome atualizado </h2>"

// com timeout
setTimeout(function(){
    let apelido = document.getElementById('luis').innerHTML = "<h2> Nome atualizado em segundos </h2>"
}, 3000) // aqui vai atualizar o nome depois de 3 segundos

// Name
let div1 = document.getElementsByName('carmo')[0].innerHTML = "<h1> div 1 atualizada </h1>" // não confundir o NAME com ClassName
                                              // com div tem que informar a posição do índice

// com timeout
setTimeout(function(){
    let div2 = document.getElementsByName('luismig')[0].innerHTML = "<h1> div 2 atualizada em segundos </h1>"
}, 3000) // aqui vai atualizar o nome depois de 3 segundos

// Class Name
let div3 = document.getElementsByClassName('do')[0].innerHTML = "<h1> div 3 atualizada </h1>" // pega pelo nome da Classe
                                                // tem que referenciar o índice
// com timeout
setTimeout(function(){
    let exDiv3 = document.getElementsByClassName('do')[0].innerHTML = "<h1> div 3 atualizada em segundos </h1>"
}, 3000) // aqui vai atualizar o nome depois de 3 segundos


// por TAG
document.getElementsByTagName('h4')[0].innerHTML = "h4 primeira tag atualizado com sucesso"
                                // tem que referenciar o índice, primeira tag h4 do html

document.getElementsByTagName('h4')[1].innerHTML = "h4 segunda tag atualizado com sucesso"
                                  // tem que referenciar o índice,  aqui eu to pegando a segunda tag h4 do html

document.getElementsByTagName('p')[0].innerHTML = "paragrafo 1 atualizado"
                                 // tem que referenciar o índice,  aqui eu to pegando a primeira tag p do html                 

document.getElementsByTagName('p')[1].innerHTML = "paragrafo 2 atualizado"
                                 // tem que referenciar o índice,  aqui eu to pegando a segunda tag p do html

// timeout
setTimeout(() => {
  let p2 = document.getElementsByTagName('p')[1].innerHTML = "paragrafo 2 atualizado em segundos"
}, 3000) // aqui vai atualizar o paragrafo depois de 3 segundos, aqui usei arroufunction ()=>, é o mesmo que função, só que mais simplificada


// DESESTRUTURING
const usuario = {
  nome: "miguel",
  idade: 20,
  profissao: "desenvolvedor",
}
// const {nome, profissao} = usuario // nao sei pq aqui quebra o codigo
console.log(usuario);

// Spread com arrays ...
const numeros = [1, 2, 3]
const maisNumeros = [4, 5, 6]
const total = [...numeros, ...maisNumeros]
console.log(total); // fará juntar todos os numeros em um Array só

// aqui eu criei outro usuario igual o lá de cima em DESESTRUTURING e apliquei as mesmas informações com o Spread ...
const usuario2 ={
  ...usuario,
  profissao: "banco de dados" // Alterei apenas a profissão
}
console.log(usuario2);




//                 // IMC
// function calcularImc() {
//     let inputPeso = document.getElementById('peso').value
//     let inputAltura = document.getElementById('altura').value

//     let peso = parseFloat(inputPeso.value) 
//     let altura = parseFloat(inputAltura.value)

//    let imc = peso / (altura*altura)

//     console.log(`imc = ${imc.toFixed(2)}`);
// }

// let divResultado = document.getElementById('resultado')
// divResultado.innerHTML = <h5 class=""> seu imc é + imc </h5>


const api_url = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=brl&ids=bitcoin&names=Bitcoin&symbols=btc'

async function buscarPrecos(){
const responde = await fetch(api_url)
const dados = await responde.json()

console.log(dados)
}

buscarPrecos()

//async await