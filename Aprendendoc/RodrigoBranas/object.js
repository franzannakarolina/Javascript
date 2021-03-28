//Um objeto é uma coleção dinâmica de chaves e valores de qualquer tipo de dado
//É possivel adicionar ou remover propriedades a qualquer momento.

//o que diferem já que vc tem a instancia a ação de uma classe, então é o resultado a sensação é criação de um objeto

var pessoa = {}; //basta abrir e fechar chaves que é a criação de um novo objeto

var pessoa = {
  //adicionando propriedades ao objeto
  nome: "João",
  idade: 20,
  telefone: null,
  endereco: {
    logradouro: "Av.Brasil",
    numero: 70,
    bairro: "Centro",
  },
};

pessoa.nome = "João";
pessoa["nome"] = "João";
pessoa.endereco.bairro = "Centro";
pessoa["endereco"]["bairro"] = "Centro";
pessoa.endereco["bairro"] = "Centro";
pessoa.telefone = null;
pessoa.peso = undefined;

//ex 2:
// > pessoa.telefone = "9999-9999";
// '9999-9999'
// > pessoa
// { nome: 'Pedro Silva', idade: 22, telefone: '9999-9999' }
// > pessoa.cor dos olhos
// pessoa.cor dos olhos
//            ^^^

// Uncaught SyntaxError: Unexpected identifier
// > pessoa["cor dos olhos"] = "azul";
// 'azul'
// > pessoa
// {
//   nome: 'Pedro Silva',
//   idade: 22,
//   telefone: '9999-9999',
//   'cor dos olhos': 'azul'
// }
// > pessoa.if = 10;
// 10
// > pessoa
// {
//   nome: 'Pedro Silva',
//   idade: 22,
//   telefone: '9999-9999',
//   'cor dos olhos': 'azul',
//   if: 10
// }

//Acessando as propriedades de um objeto

pessoa.nome; //"João"
pessoa["nome"]; //"João"
pessoa.endereco.bairro; //"Centro"
pessoa["endereco"]["bairro"]; //"Centro"
pessoa.endereco["bairro"]; //"Centro";
pessoa.telefone; //null
pessoa.peso; //Undefined

//Apagando propriedades de um objeto

delete pessoa.telefone;
