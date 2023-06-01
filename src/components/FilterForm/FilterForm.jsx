import { useState, useEffect } from "react";
import "./FilterForm.css";
import { Form } from "react-router-dom";
import { getAllTypes } from "../../services/getAllTypes";

const FilterForm = ({ nameInitial, typeInitial }) => {
  const [types, setTypes] = useState([]);
  const [nameValue, setNameValue] = useState(nameInitial);
  const [typeValue, setTypeValue] = useState(typeInitial);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNameValue(newValue);
  };

  const handleTypeChange = (e) => {
    const newTypeValue = e.target.value;
    setTypeValue(newTypeValue);
  };

  useEffect(() => {
    const loadTypes = async () => {
      const typeList = await getAllTypes();
      setTypes(typeList);
    };
    loadTypes();
  }, []);

  useEffect(() => {
    setNameValue(nameInitial);
  }, [nameInitial]);

  useEffect(() => {
    setTypeValue(typeInitial);
  }, [typeInitial]);

  return (
    <Form className="filter__form__container">
      <h2>Filter your search by name.</h2>

      <div>
        <input
          value={nameValue}
          onChange={handleChange}
          type="text"
          placeholder="Write your pokemon name"
          name="pokemonName"
        />

        <h2>Or filter by type:</h2>

        <select
          name="pokemonType"
          value={typeValue}
          onChange={handleTypeChange}
        >
          <option value="">All</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name[0].toUpperCase() + type.name.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <button>Search</button>
    </Form>
  );
};

export default FilterForm;
