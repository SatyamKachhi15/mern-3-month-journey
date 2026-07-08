import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="home">
      <h1>Welcome to Context API</h1>

      <h2>Theme : {theme}</h2>
    </div>
  );
}

export default Home;