const prompt = require("prompt-sync")();
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

async function inserirAutor(){

let nome = prompt('digite o nome do autor:')
let nacionalidade = prompt('digite a nancionaldade:')

let novoAutor = {
    // nome da esquerda é o nome do banco, na direita é o nome da função
    nome: nome,
    nacionalidade: nacionalidade,
}

const { data, error } = await supabase.from('biblioteca_autor').insert(novoAutor).select()

console.log(data)
console.log(error)

}
inserirAutor()

async function novoLivro(){

let titulo = prompt('digite o titulo do Livro: ')
let quantidade = parseInt(prompt('digite a quantidade: '))
let genero = prompt('digite o genero do livro: ')
let id_autor = parseInt(prompt('digite o id do autor: '))

let novoLivro = {
    // nome da esquerda é o nome do banco, na direita é o nome da função
    titulo:titulo,
    quantidade:quantidade,
    genero:genero,
    id_autor:id_autor
}

const { data, error } = await supabase.from('biblioteca_livro').insert(novoLivro).select()

console.log(data)
console.log(error)

}
novoLivro()

async function novoUsuario() {
  let nome = prompt("digite a nome: ");
  let telefone = prompt("digite o telefone: ");
  let endereco = prompt("endereço: ");
  let cpf = prompt("digite o cpf: ");

  let novoUsuario = {
    // nome da esquerda é o nome do banco, na direita é o nome da função
    nome: nome,
    telefone: telefone,
    endereco: endereco,
    cpf: cpf,
  };

  const { data, error } = await supabase
    .from("biblioteca_usuarios")
    .insert(novoUsuario)
    .select();

  console.log(data);
  console.log(error);
}
novoUsuario();

async function novoPerfil() {
  let bio = prompt("digite a bio: ");
//   let preferencias = prompt("digite a preferencias: ");
  let id_usuario = prompt("digite o id_usuario: ");
  let foto = prompt('foto: ')

  let novoPerfil = {
    // nome da esquerda é o nome do banco, na direita é o nome da função
    foto:foto,
    bio: bio,
    // preferencias: preferencias,
    id_usuario: id_usuario

  }

  const { data, error } = await supabase
    .from("biblioteca_perfil")
    .insert(novoPerfil)
    .select()

  console.log(data)
  console.log(error)
}
novoPerfil();

async function novoEmprestimo() {
  let id_livro = prompt("digite o id_livro: ");
  let id_usuario = prompt("digite o id_usuario: ");
  let data_entrega = prompt('digite a data_entrega: ')
  let data_devolucao = prompt('digite a devolução: ')

  let novoEmprestimo = {
    // nome da esquerda é o nome do banco, na direita é o nome da função
    id_livro:id_livro,
    id_usuario: id_usuario,
    data_entrega: data_entrega,
    data_devolucao: data_devolucao
  }

  const { data, error } = await supabase
    .from("biblioteca_emprestimo")
    .insert(novoEmprestimo)
    .select()

  console.log(data)
  console.log(error)
}
novoEmprestimo();

inserirAutor

async function listarLivros() {
  const { data, error } = await supabase
    .from("biblioteca_livro")
    .select("titulo,genero,  biblioteca_autor(nome, nacionalidade)");
  console.log(data);
  console.log(error);

  data.forEach((livro) => {
    console.log(
      `titulo: ${livro.titulo} - ${livro.biblioteca_autor.nome}, genero: ${livro.genero}`,
    );
  });
}
listarLivros();


async function atualizarAutor(id){

let nome = prompt('')
let nacionalidade = prompt('')

}

