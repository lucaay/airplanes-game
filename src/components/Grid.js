import React, { useCallback, useEffect, useState } from "react";
import classes from "./grid.module.scss";
import clsx from "clsx";
import EndGameElements from "./EndGameElements";

const Grid = ({ grid, resetGame, setPastGamesData, time }) => {
    // grid[i][j] === 1 ? "plane" : "empty"
    const [numberOfStrikes, setNumberOfStrikes] = useState(0);
    const [planeFound, setPlaneFound] = useState(false);

    const gameOverHandler = () => {
        const gameData = {
            date: new Date().toLocaleDateString(),
            numberOfStrikes: numberOfStrikes,
            time: time,
        };
        clearInterval(time);
        setPastGamesData((prev) => {
            return [
                ...prev,
                gameData,
            ];
        });
    };

    return (
        <>
            {planeFound && <h1 className={classes["gameOver"]}>Game Over!</h1>}
            {planeFound ? (
                <EndGameElements
                    numberOfStrikes={numberOfStrikes}
                    resetGame={resetGame}
                />
            ) : null}
            <div
                className={clsx({
                    [classes["grid"]]: true,
                    [classes["gridGameOverState"]]: planeFound,
                })}
            >
                {grid.map((row, i) => {
                    return (
                        <div className={classes["grid__row"]} key={"row" + i}>
                            {row.map((col, j) => {
                                const cellClickHandler = (e) => {
                                    setNumberOfStrikes((prev) => prev + 1);
                                    if (grid[i][j] === 1) {
                                        setPlaneFound(true);
                                        gameOverHandler();
                                    } else {
                                        e.target.innerHTML = "Miss";
                                    }
                                };

                                return (
                                    <div
                                        className={classes["grid__col"]}
                                        key={"col" + j}
                                    >
                                        <div
                                            className={clsx({
                                                [classes["cell"]]: true,
                                                [classes["planeCell"]]:
                                                    grid[i][j] === 1 &&
                                                    planeFound,
                                            })}
                                            onClick={cellClickHandler}
                                        ></div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Grid;
