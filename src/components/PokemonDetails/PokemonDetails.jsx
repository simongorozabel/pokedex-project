import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
const PokemonDetails = () => {
  const { pokemonId } = useParams();
  return (
    <div className="pokemon__details__container">
      <h2>Pokemon Detail</h2>
      <p>Amplified Pokemon Information.</p>
    </div>
  );
};

export default PokemonDetails;
