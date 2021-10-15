//onde o script roda

const ObjJavascript = require('./literals/objeto')
const ObjJSON = require('./literals/objeto.json')
const Pessoa = require('./class/anatomia')
const mariane = require('./class/gettersAndSetters')

//console.log(ObjJavascript.getFinalPrice())

//console.log(ObjJSON.produto[0].name)

//console.log(Pessoa.hello('Maria', 'dev', 24))

//console.log(mariane._name)


//METODO PUBLICO
// const Person = require('./class/metodoPublico') 

// let marco = new Person({
//     name: 'Marco',
//     age: 22
// })._name

// console.log(marco)

//METODO PRIVADO

const Person = require('./class/metodoPrivado')

let maria = new Person({
    name: 'Maria',
    age: 19,
}).speak()

console.log(maria)