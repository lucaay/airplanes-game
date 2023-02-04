import React from "react";
import classes from "./endGameElements.module.scss";
import clsx from "clsx";
import EndGameStats from "./EndGameStats";

const EndGameElements = ({ numberOfStrikes, resetGame }) => {
    return (
        <div className={classes["endGameElements"]}>
            <div className={classes["endGameElements__container"]}>
                <p className={classes["endGameElements__strikes"]}>
                    Number of strikes: <span>{numberOfStrikes}</span>
                </p>
                <button
                    className={classes["endGameElements__restartGame"]}
                    onClick={resetGame}
                >
                    Restart Game
                </button>
            </div>
            <EndGameStats numberOfStrikes={numberOfStrikes} />
        </div>
    );
};

export default EndGameElements;
