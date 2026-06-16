const prompt = require("prompt-sync")();
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();
const bcrypt = require("bcrypt"); // bcrypt, para criptografar a senha(brabo de quebrar viu)
const express = require("express");
const app = express();
app.use(express.json());
const api_key = process.env.api_key

// function verificarChave(chaveRecebida){

// if(chaveRecebida != api_key){
//   return ({"msg": "api invalida"})
// }

// }


const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);


// app.post('/cadastrarusuario', async (req, res) => {
//   console.log(req.body)
//   const dados = req.body
//   const resultado = await novoUsuario(dados)
//   console.log(resultado)
//   res.send(resultado)
// })

// // endpoint cadastrar autor
// app.post('/cadastrarautor', async (req, res) => {
//   console.log(req.body)
//   const autor = req.body
//   const fim = await inserirAutor(autor)
//   console.log(fim)
//   res.send(fim)
// })

// async function inserirAutor(autor) {
//   let nome = autor.nome
//   let nacionalidade = autor.nacionalidade

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
// // inserirAutor()

// // async function novoLivro(){

// // let titulo = prompt('digite o titulo do Livro: ')
// // let quantidade = parseInt(prompt('digite a quantidade: '))
// // let genero = prompt('digite o genero do livro: ')
// // let id_autor = parseInt(prompt('digite o id do autor: '))

// // let novoLivro = {
// //     // nome da esquerda é o nome do banco, na direita é o nome da função
// //     titulo:titulo,
// //     quantidade:quantidade,
// //     genero:genero,
// //     id_autor:id_autor
// // }

// // const { data, error } = await supabase.from('biblioteca_livro').insert(novoLivro).select()

// // console.log(data)
// // console.log(error)

// // }
// // novoLivro()

// async function novoUsuario(dados) {
//   let nome = dados.nome
//   let telefone = dados.telefone
//   let endereco = dados.endereco
//   let cpf = dados.cpf
//   let senha = dados.senha
//   let tipo = dados.tipo

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
// // novoUsuario();

// // async function logarSistema() {
// //   console.log(" ===== login ===== ");
// //   const cpf = prompt("digite seu cpf:");
// //   const senha = prompt("digite sua senha:");

// //   const { data, error } = await supabase
// //     .from("biblioteca_usuarios")
// //     .select("*")
// //     .eq("cpf", cpf);

// //   if (error) {
// //     console.log("usuario nao encontrado");
// //     return;
// //   }
// //   const senhaCorreta = await bcrypt.compare(senha, data[0].senha);
// //   if (senhaCorreta) {
// //     return data[0];
// //   } else {
// //     return false;
// //   }
// //   console.log(senhaCorreta);
// // }
// // logarSistema()
// // async function novoPerfil() {
// //   let bio = prompt("digite a bio: ");
// // //   let preferencias = prompt("digite a preferencias: ");
// //   let id_usuario = prompt("digite o id_usuario: ");
// //   let foto = prompt('foto: ')

// //   let novoPerfil = {
// //     // nome da esquerda é o nome do banco, na direita é o nome da função
// //     foto:foto,
// //     bio: bio,
// //     // preferencias: preferencias,
// //     id_usuario: id_usuario

// //   }

// //   const { data, error } = await supabase
// //     .from("biblioteca_perfil")
// //     .insert(novoPerfil)
// //     .select()

// //   console.log(data)
// //   console.log(error)
// // }
// // // novoPerfil();

// // async function novoEmprestimo() {
// //   let id_livro = prompt("digite o id_livro: ");
// //   let id_usuario = prompt("digite o id_usuario: ");
// //   let data_entrega = prompt('digite a data_entrega: ')
// //   let data_devolucao = prompt('digite a devolução: ')

// //   let novoEmprestimo = {
// //     // nome da esquerda é o nome do banco, na direita é o nome da função
// //     id_livro:id_livro,
// //     id_usuario: id_usuario,
// //     data_entrega: data_entrega,
// //     data_devolucao: data_devolucao
// //   }

// //   const { data, error } = await supabase
// //     .from("biblioteca_emprestimo")
// //     .insert(novoEmprestimo)
// //     .select()

// //   console.log(data)
// //   console.log(error)
// // }
// // novoEmprestimo();

// // // inserirAutor

// // data.forEach((livro) => {
// //   console.log(
// //     `titulo: ${livro.titulo} - ${livro.biblioteca_autor.nome}, genero: ${livro.genero}, quantidade: ${livro.quantidade}`,
// //   );
// // });

// // // listarLivros();

// // // async function atualizarAutor(id){

// // // let nome = prompt('')
// // // let nacionalidade = prompt('')

// // // }

// // async function menu() {
// //   console.log("===== Menu =====");
// //   console.log("1 - cadastar usuario");
// //   console.log("2 - logar no sistema");
// //   console.log("3 - Novo Autor");

// //   const opcao = prompt("Escolha uma opcao:");
// //   while (opcao !== "0") {
// //     switch (opcao) {
// //       case "1":
// //         novoUsuario();
// //         break;
// //       case "2":
// //         let usuario = await logarSistema();
// //         if (usuario) {
// //           console.log(`Bem vindo ${usuario.nome}`);
// //           if (usuario.tipo == "cliente") {
// //             console.log("===== Menu =====");
// //             console.log("1 - listar livros");
// //             console.log("0 - sair");
// //             //
// //           let seCliente = prompt("digite uma opcao");
// //           if (seCliente !== "0") {
// //             switch (seCliente) {
// //               case "1":
// //                 await listarLivros();
// //                 break;
// //               default:
// //             }
// //             console.log("1 - Listar Livros");
// //             console.log("0 - Sair");
// //             seCliente = prompt("Escolha uma opção: ");
// //           }
// //         }
// //       }
// //     }
// //   }
// // }
// // menu();

