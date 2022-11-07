import React from "react";

function Poke({ pokemons }) {
  return (
    <div>
      <div className="all-poke">
        {pokemons.map((pokemon, id) => (
          <div key={id} className="poke-div">
            <h3 className="poke-name">
              {pokemon.data.name[0].toUpperCase() + pokemon.data.name.slice(1)}
            </h3>
            <h4>ID#{pokemon.data.id}</h4>
            <img src={pokemon.data.sprites.front_default} alt="" />
            <p>
              <span className="poke-info">Ability : </span>
              {pokemon.data.abilities[0].ability.name}
            </p>
            <p>
              <span className="poke-info">Type : </span>
              {pokemon.data.types[0].type.name}
            </p>
            <p>
              <span className="poke-info">Weight : </span>
              {pokemon.data.weight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Poke;
