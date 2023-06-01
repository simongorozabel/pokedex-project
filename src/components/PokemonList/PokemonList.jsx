import { useState } from "react";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons }) => {
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20);
  const [currentPage, totalPages, pokemonsSlice, changePageTo] = usePagination(
    pokemons,
    pokemonsPerPage
  );

  return (
    <>
      <Pagination
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />
      <div className="pokemon__container">
        {pokemonsSlice.map((pokemon) => (
          <Link
            style={{ color: "unset", textDecoration: "none" }}
            to={`/pokedex/${pokemon.url.split("/").at(-2)}`}
            key={pokemon.url}
          >
            <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
          </Link>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />
    </>
  );
};

export default PokemonList;
