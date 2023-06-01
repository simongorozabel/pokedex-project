import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login/Login";
import Layout from "../components/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./Loader/pokedexLoader";

//BrowserRouter needs to be configured with the deploy platform

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Login
        onSendName={(userNameValue, handleSendName) => {
          handleSendName(userNameValue);
        }}
      />
    ),
  },
  {
    path: "/pokedex",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Pokedex />,
        loader: pokedexLoader,
      },

      {
        path: ":pokemonId",
        element: (
          <div>
            <h2>Detalles id=pokemonId</h2> <p>Lorem ipsum dolor sit amet</p>
          </div>
        ),
      },
    ],
  },
]);
