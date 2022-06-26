import './App.css';
import PokemonItem from './PokemonItem';
import pokemons from './data.js';

function PokemonList() {
const ListaPokemons = pokemons.map (item => {
    return (
        <PokemonItem name= {item.name} type = {item.type} image = {item.sprite}/>
    )
}
)

  return (
      <main className="list-pokemons">
        {ListaPokemons}
      </main>

  );
}

export default PokemonList;