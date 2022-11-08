import React from "react";

function Navbar({ pokemonFilter }) {
  return (
    <div className="navbar">
      <div className="poke-logo">
        <img
          className="logo"
          src="https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png"
          alt=""
        />
      </div>
      <div className="header-poke">
        <h1 className="header">POKE API</h1>
      </div>
      <div className="poke-filter">
        <input
          className="poke-search"
          type="text"
          placeholder="Pokemon Giriniz."
          onChange={(e) => pokemonFilter(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default Navbar;
