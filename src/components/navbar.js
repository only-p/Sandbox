import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav>
      <div className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="blog">
          Blog
        </Link>
      </div>
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};
export default Navbar;
