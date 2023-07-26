import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <NavLink to="/movies">Movies Page</NavLink>
        </li>
        <li>
          <NavLink to="/directors">Directors Page</NavLink>
        </li>
        <li>
          <NavLink to="/actors">Actors Page</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;