import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {

  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggle;