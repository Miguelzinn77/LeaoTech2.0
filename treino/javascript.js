console.log("Praticando");

//     0  1  2
let num = [0, 2, 4, 10, 20];
num[3] = 6; //adiciona no array na posição de indice 3, = [0, 2, 4, 6]
num[4] = 8;
console.log(num);

console.log(num.length); // contar o tanto de numeros que dentro do array, = 4

let num1 = [0, 2, 4, 10, 20];

for (i = 0; i < num1.length; i++) {
  console.log(`o numero é ${num1[i]}`);
  // o i incrementa +1 depois do outro.
}

// treinando FOR
const Miguel = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (i = 0; i < Miguel.length; i++) {
  console.log(`incrementando os numeros do array Miguel ${Miguel[i]}`);
}

// com FOR IN, mais simplificado
for (i in Miguel) {
  console.log(`incremente ${Miguel[i]}`);
}

let pcr = 0
while(pcr < 11){
    console.log(`Miguelzinn.CV ${pcr}`)
    pcr++;
};

// Criar algo na página
var novoParagrafo = document.createElement('p') //cria um parágrafo
var texto = document.createTextNode('Mc Negão Original')
novoParagrafo.appendChild(texto)
console.log(novoParagrafo) // improme no f12



var body = document.querySelector('body') // seleciona a body
// console.log(body) // imprime diretamente na body
body.appendChild(texto)


let ceara = document.createElement('div')
let time = document.createTextNode( "o Terror dos comedinha não gosta de viatura, sempre driblando a receita que quer uma fatia do bolo. ")
ceara.appendChild(time)
console.log(ceara)
body.appendChild(ceara) // appendChild é para mostrar na tela



// Pegando o formulário do HTML
const form = document.getElementById('form')

form.addEventListener('submit', event => {

let first = document.getElementById('firstName')
let last = document.getElementById('lastName')
let email = document.getElementById('Email')
console.log(first.value)
console.log(last.value)
console.log(email.value)

})

console.log(form)


// falar o nome no f12, treinando o this.
const miguel = {
  nome: 'Luis Miguel',
   falar(){ return this.nome; }
}
console.log(miguel.falar());

// Falar o nome da Gloria
const Gloria = {
  nome : 'Ashiley Gloria',
  falar(){ return this.nome }
}
console.log(Gloria.falar());

//Falar Ashiley
let Ash = {
  nome : 'Ashiley',
  falar(){ return this.nome }
}
console.log(Ash.falar());

//Falar Miguel
let Mig = {
  nome : 'Miguelzinn',
  falar(){ return this.nome }
}
console.log(Mig.falar());

// Falar Luís
let Luis = {
  nome : 'Luis', // uma virgula pode quebrar tudo kk
  falar(){ return this.nome }
}
console.log(Luis.falar());

// Falar Rosalina
let Rosalina = {
  nome : 'Rosalina',
  falar(){return this.nome}
}
console.log(Rosalina.falar())

// Falar Comando
let CMD = {
  nome : 'COMANDO',
  falar(){ return this.nome }
} 
console.log(CMD.falar());

// Falar tropa dol General
let tropa = {
  nome : 'Tropa do General',
  falar(){ return this.nome }
}
console.log(tropa.falar());

// FOR
let cv = ''
for(let cv = 0; cv <= 1; cv++){
  console.log(`comando vermelho`)
};


// Pegar a Data atual
let data = new Date()
console.log(data);

// Pegar o Ano atual
let ano = data.getFullYear()
console.log(ano);

// Pegar o Mes
let mes = data.getMonth()
console.log(mes)


