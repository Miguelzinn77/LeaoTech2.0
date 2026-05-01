console.log('bem vido a aula 21');

function botao() {
    let div = document.getElementById('pcr').innerHTML = "<h1> rosalina </h1>"
    // console.log(div.classList.remove(''))
    // div.classList.add('arredondar')
div.classList.toggle('d-none')

}


let caixa2 = document.getElementById('caixa2')
caixa2.addEventListener("click", () => {
    caixa2.classList.remove('bg-danger') 
    caixa2.classList.add('bg-warning') //evento para mudar de cor da caixa 2 do HTML
})


// creatElementlet()
let btn2 = document.getElementById('btn2')
btn2.addEventListener('click', ()=> {
    let caixa3 = document.createElement('div')
    caixa3.classList.add('btn2', 'bg-warning')
    caixa3.innerHTML = "caixa3"

let containerCaixa = document.getElementById('containerCaixa')
containerCaixa.appendChild()
    console.log(caixa3)
    
})


let btnCep = document.getElementById('cep')
btnCep.addEventListener('click', () =>{
    
let cep = document.getElementById('cep')

fetch(`https://viacep.com.br/ws/${cep.value}/json/`).then((resp) => {
    return resp.json()
}).then((dados) => {
    console.log(dados)
    let divResposta = document.getElementById('resposta')

    divResposta.appendChild(paragrafos)
})
})