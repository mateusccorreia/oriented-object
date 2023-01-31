export class Pokemon {
    #nome;
    #tipo;
    #level;
    #selvagem = true;

    constructor (nome, tipo) {
        this.#nome = nome;
        this.#tipo = tipo;
        this.#level = Math.floor(Math.random() * 99) + 1;
        // this.#selvagem = true;
    }

    get nome () {
        return this.#nome;
    }

    set nome (novoPokemon) {
        this.#nome = novoPokemon;
    }

    get tipo () {
        return this.#tipo;
    }

    set tipo (novoTipo) {
        this.#tipo = novoTipo;
    }
}
