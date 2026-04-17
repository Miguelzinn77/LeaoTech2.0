console.log("Bem vndo a aula 18!");
// confirm('voce deseja continuar a aula ?')

function exibirMsgErro() {
  console.log("vc sera redirecionado para outra pagina");
}

exibirMsgErro();

//funcoes com parametros
function calcularNumeros(operacao, num1, num2) {
  let resultado;
  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    default:
      console.log("operação nao reconhecida");
  }
  console.log(`${num1}${operacao}${num2} = ${resultado}`);
}
calcularNumeros("+", 5, 6); // resultado

//formas de criar funcoes em JS
// funcao expressa

let soma = function (a, b) {
  return a + b;
};
console.log(`soma = ${soma(2, 5)}`);

//arrow functions
let subtrair = (a, b) => {
  return a - b;
};
console.log(subtrair(10, 2)); // igual a 8

// //funcao de callback
// function processar(funcaoCallBack){
//     console.log('processando algo...')
//     funcaoCallBack()
// }
// processar(() => {
//     console.log('callback executada')
// })
// setTimeout(() => {console.log('espere 2 segundos')}, 2000) // executa a funcao depois de 2 segundos

// IMC.
// function calcularIMC(peso, altura){
//     let imc = peso / (altura * altura)
//     return imc
// }
// let peso = parseFloat(prompt('Digite seu peso'));
// let altura = parseFloat(prompt('Digite sua altura'));
// console.log(calcularIMC(peso, altura))

function contarLetras(nome) {
  if (nome > 15) {
    console.log(`O nome ${nome} é muito longo`);
  } else {
    console.log(`O nome ${nome} tem ${nome.length} letras`);
  }
}
console.log(contarLetras('dionizio'));
