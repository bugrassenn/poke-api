import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Poke from "./components/Poke";
import Navbar from "./components/Navbar";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (let i = 1; i <= 32; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endpoints);
    const response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));

    // .get("https://pokeapi.co/api/v2/pokemon?limit=20")
    // .then((res) => setPokemons(res.data.results))
    // .catch((err) => console.log(err));
  };

  //pokemonFilter bize  arama kısmı boşsa bütün pokemonları gösteriyor
  // arama kısmına yazı yazmaya başladığımız an o harfle başlayan pokemonu gösteriyor
  // filteredPokemons ->data.name içinde o harf varsa bu pokemonu filteredPokemons a pushla diyoruz
  // daha sonra ise ekranda görüntülenecek olan pokemon(setPokemons) filteredPokemons olsun diyoruz
  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  return (
    <div className="App">
      <Navbar pokemonFilter={pokemonFilter} />
      <Poke pokemons={pokemons} />
    </div>
  );
}

export default App;
