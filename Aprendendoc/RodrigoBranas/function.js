//A linguagem JavaScript não tem:

//- classe
//- construtor
//- Método
//- Módulo

//As funções são responsaveis pelo poder da linguagem JavaScript
// Uma função é um objeto que contém um bloco de código executavel. Esse bloco é isolado, não sendo possivel acessa-lo externamente.
//As funções são de primera classe é aquela que pode ser atribuida a uma variavel, passada como parametro ou ser retornada de uma outra função.

//Criando funções:

//Function Declaration

function soma(a, b) {
  return a + b;
}

//Function Expression

var soma = function (a, b) {
  return a + b;
};

//Named Function Expression
//O nome da função pode ser util pois aparece no stack trace, listas de breakpoints e demais ferramentas de debbuging

//Qual é a diferença entre function declaration e expression?

//Declaration: A função é carregada antes do código ser interpretado
//Expression: A função é carregada durante a inerpretação do código

function soma(a, b) {
  return a + b;
}

console.log(soma);
console.log(soma(2, 2));

var soma = function (a, b) {
  return a + b;
};

console.log(soma(2, 3));

//Invocando uma função diretamente no escopo global

// var soma = function (a, b) {
//   return a + b;
// };

// soma(2, 2); //4

//Passando uma função como parametro

var produto = { nome: "Sapato", preco: 150 };

var formulaImpostoA = function (preco) {
  return preco * 0.1;
};

var calcularPreco = function (produto, formulaImposto) {
  return produto.preco + formulaImposto(produto.preco);
};

calcularPreco(produto, formulaImpostoA); //165
calcularPreco(produto, formulaImpostoB); //180

//Retorna uma função de dentro de outra função

var helloWord = function () {
  return function () {
    return "Hello World";
  };
};

helloWord(); //[Function]

console.log(helloWord()()); //precisa invocar duas vezes pra ter o resultado da função interna

//Invocando uma função por meio de um Objeto

//Utilizando uma função como método, declarada dentro do objeto

var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: function () {
    return this.idade;
  },
};

pessoa.getIdade(); //20

//vc usa o this quando ela passa a função por meio do objeto;

//Invocando uma função com call e apply

//Toda função possui os metodos call() e apply().
//Eles são utilizadas para indicar em qual escopo uma função deve ser executada.
// A diferença é basicamente a forma como é utilizado:

//função.call(escopo, parametro1, parametro2)
//função.apply(escopo, parametros)

var getIdade = function (extra) {
  return this.idade + extra;
};
var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: getIdade,
};

console.log(pessoa.getIdade(2));
console.log(getIdade.call(pessoa, 2)); //passa os parametros abertos
console.log(getIdade.apply(pessoa, [2])); //passa um só, que é um array [];

//Invocando uma função por meio do operador new
//new consegue instanciar funções
//Criando objetos diretamente

var pessoa = {
  nome: "Pedro",
  idade: 22,
};

//Funções construtoras vs. funções fábrica

//Funções Fabrica:

var criarPessoa = function (nome, idade) {
  return {
    nome: nome,
    idade: idade,
  };
};

console.log(criarPessoa("Pessoa", 20)); //nome Pessoa, idade 20

//Função construtora; = Ela começa com letra Maiuscula

var Pessoa = function (nome, idade) {
  this.nome = nome;
  this.idade = idade; //this referencia o objeto que esta sendo criado por operador new
};

console.log(new Pessoa("Pessoa", 20));

//new faz algumas operações que a gente não vê

var pedro = {};
Pessoa.call(pedro, "Pedro", 20);

//Closures = fechamento

var helloWord = function () {
  var message = "Hello Word";
  return "Hello World";
  return function () {
    return message;
  };
};

helloWord; // Fcuntion
helloWord(); //Function
