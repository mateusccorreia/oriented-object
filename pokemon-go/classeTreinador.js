export class Treinador {
    #nome;
    #cidade;
    #qtdDePokebolas;
    #qtdDePokemons;

    constructor (nome, cidade) {
        this.#nome = nome;
        this.cidade = cidade;
        this.#qtdDePokebolas = 0;
        this.#qtdDePokemons = 0;
    }

    get nome () {
        return this.#nome;    
    }

    set nome (novoTreinador) {
        this.#nome = novoTreinador;
    }

    get cidade () {
        return this.#cidade;
    }

    set cidade (novaCidade) {
        this.#cidade = novaCidade;
    }

    get qtdDePokebolas () {
        return this.#qtdDePokebolas;
    }

    set qtdDePokebolas (valor) {
        this.#qtdDePokebolas = valor;
    }

    get qtdDePokemons () {
        return this.#qtdDePokemons;
    }

    set qtdDePokemons (valor) {
        this.#qtdDePokemons = valor;
    }

    iniciarJornada() {
        this.#qtdDePokebolas += 5;
        this.#qtdDePokemons += 1;
    }
}

