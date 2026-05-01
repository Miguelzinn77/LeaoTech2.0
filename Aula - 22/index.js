console.log("bem vindo aula 22");

function lognumero() {
  const inputCep = document.getElementById("cep");
  let cep = inputCep.value
  // console.log(`O numero foi: ${input.value.length}`);
  //para contar o numero de vezes que foi digitado o numero no cep

if (cep.length == 8){
    
    let url = `https://viacep.com.br/ws/${cep}/json/`
  
    fetch (url)
    .then((resp) => {
        return resp.json()
    })
    .then(dados => {
        let inputRua = document.getElementById('cep')
        console.log(dados)
        inputRua.value = dados.cep
        inputRua.setAttribute('disabled', 'disabled')
        
         let inputLogradouro = document.getElementById('rua')
        console.log(dados)
        inputRua.value = dados.rua
        inputRua.setAttribute('disable', 'disable') 

        let inputEstado = document.getElementById('estado')
        console.log(dados)
        inputRua.value = dados.estado
        inputRua.setAttribute('disable', 'disable')

        let inputRegiao = document.getElementById('regiao')
        console.log(dados)
        inputRua.value = dados.regiao
        inputRua.setAttribute('disable', 'disable')
    })
      .catch(()=>{
        console.log('erro')
      })    
}}

let a = '22'


try {
    
} catch(cachorro) {
    console.log(`o erro foi ${cachorro}`)
}




// BUSCAR API
function buscarApi(){
  
  
  let idBusca = document.getElementById('number').value
  const url = `https://fakestoreapi.com/products/${idBusca}`
  fetch(url).then((resp) => {
    return resp.json()
  })
  .then((dados) => {
    inputNumero = document.getElementById('number')
    console.log(dados)
  })
}