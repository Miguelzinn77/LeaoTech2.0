                // 5. QUESTÕES DE IF TERNÁRIO
let idade = parseInt(prompt("Digite sua idade:"));
let categoria = idade < 18 ? "Menor de idade" : "Maior de idade";
console.log('Você é: ' + categoria);

                // IMPAR OU PAR
let numeros = parseInt(prompt("Digite um número:"));
if (numeros % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
} 

                // NOTA MAIOR QUE 7
let nota = parseFloat(prompt("Digite sua nota:"));
if (nota > 7) {
    console.log("Sua nota é maior que 7, está aprovado.");
} else {
    console.log("Recuperação.");
}

                // NUMERO POSITIVO
let numero = parseFloat(prompt("Digite um número:"));
if(numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

                // PREÇO DO PRODUTO
let preco = parseFloat(prompt("Digite o preço do produto:"));
if (preco < 100) {
    console.log("Cuida preço de Favela.");
} else if (preco >= 100 && preco <= 130) {
    console.log("Tá no preço em.");
} else {
    console.log("Tá caro pô pensa que eu cago dinheiro é?");
}

                // QUESTÕES DE SWITCH
let cadastro = parseInt(prompt("Digite um número de 1 a 3 para cdaastro de usuario :"));
switch (cadastro) {
    case 1:
        console.log('Cadastro de usuário');
        break;
    case 2:
        console.log('Listar usuários');
        break;
    case 3:
        console.log('Sair do sistema');
        break;
        default:
        console.log("Opção inválida");
}

                // SWITCH DO MÊS
let mes = parseInt(prompt("Digite um número de 1 a 12 para representar um mês do ano:"));
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;    
    default:
        console.log("Mês inválido");
}

                // CLASSIFICAÇÃO DE ALUNOS
let letra = prompt("Digite uma letra entre A, B, C, ou D:");
switch (letra) {
    case "A":
        console.log("Letra A: Excelente desempenho.");
        break;
    case "B":
        console.log("Letra B: Bom desempenho.");
        break;
    case "C":
        console.log("Letra C: Desempenho regular.");
        break;
    case "D":
        console.log("Letra D: Desempenho insuficiente.");
        break;
    default:
        console.log("Conceito Inválido.");
}

                // SISTEMA DE ATENDIMENTO
let opcao = parseInt(prompt("Digite um número de 1 a 3 para escolher uma opção:\n1 - criar conta \n2 - fazer login \n3 - Recuperar senha" ));
switch (opcao) {
    case 1:
      var conta = prompt('crie o nome da sua conta')
      var email = prompt('digite seu e-mail')
      var senha = prompt('crie sua senha')
       // NAO SEI SE ESSE IF FUNCIONA MAS VAI ASSIM MESMO
      if (conta == true && email == true && senha == true) {
       console.log('usuario criado com sucesso!')
       } else if (conta == false || email == false || senha == false) {
         console.log('erro de cadastro')
       } else {
        console.log('Conta criada com sucesso para ' + conta)
       }
        break; 
    case 2:
        // FAZER LOGIN
        prompt('Digite seu e-mail')
        prompt('Digite sua senha:')
        console.log('Login com concluido')
        break;
    case 3:
        // RECUPERAR SENHA
       var login = prompt('Digite seu email')
       var acesso = prompt('Deseja receber código por email ou SMS?')
       if (login == true && acesso == true){
        console.log('Instruções enviadas');
       } else {
        console.log('tente novamente')
       }
        break;
    default:
        console.log('opção inválida')
}

                // SAQUE E DEPOSITO
let sistema = prompt('\n1 - consultar saldo \n2 - sacar \n3 - depositar');

switch (sistema) {
    case '1':
        console.log('Saldo ficticio é de R$ 1000');
        break;
    case '2':
        var valorSaque = parseFloat(prompt('Quanto quer sacar:'));
        // SE FOR MAIOR QUE MIL NAO SACA
        if (valorSaque > 1000) {
            console.log('Saldo insuficiente para saque.');
        } else {
            //CONCATENA COM O valorSaque
            console.log('Saque de R$ ' + valorSaque + ' realizado, nao use drogas.');
        }
        break;
    case '3':
        var valorDeposito = parseFloat(prompt('Quanto quer depositar:'));
        console.log('Depósito de R$ ' + valorDeposito + ' realizado.');
        break;
        default:
        console.log('Opção inválida');
}

                // REPETIR ATE QUE SAIA
let opcao = (prompt("Digite um número de 1 a 3 para escolher uma opção:\n1 - cadastrar usuario \n2 - Listar usuario \n3 - sair do sistema" ));

