import React, { useEffect, useCallback, useState } from "react";
import classes from "./app.module.scss";
import Grid from "./components/Grid";
import EndGameStats from "./components/EndGameStats";

const App = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [gridSize, setGridSize] = useState(5);
    const [grid, setGrid] = useState([]);
    const [pastGamesData, setPastGamesData] = useState([]);
    const [time, setTime] = useState(0);
    const [startDisabled, setStartDisabled] = useState(false);

    useEffect(() => {
        if(gridSize < 2){
            setStartDisabled(true);
        }else{
            setStartDisabled(false);
        }
    }, [gridSize])
    

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
    };

    const startHandler = () => {
        startTime();
        
        setGrid(()=> {
            let tempArray = new Array(gridSize).fill(0).map(() => new Array(gridSize).fill(0));
            let xPlane = Math.floor(Math.random() * gridSize);
            let yPlane = Math.floor(Math.random() * gridSize);
            tempArray[xPlane][yPlane] = 1;
            return tempArray;
        })

        setGameStarted(true);
    };

    const gridSizeHandler = (e) =>{
        setGridSize(parseInt(e.target.value));
    }
    return (
        <div className={classes["main"]}>
            <h1 className={classes["main__GameTitle"]}>Airplanes Game</h1>
            {!gameStarted ? (
                <div className={classes["main__Container"]}>
                    <div>
                        <label htmlFor="gridSize">Scrie size-ul gridului:</label>
                        <input id='gridSize' value={gridSize} onChange={gridSizeHandler} 
                        type='number'
                        />
                    </div>
                    <button
                        className={classes["main__startGame"]}
                        onClick={startHandler}
                        disabled={startDisabled}
                    >
                        START
                    </button>
                </div>
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
