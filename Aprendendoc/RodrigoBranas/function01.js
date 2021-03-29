//Cuidado com escopo global

var counter = 0;
var add = function () {
  return ++counter;
};

console.log(add());
console.log(add());
console.log(add());
counter.value = undefined;
console.log(add());

var itens = [];
var add = function (item) {
  itens.push(item);
  return itens;
};

console.log(add("A"));
console.log(add("B"));
console.log(add("C"));

console.log(add());

//não fazer repetições

//Como a linguagem não possui um ligador, ou linker, faz uso de um escopo global compartilhado para estabelecer os vinculos entre diferentes partes de uma aplicação;

//Como fazer para encapsular?
//1° Object = conjunto de chaves e valores;

var counter = {
  value: 0,
  add: function () {
    return ++this.value;
  },
};

console.log(counter.add());

var itens = {
  value: [],
  add: function (item) {
    this.value.push(item);
    return this.value;
  },
};

console.log(itens.add("A"));
console.log(itens.add("B"));
console.log(itens.add("C"));

//Javascript não possui modificadores de visibilidade como private ou public

var counter = function () {
  var value = 0;
  var add = function () {
    return ++value;
  };
};

console.log(counter.value);
console.log(counter.add);

//Como fazer pra comunicar essa função?

//R: Recorrer a uma Factory Function

var createCounter = function () {
  var value = 0;
  return {
    add: function () {
      return ++value;
    },
  };
};

var counter = createCounter();
counter.value; //undefined
counter.add(); //1
counter.add(); //2
counter.add(); //3

//Constructor Function = o que utiliza o new

var Counter = function () {
  var value = 0;
  this.add = function () {
    return ++value;
  };
};

var Counter = new Counter();

// Função IIFE = Immmediately Invoked Function Expression

//Module Pattern

var counter = (function () {
  var _value = 0;
  var _add = function () {
    return ++_value;
  };
  var _reset = function () {
    _value = 0;
  };
  return {
    add: _add,
    reset: reset,
  };
})();

counter._value; //undefined;
counter.add(); //1
counter.add(); //2
