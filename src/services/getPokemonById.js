import { axiosInstance } from "../api/axiosInstance";
import unknownPokemon from "../assets/images/Untitled.jpg";

const getPokemonImg = (sprites) => {
  const firstOption = sprites.other.dream_world.front_default;

  const secondOption = sprites.other["official-artwork"].front_default;

  const thirdOption = sprites.other.home.front_default;

  if (firstOption) return firstOption;
  if (secondOption) return secondOption;
  if (thirdOption) return thirdOption;
  else return unknownPokemon;
};

export const getPokemonById = async (id) => {
  try {
    const res = await axiosInstance.get(`pokemon/${id}`);

    const pokemonData = res.data;

    const response = await axiosInstance.get(`pokemon-species/${id}`);

    const colorData = response.data.color.name
      ? response.data.color.name
      : "black";

    const adaptedPokemon = {
      name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1),
      types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
      stats: pokemonData.stats.map((statsInfo) => ({
        name: statsInfo.stat.name,
        value: statsInfo.base_stat,
      })),
      image: getPokemonImg(pokemonData.sprites),
      abilities:
        pokemonData.abilities.length > 0
          ? pokemonData.abilities.map(
              (ability) =>
                ability.ability.name[0].toUpperCase() +
                ability.ability.name.slice(1)
            )
          : "unknown",
      color: colorData,
    };

    console.log(adaptedPokemon);

    return adaptedPokemon;
  } catch (error) {
    console.error(error);
  }
};
