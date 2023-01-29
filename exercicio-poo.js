class Animal {
    #nome;
    #idade;

    constructor (nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    get nome () {
        return this.#nome;
    }

    set nome (novoNome) {
        this.#nome = novoNome;
    }

    apresentar() {
        console.log('Oi! Eu sou um animal')
    }
}

class Mamifero extends Animal {
    #tamanho;
    #pelos;

    constructor(nome, idade, tamanho, pelos) {
        super(nome, idade);
        this.#tamanho = tamanho;
        this.#pelos = pelos;
    }

    get tamanho () {
        return this.#tamanho;
    }

    set tamanho (novoTamanho) {
        this.#tamanho = novoTamanho
    }

    get pelos () {
        return this.#pelos
    }

    set pelos (novoPelo) {
        this.#pelos = novoPelo;
    }

    apresentar() {
        console.log('Oi! Eu sou um mamifero')
    }

    caçar() {
        console.log('Estou caçando')
    }

    andar () {
        console.log('Estou andando')
    }
}

class Ave extends Animal {
    #cor;
    #tamanhoDoBico;

    constructor (nome, idade, cor, tamanhoDoBico) {
        super(nome, idade);
        this.#cor = cor;
        this.#tamanhoDoBico = tamanhoDoBico;
    }

    apresentar() {
        console.log('Oi! Eu sou uma ave')
    }

    voar() {
        console.log('Estou voando')
    }
}

class Peixe extends Animal {
    #cor;

    constructor (nome, idade, cor) {
        super(nome, idade);
        this.#cor = cor;
    }

    apresentar() {
        console.log('Oi! Eu sou um peixe')
    }

    nadar() {
        console.log('Estou nadando')
    }
}

class Humano extends Mamifero {
}

class Cachoro extends Mamifero {
}

const novoMamifero = new Mamifero('Mateus', 31)
console.log(novoMamifero.nome)
novoMamifero.nome = 'Isadora'
console.log(novoMamifero.nome)