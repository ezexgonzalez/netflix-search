import './App.css';
import Nav from './Components/Nav/Nav';
import MostPopularMovies from "./Components/Cards/MostPopularMovies";
import { useState } from 'react';
import SearchMovies from "./Components/Cards/SearchMovies";

function App() {

  const [loading , setLoading] = useState(false);
  const [search, setSearch] = useState({
    value: "",
    view: false
  });


  return (
    <div className="App">
      <Nav setLoading={setLoading} setSearch={setSearch}/>
      {
        search.view ? <SearchMovies loading={loading} setLoading={setLoading} searchValue={search.value} /> : <MostPopularMovies loading={loading} setLoading={setLoading}/> 
      }

    </div>
  );
}

export default App;
