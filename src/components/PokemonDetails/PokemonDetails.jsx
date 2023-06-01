import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import { useEffect, useState } from "react";
import { getPokemonById } from "../../services/getPokemonById";

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);

      setPokemon(pokemonData);
    };
    loadPokemon();
  }, [pokemonId]);

  return (
    <div className="pokemon__details__container">
      {pokemon && (
        <>
          <div
            className="pokemon__image__container"
            style={{
              background: `linear-gradient(${pokemon.color}, silver)`,
            }}
          >
            <img src={pokemon.image} alt="pokemon" />
          </div>

          <div className="pokemon__details__name">
            <hr />
            <h2
              style={{
                background: `-webkit-linear-gradient(black, ${pokemon.color})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {pokemon.name}
            </h2>
            <hr />
          </div>

          <div className="pokemon_type-and-ability">
            <div className="pokemon__details__type">
              <h3>Type</h3>
              <h4>
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    style={{
                      boxShadow: `0 0 2em 0.5em ${pokemon.color}`,
                    }}
                  >
                    {type[0].toUpperCase() + type.slice(1)}
                  </span>
                ))}
              </h4>
            </div>

            <div className="pokemon__details__type">
              <h3>Ability</h3>
              <h4>
                {pokemon.abilities.map((ability) => (
                  <span key={ability}>{ability}</span>
                ))}
              </h4>
            </div>

            <div className="pokemon__details__type pokemon__stats__detail">
              <h3>Stats</h3>
              <h4>
                {pokemon.stats.map((stat) => (
                  <span
                    style={{ border: `1px solid ${pokemon.color}` }}
                    key={stat.name}
                  >
                    <b>{stat.value}</b>
                    {stat.name}
                  </span>
                ))}
              </h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetails;
