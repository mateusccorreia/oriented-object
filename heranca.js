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

    constructor (marca, modelo, ano, qtdPortas, automatico) {
        super(marca, modelo, ano);
        this.qtdPortas = qtdPortas;
        this.automatico = automatico;  
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

const carroUm = new Carro('Chevrolet', 'Sedan', '2023', 4, true)
console.log(carroUm.marca)
carroUm.marca = 'VM'
console.log(carroUm.marca)

const bike = new Bicicleta('Caloi', 'Retro', 2019, 'Disco')
console.log(bike.andar())
