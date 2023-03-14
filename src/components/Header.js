import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth";

import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authAction.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {authenticated && (
            <li>
              <a href="/">My Products</a>
            </li>
          )}
          {authenticated && (
            <li>
              <a href="/">My Sales</a>
            </li>
          )}
          <li>
            {authenticated && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
