var nota = 10;

nota.toExponential(2); //100
nota.toFixed(2); //10.00
nota.toPrecision(1); //1e + 1
nota.toString(); //"10"
nota.valueOf(); //10

//Só existe um tipo numérico na linguagem e ele tem as seguintes caracteristicas:

// - IEEE-754 (Standard for Floating-Point)
// - binary ou Double Precision
// - Cuidado com as exceções

//ex: 0.1 + 0.2 = 0.3000000000000004
//com 30 pontos tres mas tem um residuo final decorrente da operação binária, então isso com as raizes as quais a gente usa e complementos para fazer essas soma de numeros

//ex 1: 3/2 = Infinity
//é um tipo de operação ilegal por não poder dividir 30 na matematica

//ex 2: "AgileCode" * 10; = NaN
// Uma string por 10, mais isso infelizmente não existe!

//Math API
//Similar a classe Math da linguagem Java
// - abs = valor absoluto do numero
// - floor = valor inteiro do numero
// - log = Logaritmo natural do numero (base 5)
// - min = Retorna o menor numero
// - max = Retorna o maior numero
// - pow = Potencia do numero
// - random = Gera um numero randomico
// - round = Arredonda o numero para o inteiro mais proximo
// - sin = Seno do numero
// - sqrt = Raiz quadrada do numero
// - tan - Tangente do numero

// > Math.cos(1)
// 0.5403023058681398
// > Math.sin(1)
// 0.8414709848078965
