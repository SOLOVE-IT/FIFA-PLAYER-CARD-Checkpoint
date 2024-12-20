import React from "react";
import Player from "./Player";
import players from "../data/players";

const PlayersList = () => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {players.map((player) => (
                <Player key={player.id} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;
