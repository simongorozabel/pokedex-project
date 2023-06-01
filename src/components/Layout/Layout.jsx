import { Outlet } from "react-router-dom";

import "./Layout.css";
const Layout = () => {
  return (
    <div className="layout__container">
      <header>
        <h1>PokedeX </h1>
      </header>

      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
