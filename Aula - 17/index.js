console.log('bem vindo à aula - 17');

// sistema de cadastro e guardar os dados em um array
// let cadastros = [
//     {
//         nome: 'Miguel',
//         telefone: '123456789',
//         cidade: 'Fortaleza',
//         profissao: 'Desenvolvedor'
//     },
//      {
//         nome: 'Luis',
//         telefone: '123456789',
//         cidade: 'Caucaia',
//         profissao: 'Administrador de banco de dados'
//     },
// ];

// let opcao = ''
// while (opcao !== '3') {
//     opcao = prompt('1 - Cadastrar\n2 - Listar\n3 - Sair \n4 - Deletar');
//     switch (opcao) {
//         case '1':
//             console.log('Cadastrar');
//             let cadastro = {}
//                 cadastro.nome = prompt('Digite o nome:'),
//                 cadastro.telefone = prompt('Digite o telefone:'),
//                 cadastro.cidade = prompt('Digite a cidade:'),
//                 cadastro.profissao = prompt('Digite a profissão:')
            
//             cadastros.push(cadastro);
//             break;
//         case '2':
//             console.log('Listar');
//             //for para percorrer o array de cadastros e exibir os dados
//             for (let i = 0; i < cadastro.length; i++) {
//                 console.log(`Nome: ${cadastro[i].nome}`);
//                 console.log(`Telefone: ${cadastro[i].telefone}`);
//                 console.log(`Cidade: ${cadastro[i].cidade}`);
//                 console.log(`Profissão: ${cadastro[i].profissao}`);
//             }
//             break;
//         case '3':
//             console.log('sair');
//             break;
//             //delete
//             case '4':
//                 console.log('deletar')
                 
//                 default:
//             console.log('Opção inválida');
//     }}



    //JSON - JavaScript Object Notation

    let pessoa = {
        nome: 'Miguel',
        idade: 18,
        cidade: 'Fortaleza',
        profissao: 'Desenvolvedor'
    }
    console.log(pessoa);

    let pessoa_json = '{"nome" : "miguel";"idade" : 18; }'
    console.log(pessoa_json);

    //tipos de dados em JSON
    //string, number, boolean, null, array, object

    //converter js para json
    let pessoaToJson = JSON.stringify(pessoa);
    console.log(pessoaToJson);

    //converter json para js
    pessoa_json = JSON.parse(pessoaToJson);
    console.log(pessoa_json);


    //fuuncao sem retorno e sem parametero
    function saudacao(){
  console.log('Olá, seja bem-vindo!');
    }
    saudacao();


function exibirNomes(ListaNomes){
    for(let i = 0; i < ListaNomes.length; i++){
        console.log(ListaNomes[i]);
    }
}
nome = ['Miguel', 'Luis', 'João'];
exibirNomes(nome);



function listaPessoas(ListaPessoas){
    console.log(`${ListaPessoas}, nome`)
}
listaPessoas()


    //funcao com retorno e sem parametro
    function somarNumero(num1, num2){
        return num1 + num2;
    }
    console.log(somarNumero(10, 10))

    //funcao com retorno e com parametro
    function saudacao3(nome, idade){
        return `Olá, bem vindo ${nome}, vejo que você tem ${idade} anos!`;
    }
    console.log(saudacao3('Miguel', 18));