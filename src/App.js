import React, { useEffect,useCallback, useState } from "react";
import classes from "./app.module.scss";
import Grid from "./components/Grid";
import EndGameStats from "./components/EndGameStats";

const App = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [gridSize, setGridSize] = useState(5);
    const [grid, setGrid] = useState([]);
    const [planePosition, setPlanePosition] = useState(new Array(2).fill(0));
    const [pastGamesData, setPastGamesData] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        setPlanePosition([
            Math.floor(Math.random() * gridSize),
            Math.floor(Math.random() * gridSize),
        ]);
    }, [gridSize]);

    //create timer
    const startTime = useCallback(() => {
        //useCallback to prevent infinite loop
        let seconds = 0;
        const timer = setInterval(() => {
            seconds++;
            setTime(seconds);
        }, 1000);
        return timer;
    }, []);

    const resetGame = () => {
        setGameStarted(false);
        setGridSize(5);
        setGrid([]);
        setPlanePosition(new Array(2).fill(0));
    };

    const startHandler = () => {
        startTime();
        setGridSize(6);
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
                    <Grid
                        grid={grid}
                        resetGame={resetGame}
                        setPastGamesData={setPastGamesData}
                        time={time}
                    />
                </div>
            )}
            <EndGameStats pastGamesData={pastGamesData} />
        </div>
    );
};

export default App;
