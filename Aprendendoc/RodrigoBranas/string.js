//Uma String é composta por uma sequencia de 0 ou mais caracteres com as seguintes caracteristicas:

// - São imutaveis
// - Podem ser declaradas com aspas simples ou duplas

//ex:

var nome = "AgileCode";

nome.charAt(2); // "i"
nome.charCodeAt(0); //65
nome.concat("!"); //"AgileCode!"
nome.indexOf("e"); //4
nome.replace("Code", "!"); // "Agile!"
nome.split("e"); //['Agil', 'Cod', ''];

//String API

// - charAt = Retorna o char da posição
// - charCodeAt = Retorna o código do char da posição
// - concat = Concatena duas Strings
// - indexOf = Retorna o indice da primeira ocorrencia do char
// - lastIndexOf = Retorna o indice da ultima ocorrencia do char
// - length = Retorna o tamanho da String
// - match = Retorna uma array resultante da busca com RegExp
// - replace = Substitui parte da String por outra
// - search = Retorna a posição da String ou RegExp
// - split = Divide a String com base na expressão regular informada
// - substring = Extrai a parte da String desejada
// - toLowerCase = Gera uma nova String em letra minuscula
// - toUpperCase = Gera uma nova String em letra maiuscula
// - trim = Remove os espaços em branco do inicio e do fim da String
// - valueOf = Retorna o valor primitivo da String

//ex 1:
// > nomes
// 'Pedro;Ana;Maria;Carolina'
// > nomes.split(";")
// [ 'Pedro', 'Ana', 'Maria', 'Carolina' ]
// > nomes
// 'Pedro;Ana;Maria;Carolina'
