import "./App.css";
import MonsterBall from "./components/MonsterBall";
import PokemonImg from "./components/PokemonImg";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MonsterBall />} />
        <Route path="/pokemon" element={<PokemonImg />} />
      </Routes>
    </div>
  );
}

export default App;
