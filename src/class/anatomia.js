class Person{
    constructor(name, occupation, age) { //aqui sao os atributos
        this._name = name; //_ padrao de nomeclatura para referenciar um obj interno
        this._occupation = occupation;
        this._age = age;
    }

    hello(name, occupation, age) {
        if (occupation === "dev") {
            return `Fala ${occupation} seu nome é ${name} e você tem ${age} anos`
        } else {
            return `Fala ${name} você tem ${age} anos e sua profissão é ${occupation}`
        }
    }
}

const Pessoa = new Person;

module.exports = Pessoa;