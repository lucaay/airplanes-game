import React, { useState } from "react";
import classes from "./app.module.scss";
import Grid from "./components/Grid";

const App = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [gridSize, setGridSize] = useState(5);
    const [grid, setGrid] = useState([]);

    const startHandler = () => {
        setGrid(
            new Array(gridSize).fill(0).map(() => new Array(gridSize).fill(0))
        );
        setGridSize(6);
        setGameStarted(true);
    };

    return (
        <div className={classes["main"]}>
            <h1 className={classes["main__GameTitle"]}>Airplanes Game</h1>
            {!gameStarted ? (
                <button
                    className={classes["main__startGame"]}
                    onClick={startHandler}
                >
                    START
                </button>
            ) : (
                <div className={classes["game"]}>
                    <h1 className={classes["game__Title"]}>
                        Game Started! Find the plane!
                    </h1>
                    <Grid grid={grid} />
                </div>
            )}
        </div>
    );
};

export default App;
