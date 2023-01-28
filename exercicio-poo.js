class Animal {
    #nome;
    #idade;

    constructor (nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    apresentar() {
        console.log('Oi! Eu sou um animal')
    }
}

class Mamifero extends Animal{
    #qtdPatas;
    #tamanho;

    constructor(nome, idade, qtdPatas, tamanho) {
        super(nome, idade);
        this.#qtdPatas = qtdPatas;
        this.#tamanho = tamanho;
    }

    apresentar() {
        console.log('Oi! Eu sou um mamifero')
    }

    caçar() {
        console.log('Estou caçando')
    }

}

const mamiferoUm = new Mamifero('Mingal', 2)
console.log(mamiferoUm.apresentar())