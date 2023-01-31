const pokemonUm = new Pokemon('Pikachu','Elétrico', 3, false);
const pokemonDois = new Pokemon('Bulbasaur', 'Planta', 5, true);
const pokemonTres = new Pokemon('Charmander', 'Fogo', 4, false);
const pokemonQuatro = new Pokemon('Squirtle', 'Agua', 2, true);

const treinadorUm = new Treinador('Ash', 10, 5)

function capturarPokemon (treinador, pokemon) {
    if (pokemon.selvagem === true) {
        console.log('posso ser capturado')
    }
    return;
}

console.log(capturarPokemon(treinadorUm, pokemonDois))