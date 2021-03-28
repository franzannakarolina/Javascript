//O tipo undefined é retornado caso uma propriedade de um determinado objeto seja consultada e não exista
//undefined sempre acontece quando é consultada uma propriedade que não existe 

> var pessoa = {};
undefined
> pessoa
{}
> pessoa.idade
undefined
> pessoa.nome = "Rodrigo"
'Rodrigo'
> pessoa.idade = 30
30
> pessoa
{ nome: 'Rodrigo', idade: 30 }
> pessoa.nome
'Rodrigo'
> pessoa.idade
30
> for(var propriedade in pessoa){
... console.log(propriedade);
... }
nome
idade
undefined
> pessoa.idade = undefined
undefined
> pessoa.idade
undefined
> for(var propriedade in pessoa) {
... console.log(propriedade);
... }
nome
idade
undefined
> pessoa
{ nome: 'Rodrigo', idade: undefined }

//o tipo NULL indica a ausencia de valor em uma determinada propriedade ja existente