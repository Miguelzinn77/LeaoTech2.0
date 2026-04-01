// // Laços de Repetição
// let idade = parseInt(prompt('digite sua idade'))
// if (idade < 12) {
//     console.log('criança')
// } else if (idade < 18){
//     console.log('adolescente')
// } else if (idade < 60){
//     console.log('adulto')
// } else {
//     console.log('idoso')
// }

// AND
// let idade = parseInt(prompt('digite sua idade'))
// let carteira = confirm('tem carteira de motorista ?')
// console.log(carteira, idade);

// if (idade >= 18 && carteira == true){
//     console.log('pode dirigir')
// } else {
//     console.log('não pde dirigir')
// }

// OU
// let profissao = prompt('digite sua profissao')

// let idade = parseInt(prompt('digite sua idade'))

// if (profissao == 'estudante' || profissao == 'professor' || idade < 18){
//     console.log('vc tem desconto');
// } else {
//     console.log('voce nao tem desconto')
// }

// SE NÃO !
// let logado = true
// if (!logado){
//     console.log('precisa logar')
// } else {
//     console.log('vc esta logado')
// }

                    // ATV 1
// let idade = parseInt(prompt('digite sua idade'))
// let ingresso = prompt('tem ingresso?')
// if (idade > 16 && ingresso == 'sim'){
//     console.log('pode entrar')
// } else {
//     console.log('nao pode entrar')
// }
                    //   ATV 2
// let nome = prompt('Digite seu nome')
// let senha = prompt('digite sua senha')
// if (nome == 'admin' && senha == 'admin123'){
//     console.log('pode entrar')
// } else {
//     console.log('senha incorreta')
// }

                    // ATV 3
// let valor = parseInt(prompt('digite o valor da compra'))
// let cliente = confirm('tem acesso vip ?')
// if(valor >= 1000 ){
//     console.log('voce ganhou frete grátis')
// } else {
//     console.log('até a próxima')
// }

                    //  ATV 4
// let senha = true
// if (!senha){
//     console.log('senha incorreta')
// } else {
//     console.log('voce precisa logar')
// }

                     // ATV 5
// let idade = parseInt(prompt('digite sua idade'))
// let convite = prompt('voce tem convite ?')
// if(idade >= 16 && convite == 'sim'){
//     console.log('Entrada Liberada')
// } else {
//     console.log('Entrada Proibida')
// }

                    //  ATV 6
// let compra = parseInt(prompt('digite o valor da compra'))
// let vip = true
// let cupom = false
// if(compra >= 100 || vip == true || cupom == true){
//     console.log('ganha desconto')
// } else {
//     console.log('sem desconto')
// }

                    // ATV 7
let salario = parseInt(prompt('digite seu salario'))
let score = prompt('score do serasa kkkk')
let cliente = confirm('É cliente antigo com agente ?')
let clienteAntigo = true
if (salario >= 2000 && score >= 700 && clienteAntigo == true){
    console.log('Empréstimo Liberado')
} else {
    console.log('Empréstimo Negado')
}