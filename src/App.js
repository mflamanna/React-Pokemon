import './App.css';
import Header from './Header';
import Search from './Search';
import PokemonList from './PokemonList';

function App() {

  return (
    <div className="container">
      <Header/>
      <Search/>
      <PokemonList/>
    </div>

  );
}

export default App;

