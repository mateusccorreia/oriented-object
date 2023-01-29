// Crie uma classe "Animal" que deve receber dois parâmetros no método construtor, nome e idade, e anotá-los em propriedades da classe.
// Além disso, ele também deve possuir um método chamado apresentar() que ao ser chamado exibirá a mensagem "Oi! Eu sou um Animal".
// Crie classes "Mamifero", "Ave" e "Peixe". Essas classes devem herdar os atributos e métodos da classe "Animal". Crie atributos e métodos 
// próprios para cada uma dessas classes. Lembre-se que, o método apresentar() precisa ser atualizado informando se o objeto é um Mamifero, Ave ou Peixe.
// Sinta-se livre para criar novas classes extendendo "Ave" ou "Peixe".
// Crie classes "Humano" e "Cachorro", ambos devem extender de "Mamifero". Assim como feito anteriormente, crie métodos e atributos para cada um deles.
// Crie agora algumas classes de profissões como, por exemplo: "Advogado", "Medico" e "Desenvolvedor". Siga a mesma ideia do que foi solicitado anteriormente.
// Extendendo de Desenvolvedor, crie um FrontEnd e um BackEnd. Cada um deles deve ter métodos próprios e aproveita para adicionar também condicionais, como,
// por exemplo, o desenvolvedor BackEnd pode ter um método chamado darDesculpa(), onde você gera um número aleatório. Se ele for par, exibe a mensagem "Na minha máquina funciona"
// e se for impar "Terminei! Falta só testar".
// Suba tudo no git para apresentar na próxima aula :)


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

    get idade () {
        return this.#idade;
    }

    set idade (novaIdade) {
        this.#idade = novaIdade;
    }

    apresentar() {
       return 'Oi! Eu sou um animal'
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
        return 'Oi! Eu sou um mamifero'
    }

    caçar() {
        return 'Estou caçando'
    }

    andar () {
        return 'Estou andando'
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
        return 'Oi! Eu sou uma ave'
    }

    voar() {
        return 'Estou voando'
    }
}

class Peixe extends Animal {
    #cor;

    constructor (nome, idade, cor) {
        super(nome, idade);
        this.#cor = cor;
    }

    apresentar() {
        return 'Oi! Eu sou um peixe'
    }

    nadar() {
        return 'Estou nadando'
    }
}

class Humano extends Mamifero {
    constructor (nome, idade, tamanho, pelos) {
        super(nome, idade, tamanho, pelos);
    }

    apresentar() {
        return 'Oi! Eu sou um humano'
    }

    ler () {
        return 'Eu consigo ler'
    }
}

class Cachorro extends Mamifero {
    constructor (nome, idade, tamanho, pelos) {
        super(nome, idade, tamanho, pelos)
    }

    apresentar() {
        return 'Oi! Eu sou um cachorro'
    }

    pegarOsso() {
        return 'Peguei um osso'
    }
}

class Desenvolvedor extends Humano {
    apresentar() {
        return 'Oi! Eu sou um desenvolvedor'
    }
    fazerLogica() {
        return 'Usando lógica de programação'
    }
    usarSQL() {
        return 'Usando conhecimento sobre SQL'
    }
}

class Medico extends Humano {
    apresentar() {
        return 'Oi! Eu sou um médico'
    }
    fazerConsulta() {
        return 'Fazendo uma consulta'
    }
    fazerDiagnostico() {
        return 'Fazendo um diagnostico do paciente'
    }
}

class FrontEnd extends Desenvolvedor {    
    apresentar() {
        return 'Oi! Eu sou um desenvolvedor front-end'
    }
    usarHTML() {
        return 'Faço código HTML'
    }
    usarCSS() {
        return 'Faço estilos com o CSS'
    }
    usarJavascript() {
        return 'Programo em JS'
    }
    usarReact() {
        return 'Utilizo React para as minhas aplicações'
    }
}

class BackEnd extends Desenvolvedor {
    apresentar() {
        return 'Oi! Eu sou um desenvolvedor back-end'
    }
    usarNodeJs() {
        return 'Faço programas com o Node'
    }
    darDesculpa() {
        let numAleatorio = Math.floor(Math.random() * 10);
        if (numAleatorio % 2 === 0) {
            return 'Na minha máquina funciona'
        }
        if (numAleatorio % 2 !== 0) {
            return 'Terminei! Falta só testar'
        }
    }
}

const animalUm = new Animal('souUmAnimal', 99)
console.log(animalUm.apresentar())
const mamiferoUm = new Mamifero('souUmMamifero', 15, 'grande', true)
console.log(mamiferoUm.apresentar())
const aveUm = new Ave('souUmaAve', 88, 'preto', false)
console.log(aveUm.apresentar())
const peixeUm = new Peixe('souUmPeixe', 2, 'azul', false)
console.log(peixeUm.apresentar())
const humanoUm = new Humano('souUmHumano', 50, 'medio', true)
console.log(`${humanoUm.apresentar()} | ${humanoUm.ler()}`)
const frontEndUm = new FrontEnd('Mateus', 31, 'pequeno', true)
console.log(`${frontEndUm.apresentar()} | ${frontEndUm.usarJavascript()}`)
const backUm = new BackEnd('Isa', 15, 'pequeno', true)
console.log(`${backUm.apresentar()} | ${backUm.darDesculpa()}`)