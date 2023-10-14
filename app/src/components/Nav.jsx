import { useContext } from "react";
import {
  ThemeDispatchContext,
  ThemeContext,
  UserContext,
} from "../contexts/DataContext";

const Nav = () => {
  const themeDispatch = useContext(ThemeDispatchContext);
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  console.log(themeDispatch);

  function handleClick(mode) {
    console.log({ value: mode });
    themeDispatch({ value: mode });
  }

  return (
    <nav className="container">
      <ul>
        <li>
          <strong>Brand</strong>
        </li>
      </ul>
      <ul>
        <li>{userContext.name}</li>
        <li>
          <div className="profile">
            <img src={userContext.image} />
          </div>
        </li>
      </ul>
      <ul>
        <li>
          {themeContext.value === "light" ? (
            <button onClick={() => handleClick("dark")}>🌙</button>
          ) : (
            <button onClick={() => handleClick("light")}>🌞</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
