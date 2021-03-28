//sobre a função que é a parte dos tipos de referencia em se vc ainda não conhecer os outros tipos são os tipos valores
//a função ela faz parte de da base é de todo o software que ela vai controlar o fluxo de execução então toda a entrada de dar saida de dados no javascript, tera que criar uma função que vai realizar isso.
//Como nomear uma função, deve pensar sempre da forma, que deve colocar um verbo ++ substantivo

// resetaCor //um verbo uma ação e o que e o que ela faz é um substantivo Cor. Poderia pensar em transforma 
//Declarar uma função devesse sempre colocar function

let corSite = "azul";
function resetaCor(cor, tonalidade) { //dentro dos parenteses vai uma variavel, e passar essa varial aqui como argumento na minha função
corSite = cor + tonalidade;
};

console.log(corSite);
//se chamar a função resetaCor e passar uma string 

resetaCor("vermelho", " claro");
console.log(corSite);



