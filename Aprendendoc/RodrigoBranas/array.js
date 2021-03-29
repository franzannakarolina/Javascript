//Arrays são apenas objetos especiais que oferecem meios para acessar e manipular suas propriedades por meio de indices.

var carros = ["Ka", "Corsa", "Palio"];

//Tambem é possivel criar um array inicializado com elementos

//criando array com new Array()

var carros = new Array("Ka", "Corsa", "Palio");
var carros = new Array(10); //tamanho inicial

//não se esqueça que o array não tem tamanho fixo e o tamanho inicial é apenas uma forma de inicializa-lo;

//Api Array

//- concat = junta dois arrays, retornando a copia dos dois
//- every = retorna true se todos os elementos atenderem a função
//- filter = filtra o array com base em uma função de filtro
//- forEach = percorre o array, invocando uma função para cada elemento
//- indexOf = retorna o indice do primeiro elemento encontrado
//- join = cria uma String customizada com todos os elementos do array
//- lastIndexOf - retorna o indice do ultimo elemento encontrado
//- map = transforma os elementos de um array
//- pop = remove o ultimo elemento do array, retornando-o
//- push = adiciona um elemento no array, retornando o length
//- reduce = acumula os elementos de um Array
//- reverse = inverte a ordem dos elementos do array
//- shift = remove o primeiro elemento do array, retornando-o
//- some = retorna true se um dos elementos atender a função
//- slice = seleciona uma parte do array, retornando
//- sort = ordena os elementos do array com base em uma função
//- splice = adicione ou remove elementos de uma posição especifica
//- toString = converte o array em uma String
//- unshift = adiciona elementos no inicio do array
//- valueOf = retorna o proprio array

//Retornando o Array com valueOf

var carros = ["Ka", "Corsa", "Palio"];

carros.valueOf(); //['Ka', 'Corsa', 'Palio']
carros.toString(); //'Ka, Corsa, Palio'

//Consultando o tamanho do Array com length

var carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";

carros.length; //3
//length é uma propriedade e não uma função

//Inserindo novos elementos no final com push

carros.push("Gol");

//retirando elementos do final com pop

carros.pop(); //"Palio"

//Inserindo novos elementos no inicio com unshift

carros.unshift("Gol");

//Retirando elementos do inicio com shift

carros.shift();

//localizando elementos com indexOf

carros.indexOf("Corsa"); //1

//Removendo elementos em uma posição com splice

carros.splice(pos, 1); //["Corsa"]

//Substituindo elementos em uma posição com splce

carros.splice(pos, 1, "Sonic"); //["Carros"]

//Iterando em um array com forEach

carros.forEach(function (elemento) {});

//filtrando o array com filter

carros.filter(function (elemento) {
  return elemento.marca === "Ford";
});

//[{marca: "Ford", modelo: "Ka"}]

//or

carros.forEach(function (elemento) {
  if (elemento.marca === "Ford") carrosFord.push(elemento);
});
//[{marca: "Ford", modelo: "Ka"}]

//Testando os elementos do Array com every

carros.every(function (elemento) {
  return elemento.marca === "Ford";
});
//false

//Testando os elementos do array com some

carros.some(function (elemento) {
  return elemento.marca === "Ford";
});
//true

//mapeando os elementos do array com map

carros.map(function (elemento) {
  return elemento.marca;
});
//["Ford", "Chevrolet", "Ka"]

//or

carros.map(function (elemento) {
  return elemento.modelo.length;
});
//[2, 5, 5];

//processando os elementos do array com reduce

carros.reduce(function (prev, cur) {
  return prev + cur.preco;
}, 0);
//95550

//Concatenando dois arrays com concat

var motos = ["Honda", "Yamaha"];

var veiculos = carros.concat(motos);

veiculos.toString(); //["Ka", "Corsa", "Palio", "Honda", "Yamaha"]

//Fatiando um Array com slice
carros = [];

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Gol";

carros.slice(0, 2); //["Ka", "Corsa"]
carros.slice(1, 3); //["Corsa", "Palio"]
carros.slice(2); // ["Palio", "Gol"]

//Invertendo a ordem de um array com reverse

carros[0] = "Ka";
carros[1] = "Corsa";
carros[2] = "Palio";
carros[3] = "Gol";

carros.reverse();

carros.toString();
//["Gol", "Palio", "Corsa", "Ka"];

//Ordenando os elementos de um array com sort

carros.sort(function (a, b) {
  return a.preco - b.preco;
});

carros.valueOf(); //["Ka", "Palio", "Corsa"]

//Juntando os elementos um array com join

carros.join(";"); //"Ka;Corsa;Palio;Gol"
