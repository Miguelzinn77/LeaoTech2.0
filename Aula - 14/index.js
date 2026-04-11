console.log("Bem vindo a aula - 14!");

// // IF TERNÁRIO
// let erro = false;
// let resultado = erro ? "Ocorreu um erro!" : "A operação foi bem sucedida!";
// console.log(resultado);

// // SWITCH CASE
// let dia = parseInt(prompt("Digite um número de 1 a 5 para representar um dia da semana:"));
// switch (dia) {
//     case 1:
//         console.log("Segunda-feira");
//         break;
//     case 2:
//         console.log("Terça-feira");
//         break;
//     case 3:
//         console.log("Quarta-feira");
//         break;
//     case 4:
//         console.log("Quinta-feira");
//         break;
//     case 5:
//         console.log("Sexta-feira");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;    
//     default:
//         console.log("Dia inválido");
// }

// ATV IF TERNÁRIO
// let idade = parseInt(prompt("Digite sua idade:"));
// let categoria = idade < 18 ? "Menor de idade" : "Maior de idade";
// console.log('Você é: ' + categoria);

// // IMPAR OU PAR
// let numero = parseInt(prompt("Digite um número:"));
// if (numero % 2 === 0) {
//     console.log("O número é par.");
// } else {
//     console.log("O número é ímpar.");
// }

// // NOTA MAIOR QUE 7
// let nota = parseFloat(prompt("Digite sua nota:"));
// if (nota > 7) {
//     console.log("Sua nota é maior que 7, está aprovado.");
// } else {
//     console.log("Recuperação.");
// }

// NUMERO POSITIVO
// let numero = parseFloat(prompt("Digite um número:"));
// if(numero > 0) {
//     console.log("O número é positivo.");
// } else if (numero < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é zero.");
// }

// PREÇO DO PRODUTO
// let preco = parseFloat(prompt("Digite o preço do produto:"));
// if (preco < 100) {
//     console.log("Preço de Favela.");
// } else if (preco >= 100 && preco <= 130) {
//     console.log("Tá no preço em.");
// } else {
//     console.log("Tá caro pô.");
// }

// SWITCH CASE
// let cadastro = parseInt(prompt("Digite um número de 1 a 3 para cdaastro de usuario :"));
// switch (cadastro) {
//     case 1:
//         console.log('Cadastro de usuário');
//         break;
//     case 2:
//         console.log('Listar usuários');
//         break;
//     case 3:
//         console.log('Sair do sistema');
//         break;
// }

// SWITCH CASE NOME DO MÊS
// let mes = parseInt(prompt("Digite um número de 1 a 12 para representar um mês do ano:"));
// switch (mes) {
//     case 1:
//         console.log("Janeiro");
//         break;
//     case 2:
//         console.log("Fevereiro");
//         break;
//     case 3:
//         console.log("Março");
//         break;
//     case 4:
//         console.log("Abril");
//         break;
//     case 5:
//         console.log("Maio");
//         break;
//     case 6:
//         console.log("Junho");
//         break;
//     case 7:
//         console.log("Julho");
//         break;
//     case 8:
//         console.log("Agosto");
//         break;
//     case 9:
//         console.log("Setembro");
//         break;
//     case 10:
//         console.log("Outubro");
//         break;
//     case 11:
//         console.log("Novembro");
//         break;
//     case 12:
//         console.log("Dezembro");
//         break;    
//     default:
//         console.log("Mês inválido");
// }

// CLASSIFICAÇÃO DE ALUNOS
// let letra = prompt("Digite uma letra entre A, B, C, ou D:");
// switch (letra) {
//     case "A":
//         console.log("Letra A: Excelente desempenho.");
//         break;
//     case "B":
//         console.log("Letra B: Bom desempenho.");
//         break;
//     case "C":
//         console.log("Letra C: Desempenho regular.");
//         break;
//     case "D":
//         console.log("Letra D: Desempenho insuficiente.");
//         break;
//     default:
//         console.log("Conceito Inválido.");
// }

// SISTEMA DE ATENDIMENTO
// let opcao = parseInt(prompt("Digite um número de 1 a 3 para escolher uma opção:\n1 - criar conta \n2 - fazer login \n3 - Recuperar senha" ));
// switch (opcao) {
//     case 1:
//       var conta = prompt('crie o nome da sua conta')
//       var email = prompt('digite seu e-mail')
//       var senha = prompt('crie sua senha')
//       if (conta == true && email == true && senha == true) {
//        console.log('usuario criado com sucesso!')
//        } else if (conta == false || email == false || senha == false) {
//          console.log('erro de cadastro')
//        } else {
//         console.log('Conta criada com sucesso para ' + conta)
//        }
//         break; 
//     case 2:
//         prompt('Digite seu e-mail')
//         prompt('Digite sua senha:')
//         console.log('Login com concluido')
//         break;
//     case 3:
//        var login = prompt('Digite nova senha')
//        var acesso = prompt('Confirme a senha')
//        if (login == true && acesso == true){
//         console.log('Senha recuperada');
//        } else {
//         console.log('tente novamente')
//        }
//         break;
//     default:
//         console.log('tente novamente')
// }

//  LOOP FOR
// let i = 0

// for (let i = 0; i < 10; i++){
//     console.log('o valor é: ' + i);
// }
// console.log(i)


// // WHILE
// let i = 0
// while (i <= 10){
//       console.log('tranquilidade')
//       i++;
// }


// DO WHILE
// let i = 10
// do{
//     console.log('pcr')
// } while (i < 10)




// // ATV repetir ate que saia do sistema
// let opcao = (prompt("Digite um número de 1 a 3 para escolher uma opção:\n1 - cadastrar usuario \n2 - Listar usuario \n3 - sair do sistema" ));

// while (opcao !== 3) {
//       switch (opcao) {
//             case 1:
//                   console.log('cadastro de usuario')
//                   break;
//             case 2:
//                   console.log('Listar usuario')
//                   break;
//             case 3:
//                   console.log('Sair do sistema')
//                   break;
//            default:
//             console.log('sair')       
// }
// let opcao = parseInt(prompt("Digite um número de 1 a 3 para escolher uma opção:\n1 - cadastrar usuario \n2 - Listar usuario \n3 - sair do sistema" ));
// }


// ATE 3 PEDIDOS COM LOOP FOR
let pedido = parseInt(prompt("Digite um número de 1 a 3 para escolher um pedido:\n1 - Pizza \n2 - Hambúrguer \n3 - Refrigerante" ));
for (let i = 0; i < 4; i++){
      console.log('Pedidos')
}