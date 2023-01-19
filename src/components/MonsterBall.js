import React, { useState } from "react";
import "./MonsterBall.css";

const MonsterBall = () => {
  const [active, setActive] = useState(false);

  const clickBall = () => {
    setActive(!active);
  };

  return (
    <div className="monsterBall">
      <img
        src="https://www.4gamer.net/games/335/G033525/20161111096/SS/001.jpg"
        alt="モンスターボール"
        className={active ? "active" : ""}
        onClick={clickBall}
      />
    </div>
  );
};

export default MonsterBall;
