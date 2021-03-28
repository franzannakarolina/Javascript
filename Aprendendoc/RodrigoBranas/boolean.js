var isento = true;
var estudante = false;

isento.toString(); //"true"
estudante.valueOf(); //false

//A linguagem JavaScript assume o estado de determinados tipos como true ou false, dependendo do caso.

//>!!0 //false

// > !!NaN
// false
// > !!false
// false
// > !!null
// false
// > !!undefined
// false

//ex 2:

// > if (estudante){
// ... console.log("Sim");
// ... }
// Sim
// undefined
// > var nota = 10;
// undefined
// > if (nota){
// ... console.log("Dez");
// ... }
// Dez
// undefined
// > var nome = "Pedro";
// undefined
// > if(nome){
// ... console.log("Pedro")
// ... }
// Pedro
