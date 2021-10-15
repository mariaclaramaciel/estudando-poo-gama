class Person{
    #name;
    #age;
    constructor({name, age}){
        this.#name = name;
        this.#age = age;
    }

    speak(){
        return console.log(`Seu nome é ${this.#name} e sua idade ${this.#age}`)
    }
}

module.exports = Person;