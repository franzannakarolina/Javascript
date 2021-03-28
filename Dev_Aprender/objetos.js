let nome = 'Rafael';
let idade = 25;
let estaAprovado = true;
let sobronome = undefined;

//pode acessar a propriedade daquele objeto

let pessoa = { 
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'vieira'
}; 

console.log(pessoa);
console.log(typeof pessoa.nome)//pra saber o tipo
console.log(pessoa.nome);
console.log(pessoa);

let carro = {
    marca: 'Citroen',
    valor: 25.000,
    estaAprovado: true,
    modelo: 'c4'
};

console.log(carro);
console.log(typeof carro.marca);
console.log(typeof carro);
console.log(carro.marca);
//um objeto vazio //declarar um objeto em Javascript
//lá em cima passar pra baixo dentro de uma classe que vc vai definir dessa forma
//nome seria o objeto 
//a chave e o valor quase essa combinação de uma chave iniciada com idenfificador e o valor, ou seja vc vai acessar essa chave esse valor
//pra acessar essa propriedade basta colocar console.log(pessoa)