// // async function atualizarRegistros(id) {
// //   let nome = prompt(" Digite seu nome: ");
// //   let cpf = prompt(" Digite seu CPF: ");
// //   let telefone = prompt(" Digite seu número de telefone: ");
// //   let endereco = prompt(" Digite seu endereço: ");
// //   let senha = prompt(" Digite sua senha: ");

// //   let atualizarRegistros = {
// //     nome: nome,
// //     cpf: cpf,
// //     telefone: telefone,
// //     endereco: endereco,
// //     senha: senha,
// //   };
// //   const { data, error } = await supabase
// //     .from("biblioteca_usuarios")
// //     .update(nome, cpf, telefone, endereco, senha)
// //     .eq(id);
// //   if (error) {
// //     console.log(error);
// //   console.log(
// //     `nome: ${id.nome}, cpf: ${id.cpf}, telefone: ${id.telefone}, endereco: ${id.endereco}, senha: ${id.senha}`,
// //   );
// // });
// // }
// // atualizarRegistros();

// // word express, npm install express, npm install nodemon, npm install dotenv, npm install bcrypt, npm install @supabase/supabase-js

// app.get("/listarlivros", async (req, res) => {
//   const { data, error } = await supabase
//     .from("biblioteca_livro")
//     .select("titulo,genero,  biblioteca_autor(nome, nacionalidade)");

//   console.log(data);
//   console.log(error);

//   res.json(data);
// });

// app.get("/listarlivros/:genero/:id", async (req, res) => {
//   console.log(req.params);
//   console.log(req.params.id);
//   console.log(req.params.genero);
//   id = req.params.id;
//   const { data, error } = await supabase
//     .from("biblioteca_livro")
//     .select("*")
//     .eq("id", id);
//   if (error) {
//     res.send(`Erro: ${error}`);
//     return;
//   }
//   if (data.length > 0) {
//     res.json(data[0]);
//   } else {
//     res.send("Livro não encontrado");
//   }
//   res.send("Livro encontrado!");
// });

// //localhost:3000/buscarlivro?titulo=mopinha
// app.get("/buscarlivro", async (req, res) => {
//   console.log(req.query);
//   const titulo = req.query.titulo
//    const { data, error } = await supabase
//     .from("biblioteca_livro")
//     .select('*').ilike('titulo', `%${titulo}%` )

//    if (error) {
//     res.send(`Erro: ${error}`);
//     return;
//   }
//   if (data.length > 0) {
//     res.json(data[0]);
//   } else {
//     res.send("Livro não encontrado");
//   }
//   res.send("Livro encontrado!");

//   res.send("Parametros recebidos");
// });

// // GET -> BUSCAR INFORMAÇÕES
// // ATIVIDADE BUSCAR TODOS OS AUTORES
// app.get('/buscarautor', async (req, res) => {
//   console.log(req.query)

// const nome = req.query.nome
// const { data, error } = await supabase
//     .from("biblioteca_autor")
//     .select('*').ilike('nome', `%${nome}%`)

//       if (error) {
//     res.send(`Erro: ${error}`);
//     return;
//   }

// if (data.length > 0){
//    res.json(data);
// } else {
//   res.send('autor nao encontrado')
// }

// })

// // BUSCAR AUTOR PELO ID
// app.get('/buscarautor/:id', async (req, res) => {
//   console.log(req.query)
//   console.log(req.params.id);
//   id = req.params.id;
//   // const nome = res.query.nome
//   const { data, error } = await supabase
//     .from("biblioteca_autor")
//     .select('*').eq('id', id)

//     if (error) {
//     res.send(`Erro: ${error}`);
//     return;
//     }

//     if (data.length > 0){
//       res.json(data);
//     } else {
//       res.send('usuario nao encontrado')
//     }

// })

// // BUESCAR PELO NOME E NACIONALIDADE
// app.get('/buscarautor/:nome/:nacionalidade', async (req, res) => {
//   console.log(req.query)
//   console.log(req.params.nome);
//   console.log(req.params.nacionalidade);
//   id = req.params.nome;
//   id = req.params.nacionalidade;

//   const { data, error } = await supabase
//     .from("biblioteca_autor")
//     .select('*').eq('id', id, 'nacionalidade', nacionalidade)

//     if (error) {
//     res.send(`Erro: ${error}`);
//     return;
//     }

//     if (data.length > 0){
//       res.json(data);
//     } else {
//       res.send('usuario nao encontrado')
//     }
// })

app.get("/listarlivro", async (req, res) => {
  const chaveRecebida = req.headers[api_key]
  console.log(chaveRecebida)
  const { data, error } = await supabase.from("biblioteca_livro").select("*");

  if (error) {
    console.log(error);
    res.json(error);
  }
});

app.post("/cadastrarlivro", async (req, res) => {
  console.log(req.body);
  const { data, error } = await supabase
    .from("biblioteca_livro")
    .insert(req.body)
    .select();

  if (error) {
    console.log(error);
  }
  res.json(data);
});

app.put("/atualizarlivro/:id_livro", async (req, res) => {
  const id_livro = req.params.id_livro;
  const atualizacoes = req.body;
  const { data, error } = await supabase
    .from("biblioteca_livro")
    .update(atualizacoes)
    .eq('id', id_livro); // id do livro

  if (error) {
    console.log(error);
    res.send(error);
    return;
  }
  console.log(data);
  res.send(data);
});

app.path("/");

app.listen(3000, () => {
  // res.send('Servidor rodando')
  console.log("acesse o site em: http://localhost:3000");
});
