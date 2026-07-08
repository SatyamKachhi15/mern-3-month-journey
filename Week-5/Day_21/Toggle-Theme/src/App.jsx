import {useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ThemeToggle from "./components/ThemeToggle";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
   <div className={`app ${theme}`}>
   <Navbar />
   <Home />
   <ThemeToggle />
    </div>
  );
};

export default App;