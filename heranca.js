class Veiculo {
    #marca;
    #modelo;
    #ano;

    constructor (marca, modelo, ano) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    get marca() {
        return this.#marca;
    } 

    set marca(novaMarca) {
        novaMarca = novaMarca.trim();
        if (novaMarca === '') {
            throw 'O nome não pode está vazio'
        }
        this.#marca = novaMarca; 
    }

    get modelo () {
        return this.#modelo;
    }

    set modelo(novoModelo) {
        this.#modelo = novoModelo
    }

    ligar() {
        console.log('O veículo foi ligado')
    }

    andar() {
        console.log('O veículo está em movimento')
    }

    frear() {
        console.log('O veículo parou')
    }
}

class Carro extends Veiculo {
    #qtdPortas;
    #automatico;

    constructor (marca, modelo, ano, qtdPortas, automatico) {
        super(marca, modelo, ano);
        this.#qtdPortas = qtdPortas;
        this.#automatico = automatico;  
    }

    darCarona () {
        console.log('Usar esse metodo para dar uma carona')
    }
}

class Bicicleta extends Veiculo {

    constructor (marca, modelo, ano, tipoDeFreio) {
        super(marca, modelo, ano)
        this.tipoDeFreio = tipoDeFreio;
    }

    pedalar() {
        console.log('Usar esse metodo para pedalar')
    }
}

const carroUm = new Veiculo('Chevrolet')
console.log(carroUm.marca)
carroUm.marca = 'VM'
console.log(carroUm.marca)
// carroUm.modelo = 'Hatch'
// console.log(carroUm.modelo)
// carroUm.ano = 2000;
// console.log(carroUm.ano)
// console.log(carroUm)

// const bike = new Bicicleta('Caloi', 'Retro', 2019, 'Disco')
// console.log(bike.andar())
