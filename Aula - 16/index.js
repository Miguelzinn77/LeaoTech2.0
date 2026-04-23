console.log("Bem vindo a aula 16");

// do while, sistema de operação simples sim ou nao, para sair do sistema
// enquanto for NAO fica repetindo
// let resp = 'sim';
// do {
//     resp = prompt('Deseja continuar? (sim ou nao)');
// } while (resp === 'sim');

// console.log('Sistema encerrado');

// // enquanto for NAO fica repetindo
// let resposta = 'nao';
// do {
//     resposta = prompt('Deseja continuar ? (sim ou nao)')
// } while (resposta === 'nao');
// console.log('sistema encerrado')

// let precos = []; // para armazenar no array mais a frente
// let preco = null;

// for (let i = 0; i < 5; i++) {
//   preco = parseFloat(prompt("Digite o preço do produto: "));
//   precos.push(preco);
// }
// // somar os preços
// let soma = 0;
// for (let i = 0; i < precos.length; i++) {
//   soma += precos[i];
// }
// console.log("A soma dos preços é: " + soma);



// crie um sistema para cadastar uma lista de convidado , usuario tera duas opcoes, cadastrar e sair, depois de cadastrar todos os usuarios, crie um programa que peça para o usuario digitar seu nome e veja se ele esta na lista de usuarios, se tiver boas vindas, se nao tiver diga que nao foi convidado

// let convidados = [];
// let opcao = null;
// do {
//     opcao = prompt("Digite 'cadastrar' para cadastrar um convidado ou 'sair' para encerrar o cadastro: ");
//     if (opcao === 'cadastrar') {
//         let nome = prompt("Digite o nome do convidado: ");
//                 // push para colocar nome do convidado no array
//         convidados.push(nome); //adiciona nome no array
//     }
//                 //enquanto a opcao nao for sair
// } while (opcao !== 'sair' || opcao === 'cadastrar');

//                 //verificar se ele esta na lista
// let conferirNome = prompt("Digite seu nome para verificar se você está na lista de convidados: ");
//                 //includes confere o nome
// switch (convidados.includes(conferirNome)) {
//     case true:
//         console.log("Bem-vindo, " + conferirNome + "!");
//         break;
//     case false:
//         console.log("Desculpe, " + conferirNome + ", você não foi convidado.");
//         break;
// }

// objetos javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2026,
  pneu: {
    marca: "Pirelli",
    modelo: "PZero",
    tamanho: 17,
  },
};
console.log(carro);
console.log(carro.pneu.marca); //acessar o pneu do carro e a marca do pneu
// adiciona no array de objeto do carro
carro.hibrido = false;
console.log(carro);

// se quiser deletrar um item do objeto
delete carro.hibrido;
console.log(carro); //remove o hibrido do objeto carro

let pessoa = {};

// pessoa.nome = 'Maria'
// pessoa.cpf = '32132132121'
// pessoa.cidade = "Fortaleza"
// pessoa.idade = 25

// console.log('Cadastro Relaizado com sucesso')

// for(let chave in pessoa){
//     console.log(`${chave} = ${pessoa[chave]}`)
// }

// let pessoas = []

// pessoa1 = {
//     nome:'Maria',
//     idade:25,
//     cidade:'Fortaleza',
//     cpf:'3321321321'
// }
// pessoa2 = {
//     nome:'Jessica',
//     idade:29,
//     cidade:'Fortaleza',
//     cpf:'555555555'
// }
// pessoa3 = {
//     nome:'Mateus',
//     idade:30,
//     cidade:'Maracanaú',
//     cpf:'666666666'
// }

// pessoas.push(pessoa1)
// pessoas.push(pessoa2)
// pessoas.push(pessoa3)

// for(let i = 0; i < pessoas.length; i++){
//     console.log(`Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}, Cidade: ${pessoas[i].cidade}, CPF: ${pessoas[i].cpf}`)
// }

// ATIVIDADE Objetos

// 3. controle de funcionario
//   let nome = prompt('digite seu nome')
//   let cargo = prompt('digite seu cargo')
//   let salario = prompt('digite seu salário')
//   let qtdFaltas = prompt('')

//   7. sistema de estoque
// let produto1 = {
//   nome: "chocolate",
//   preco: 10.0,
//   quantidade: 100,
// };
// let produto2 = {
//   nome: "biscoito",
//   preco: 5.0,
//   quantidade: 2,
// };
// let produto3 = {
//   nome: "pipoca",
//   preco: 3.0,
//   quantidade: 200,
// };
// let produtos = [];
// produtos.push(produto1);
// produtos.push(produto2);
// produtos.push(produto3);
// for (let i = 0; i < produtos.length; i++) {
//   console.log(
//     `Produto: ${produtos[i].nome}, Preço: ${produtos[i].preco}, Quantidade: ${produtos[i].quantidade}`,
//   );
// }
// if (produtos[0].quantidade < 5) {
//   console.log(`O produto ${produtos[0].nome} está com estoque baixo.`);
// }