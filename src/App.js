import "./App.css";
import MonsterBall from "./components/MonsterBall";
import PokemonImg from "./components/PokemonImg";

function App() {
  return (
    <div className="App">
      <MonsterBall />

      {/* ポケモン画像 */}
      <PokemonImg />
    </div>
  );
}

export default App;
