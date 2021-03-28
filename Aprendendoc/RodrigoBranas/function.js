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
