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
var texto = document.createTextNode('Conteudo do parágrafo')
novoParagrafo.appendChild(texto)
console.log(novoParagrafo) // improme no f12



var body = document.querySelector('body') // seleciona a body
// console.log(body) // imprime diretamente na body
body.appendChild(texto)


// let body = document.querySelector('body')
// let div = document.createElement('o Terror dos comedinha')
// body.appendChild(div)
// console.log(body)
