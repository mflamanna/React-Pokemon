import './App.css';

function Search() {
    return (
      <>
          <nav className="header-search_bar">
            <input type="text" name="search" placeholder="Search"></input>
            <button type="submit">GO</button>
          </nav>
      </>
    );
  }
  
  export default Search;