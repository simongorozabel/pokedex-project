import { UserNameContext } from "../../context/UserNameContext";
import { useContext } from "react";
import "./Pokedex.css";

import PokemonList from "../../components/PokemonList/PokemonList";
import { useLoaderData } from "react-router-dom";
import FilterForm from "../../components/FilterForm/FilterForm";

const Pokedex = () => {
  const { userName } = useContext(UserNameContext);
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();

  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   const loadPokemons = async () => {
  //     const pokemonsData = await getAllPokemons();
  //     setPokemons(pokemonsData);
  //   };
  //   loadPokemons();
  // }, []);

  return (
    <div className="pokedex__container">
      <p>
        <em>Welcome</em> <span>{userName}</span>
      </p>

      <FilterForm nameInitial={pokemonName} typeInitial={pokemonTypeId} />

      {!pokemons.length ? (
        <p>No pokemons found</p>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
};

export default Pokedex;
