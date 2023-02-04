import React, { useEffect, useState } from "react";
import classes from "./app.module.scss";
import Grid from "./components/Grid";

const App = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [gridSize, setGridSize] = useState(5);
    const [grid, setGrid] = useState([]);
    const [planePosition, setPlanePosition] = useState(new Array(2).fill(0));
    
    const startHandler = () => {
        setGridSize(6);

        setPlanePosition([
            Math.floor(Math.random() * gridSize),
            Math.floor(Math.random() * gridSize),
        ]);

        setGrid(
            new Array(gridSize).fill(0).map(() => new Array(gridSize).fill(0))
        );

        setGrid((prevGrid) => {
            prevGrid[planePosition[0]][planePosition[1]] = 1;
            return prevGrid;
        });

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
                    <Grid grid={grid} planePosition={planePosition} />
                </div>
            )}
        </div>
    );
};

export default App;
