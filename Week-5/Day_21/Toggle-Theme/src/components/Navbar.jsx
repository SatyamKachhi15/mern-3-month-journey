import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


function Navbar() {
    const {theme } = useContext(ThemeContext);
    return (
        <nav className="navbar">
            <h2> Theme Toggle App </h2>
            <p> Current Theme : {theme} </p>
            </nav>
    );
};
export default Navbar;