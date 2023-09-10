import { useEffect, useState } from "react";
import "./PokemonCard.css";
import { getPokemonById } from "../../services/getPokemonById";
const PokemonCard = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  const statsTarget = ["hp", "attack", "defense", "speed"];
  const stats = pokemon?.stats.filter((stat) =>
    statsTarget.includes(stat.name.toLowerCase())
  );

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);

      setPokemon(pokemonData);
    };
    loadPokemon();
  }, [pokemonId]);

  if (!pokemon) {
    return;
  }

  return (
    <article className="pokemon__card">
      {!pokemon && <p>Loading...</p>}

      {pokemon && (
        <>
          <div className="pokemon__image__container">
            <img src={pokemon.image} alt="pokemon" />
          </div>
          <h3>{pokemon.name}</h3>
          <h4>
            {pokemon.types.map((type) => (
              <span key={type}>{type[0].toUpperCase() + type.slice(1)}</span>
            ))}
          </h4>
          <h6>Type</h6>
          <div className="pokemon__card__stats">
            <div>
              {stats.map((stat) => (
                <span key={stat.name}>
                  {stat.name.toUpperCase()}
                  <b>{stat.value}</b>
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default PokemonCard;
