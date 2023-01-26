class Veiculo {

    constructor (marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        console.log('O carro foi ligado')
    }

    andar() {
        console.log('O carro está em movimento')
    }

    frear() {
        console.log('O carro parou')
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

const carroUm = new Carro('VW', 'Caminhonete', 2000, 4, true)
console.log(carroUm.darCarona())

const bike = new Bicicleta('Caloi', 'Retro', 2019, 'Disco')
console.log(bike.pedalar())
