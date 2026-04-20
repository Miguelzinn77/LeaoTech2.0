console.log('Bem vinda a aula 19');


function enviarMensagem() {
    alert('Mensagem enviada com sucesso!');
} //puxa o enviar mensagem do HTML para o JS, para que quando clicar no botão, a mensagem seja enviada.

function dispararMensagem() {
    alert('click up!');
}

function eventosFormulario(tipo){
    if (tipo == 'foco'){
        console.log('focooo')
    } else if ( tipo == 'input') {
        console.log('recebeu dados') //quando o usuário digitar algo, vai aparecer no console a mensagem 'recebeu dados'
    } else if (tipo == 'change') {
        console.log('o elemento mudou') //quando o usuário sair do campo de input, vai aparecer no console a mensagem 'o elemento mudou'
    }
}

function enviarFormulariuo(e){
    e.preventDefault(); //impede o comportamento padrão do formulário, que é recarregar a página ao enviar os dados.
    console.log('formulário enviado') //quando o usuário clicar no botão de enviar, vai aparecer no console a mensagem 'formulário enviado'
}


// DOM - Document Object Model
// O DOM é uma representação em árvore de um documento HTML, onde cada elemento é um nó. Ele permite que os desenvolvedores acessem e manipulem os elementos HTML usando JavaScript. Com o DOM, é possível alterar o conteúdo, a estrutura e o estilo de uma página web dinamicamente, respondendo a eventos do usuário ou realizando outras ações programáticas.


console.log(document.getElementById('caixa-1')); //seleciona o elemento com o id 'caixa-1' no HTML e exibe no console.

console.log(document.getElementsByClassName('caixa-2')[0]); //seleciona todos os elementos com a classe 'caixa-2' no HTML e exibe no console. O [0] é usado para acessar o primeiro elemento da coleção retornada, já que getElementsByClassName retorna uma coleção de elementos.

console.log(document.getElementsByClassName('name')) //seleciona todos os elementos com a classe 'name' no HTML e exibe no console. Retorna uma coleção de elementos, mesmo que haja apenas um elemento com essa classe.

//seletor css
console.log(document.querySelector('#caixa-1')); //seleciona o elemento com o id 'caixa-1' usando um seletor CSS e exibe no console.

console.log(document.querySelectorAll('.caixa-2')); //seleciona todos os elementos com a classe 'caixa-2' usando um seletor CSS e exibe no console.

