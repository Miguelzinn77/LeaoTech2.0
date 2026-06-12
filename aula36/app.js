const prompt = require("prompt-sync")();
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();
const bcrypt = require("bcrypt"); // bcrypt, para criptografar a senha(brabo de quebrar viu)
const express = require('express')
const app = express()

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);
// async function inserirAutor() {
//   let nome = prompt("digite o nome do autor:");
//   let nacionalidade = prompt("digite a nancionaldade:");

//   let inserirAutor = {
//     // nome da esquerda é o nome do banco, na direita é o nome da função
//     nome: nome,
//     nacionalidade: nacionalidade,
//   };
//   const { data, error } = await supabase
//     .from("biblioteca_autor")
//     .insert(inserirAutor)
//     .select();

//   error ? console.log(error) : console.log("dados inseridos com sucesso");

//   console.log(data);
//   console.log(error);
// }
// inserirAutor()

// async function novoLivro(){

// let titulo = prompt('digite o titulo do Livro: ')
// let quantidade = parseInt(prompt('digite a quantidade: '))
// let genero = prompt('digite o genero do livro: ')
// let id_autor = parseInt(prompt('digite o id do autor: '))

// let novoLivro = {
//     // nome da esquerda é o nome do banco, na direita é o nome da função
//     titulo:titulo,
//     quantidade:quantidade,
//     genero:genero,
//     id_autor:id_autor
// }

// const { data, error } = await supabase.from('biblioteca_livro').insert(novoLivro).select()

// console.log(data)
// console.log(error)

// }
// novoLivro()

// async function novoUsuario() {
//   let nome = prompt("digite a nome: ");
//   let telefone = prompt("digite o telefone: ");
//   let endereco = prompt("endereço: ");
//   let cpf = prompt("digite o cpf: ");
//   let senha = prompt("insira a senha");
//   let tipo = prompt("digite o tipo");

//   const saltRounds = 10; // nivel de criptografia na senha
//   let senhaCrip = await bcrypt.hash(senha, saltRounds); // nivel de criptografia na senha

//   let novoUsuario = {
//     // nome da esquerda é o nome do banco, na direita é o nome da função
//     nome: nome,
//     telefone: telefone,
//     endereco: endereco,
//     cpf: cpf,
//     senha: senhaCrip, // criptografia da senha
//     tipo: tipo,
//   };

//   const { data, error } = await supabase
//     .from("biblioteca_usuarios")
//     .insert(novoUsuario)
//     .select();

//   error ? console.log(error) : console.log("dados inseridos com sucesso");

//   console.log(data);
//   console.log(error);
// }
// novoUsuario();

// async function logarSistema() {
//   console.log(" ===== login ===== ");
//   const cpf = prompt("digite seu cpf:");
//   const senha = prompt("digite sua senha:");

//   const { data, error } = await supabase
//     .from("biblioteca_usuarios")
//     .select("*")
//     .eq("cpf", cpf);

//   if (error) {
//     console.log("usuario nao encontrado");
//     return;
//   }
//   const senhaCorreta = await bcrypt.compare(senha, data[0].senha);
//   if (senhaCorreta) {
//     return data[0];
//   } else {
//     return false;
//   }
//   console.log(senhaCorreta);
// }
// logarSistema()
// async function novoPerfil() {
//   let bio = prompt("digite a bio: ");
// //   let preferencias = prompt("digite a preferencias: ");
//   let id_usuario = prompt("digite o id_usuario: ");
//   let foto = prompt('foto: ')

//   let novoPerfil = {
//     // nome da esquerda é o nome do banco, na direita é o nome da função
//     foto:foto,
//     bio: bio,
//     // preferencias: preferencias,
//     id_usuario: id_usuario

//   }

//   const { data, error } = await supabase
//     .from("biblioteca_perfil")
//     .insert(novoPerfil)
//     .select()

//   console.log(data)
//   console.log(error)
// }
// // novoPerfil();

// async function novoEmprestimo() {
//   let id_livro = prompt("digite o id_livro: ");
//   let id_usuario = prompt("digite o id_usuario: ");
//   let data_entrega = prompt('digite a data_entrega: ')
//   let data_devolucao = prompt('digite a devolução: ')

//   let novoEmprestimo = {
//     // nome da esquerda é o nome do banco, na direita é o nome da função
//     id_livro:id_livro,
//     id_usuario: id_usuario,
//     data_entrega: data_entrega,
//     data_devolucao: data_devolucao
//   }

//   const { data, error } = await supabase
//     .from("biblioteca_emprestimo")
//     .insert(novoEmprestimo)
//     .select()

//   console.log(data)
//   console.log(error)
// }
// novoEmprestimo();

// // inserirAutor

app.get('/listarlivros', async (req, res) =>{
 const { data, error } = await supabase
    .from("biblioteca_livro")
    .select("titulo,genero,  biblioteca_autor(nome, nacionalidade)");

    // console.log(data);
    // console.log(error);

    res.jason(data)
});
 

  // data.forEach((livro) => {
  //   console.log(
  //     `titulo: ${livro.titulo} - ${livro.biblioteca_autor.nome}, genero: ${livro.genero}, quantidade: ${livro.quantidade}`,
  //   );
  // });

// // listarLivros();

// // async function atualizarAutor(id){

// // let nome = prompt('')
// // let nacionalidade = prompt('')

// // }

// async function menu() {
//   console.log("===== Menu =====");
//   console.log("1 - cadastar usuario");
//   console.log("2 - logar no sistema");
//   console.log("3 - Novo Autor");

//   const opcao = prompt("Escolha uma opcao:");
//   while (opcao !== "0") {
//     switch (opcao) {
//       case "1":
//         novoUsuario();
//         break;
//       case "2":
//         let usuario = await logarSistema();
//         if (usuario) {
//           console.log(`Bem vindo ${usuario.nome}`);
//           if (usuario.tipo == "cliente") {
//             console.log("===== Menu =====");
//             console.log("1 - listar livros");
//             console.log("0 - sair");
//             //
//           let seCliente = prompt("digite uma opcao");
//           if (seCliente !== "0") {
//             switch (seCliente) {
//               case "1":
//                 await listarLivros();
//                 break;
//               default:
//             }
//             console.log("1 - Listar Livros");
//             console.log("0 - Sair");
//             seCliente = prompt("Escolha uma opção: ");
//           }
//         }
//       }
//     }
//   }
// }
// menu();

// async function atualizarRegistros(id) {
//   let nome = prompt(" Digite seu nome: ");
//   let cpf = prompt(" Digite seu CPF: ");
//   let telefone = prompt(" Digite seu número de telefone: ");
//   let endereco = prompt(" Digite seu endereço: ");
//   let senha = prompt(" Digite sua senha: ");

//   let atualizarRegistros = {
//     nome: nome,
//     cpf: cpf,
//     telefone: telefone,
//     endereco: endereco,
//     senha: senha,
//   };
//   const { data, error } = await supabase
//     .from("biblioteca_usuarios")
//     .update(nome, cpf, telefone, endereco, senha)
//     .eq(id);
//   if (error) {
//     console.log(error);
;  // data.forEach((id) => {
  //   console.log(
  //     `nome: ${id.nome}, cpf: ${id.cpf}, telefone: ${id.telefone}, endereco: ${id.endereco}, senha: ${id.senha}`,
  //   );
  // });
// }
// atualizarRegistros();


// word express, npm install express, npm install nodemon, npm install dotenv, npm install bcrypt, npm install @supabase/supabase-js
app.listen(3000, ()=> {
  console.log('olá mundo')
})