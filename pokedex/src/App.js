import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [pokemonName, setpokemonName] = useState('')
  const [pokemonData, setpokemonData] = useState({})

  const searchPokemon = () => {
    const pokemon = pokemonName.toLowerCase();
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((resp) => {
        setpokemonData({
          name: resp.data.name,
          id: resp.data.id,
          abilities: resp.data.abilities[0].ability.name,
          image: resp.data.sprites.front_default,
          type: resp.data.types[0].type.name,
          moves: resp.data.moves[0].move.name,
          hp: resp.data.stats[0].base_stat
        })
      }
      );
    clear()
  }

  const typePokemon = () => {
    if(pokemonData.type == "fairy") return "Fairy"
    if(pokemonData.type == "steel") return "Steel"
    if(pokemonData.type == "dark") return "Dark"
    if(pokemonData.type == "dragon") return "Dragon"
    if(pokemonData.type == "ghost") return "Ghost"
    if(pokemonData.type == "rock") return "Rock"
    if(pokemonData.type == "bug") return "Bug"
    if(pokemonData.type == "psychic") return "Psychic"
    if(pokemonData.type == "ground") return "Ground"
    if(pokemonData.type == "poison") return "Poison"
    if(pokemonData.type == "fighting") return "Fighting"
    if(pokemonData.type == "ice") return "Ice"
    if(pokemonData.type == "grass") return "Grass"
    if(pokemonData.type == "electric") return "Electric"
    if(pokemonData.type == "normal") return "Normal"
    if(pokemonData.type == "water") return "Water"
    if(pokemonData.type == "fire") return "Fire"

    return ""
  }

  const clear = () => {
    setpokemonName('')
  }

  const random = () => {
    const pokeRandom = Math.floor(Math.random() * (890 - 1)) + 1;
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeRandom}`)
      .then((resp) => {
        setpokemonData({
          name: resp.data.name,
          id: resp.data.id,
          abilities: resp.data.abilities[0].ability.name,
          image: resp.data.sprites.front_default,
          type: resp.data.types[0].type.name,
          moves: resp.data.moves[0].move.name,
          hp: resp.data.stats[0].base_stat
        })
      }
      );
    clear()
  }

  return (
    <div className="App">

      <h1> Pokedex </h1>

      <div className="PokeForm">
        <input className="InputPoke" type="text"
          placeholder="Search for a pokemon"
          onChange={(e) => { setpokemonName(e.target.value) }}
          value={pokemonName}
        />

        <button className="PokeButton"
          onClick={searchPokemon}
        >
          Search
        </button>

        <button className="RandomButton"
          onClick={random}
        >
          Random
        </button>
      </div>

    {pokemonData.id ? (
            <div className={`PokeInfos ${typePokemon()}`}>
            <div>
              <img src={pokemonData.image} alt={pokemonData.name} />
            </div>
            <div>
              <p>
                Nome: <strong>{pokemonData.name}</strong>
              </p>
              <p>
                ID: <strong>{pokemonData.id}</strong>
              </p>
              <p>
                Type: <strong>{pokemonData.type}</strong>
              </p>
              <p>
                HP: <strong>{pokemonData.hp}</strong>
              </p>
              <p>
                Ability: <strong>{pokemonData.abilities}</strong>
              </p>
              <p>
                Move: <strong>{pokemonData.moves}</strong>
              </p>
            </div>
          </div>
    ) : (
      false
    )}

    </div>
  );
}

export default App;