while (opcao !== 3) {
      switch (opcao) {
            case 1:
                  console.log('cadastro de usuario')
                  break;
            case 2:
                  console.log('Listar usuario')
                  break;
            case 3:
                  console.log('Sair do sistema')
                  break;
           default:
            console.log('sair')       
        }
        opcao = parseInt(prompt("Digite um número de 1 a 3 para escolher uma opção:\n1 - cadastrar usuario \n2 - Listar usuario \n3 - sair do sistema" ));
}

                // ATE 3 PEDIDOS COM FOR
let pedido = parseInt(prompt("Digite um número de 1 a 3 para escolher um pedido:\n1 - Pizza \n2 - Hambúrguer \n3 - Refrigerante" ));
for (let i = 0; i < 4; i++){
    // CONCATENA COM O PEDIDO DO PROMPT
      console.log('Pedidos realizados: ' + pedido);
}

                // COMPRA E PARCELAS
let compra = parseFloat(prompt('Digite o valor da compra:'));
let parcelas = parseInt(prompt('Digite o número de parcelas:'));
// DIVIDE A COMPRA PELA PARCELA
let valorParcela = compra / parcelas;
//CONCATENA COM O VALOR DA PARCELA, O TOFIXED SAO 2 CASAS DECIMAIS
console.log('Valor de cada parcela: R$ ' + valorParcela.toFixed(2));

                // CALCULAR TOTAL DE COMPRA 
let produtos = parseInt(prompt('Digite o número de produtos:'));
let totalCompra = 0;
for(let i = 0; i < produtos; i++) {
    // peça o preço do produto
    let precoProduto = parseFloat(prompt('Digite o valor do produto ' + (i + 1) + ':')); // i+1 incrementa o numero do precoProduto
    totalCompra += precoProduto;
}
console.log('Total da compra: R$ ' + totalCompra.toFixed(2)); // TOFIXED é duas casas decimais

                 // NOTA MAIOR QUE 7 
let nota = parseFloat(prompt("Digite a nota do aluno:"));
// variaveis para iniciar e guardar os reprovados e aprovados
let totalAprovados = 0;
let totalRecuperacao = 0;
if (nota > 7) {
    console.log("Aluno aprovado.");
    // aqui incrementa +1 nos aprovados
    totalAprovados++;
} else {
    console.log("Aluno em recuperação.");
    // aqui incrementa +1 na recuperação
    totalRecuperacao++;
}

                // LOGIN
    // senha fixa
let senha = 'miguel'
let tentativa = prompt('Digite a senha:');
// enquanto nao for a senha
while (tentativa !== senha) {
    console.log('Senha incorreta, tente novamente.');
    tentativa = prompt('Digite a senha:');
}
console.log('Acesso liberado');
 
            //CONFIRMAÇÃO
let resposta;
do {
    // aqui pede a resposta do prompt
    resposta = prompt('Deseja continuar? sim ou nao?:');
} while (resposta !== 'sim' && resposta !== 'nao');
    // aqui eu concateno com a variavel do prompt
console.log('Resposta : ' + resposta);

// menu de operacoes somar dois numeros e subtrair dois numeros e sair do sistema com do while e switch
let menu;
do {
    // aqui é o menu na variavel let
    menu = parseInt(prompt('Digite um número para escolher uma operação:\n1 - Somar dois números \n2 - Subtrair dois números \n3 - Sair do sistema'));
    // SWITCH para escolher os numeros
    switch (menu) {
        case 1:
            // TU É DOIDO DIONÍSIO JÁ É SETE DA NOITE E EU TO AQUI DESDE DE 9H DA MANHÃ JA HOMI
            var num1 = parseFloat(prompt('Digite o primeiro número:'));
            var num2 = parseFloat(prompt('Digite o segundo número:'));
            // aqui eu somo os numeros depois de ter declaradonas variaveis
            var soma = num1 + num2;
            console.log('A soma é: ' + soma);
            break;
        case 2:
            var num1 = parseFloat(prompt('Digite o primeiro número:'));
            var num2 = parseFloat(prompt('Digite o segundo número:'));
            // aqui eu tbm subtraio os numeros depois de ter declarado nas variaveis
            var subtracao = num1 - num2;
            console.log('A subtração é: ' + subtracao);
            break;
        case 3:
            // o 3 acho q seria so o default mas eu coloquei mesmo assim
            console.log('Saindo do sistema...');
            break;
        default:
            console.log('Sair.');
    }
} while (menu !== 3); // acho q acaba aq

