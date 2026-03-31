// // console.log('olá mundo')
// // let x = 10
// // let y = 10

// // IMC = peso/altura
// // let peso = prompt('digite seu peso')
// // let altura = prompt('digite sua altura')
// // let imc = parseFloat(peso/altura);
// // console.log(parseFloat(imc));



// let x = 5
// let y = 5
// // igualdade
// console.log(x == y)
// // identico
// console.log(x === y)
// // diferente
// console.log(x != y)
// // maior que
// console.log(x > y)
// // menor que
// console.log(x < y)
// // maior ou igual
// console.log(x >= y)
// // menor que
// console.log(x <= y)


// let miguel = 10
// if (miguel > 10) {
//     console.log('hmmmmmmm')
// } else if (miguel = 0 ) {
//     console.log('nao é maior')
// } else {
//     console.log('pdc')
// }


//  IMC = peso/altura
let peso = prompt('digite seu peso')
let altura = prompt('digite sua altura')
let imc = parseFloat(peso/altura);

if (peso < 18.5) {
    console.log('seu imc é : ' + parseInt(imc) + 'kg, voce esta abaixo do peso')
} else if (peso > 25){
    console.log('seu imc é : ' + parseInt(imc) + 'kg, voce esta na faixa do peso');
} else if (peso <= 30) {
    console.log('seu imc é : ' + parseInt(imc) + 'kg, voce esta com sobrepeso')
} else if (peso <= 35) {
    console.log('seu imc é: ' + parseInt(imc) + 'kg, voce esta com obeso grau 1')
}  else if (peso < 40) {
    console.log('voce esta obeso grau 2')
} else {
    console.log('digite o peso/altura')
}

// console.log('seu peso é :' + parseFloat(imc));


