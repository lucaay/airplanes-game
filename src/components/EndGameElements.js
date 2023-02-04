import React from "react";
import classes from "./endGameElements.module.scss";
import clsx from "clsx";

const EndGameElements = ({numberOfStrikes, resetGame}) => {
    return (
        <div className={classes["endGameElements"]}>
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
    );
};

export default EndGameElements;
