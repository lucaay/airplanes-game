import React from "react";
import classes from "./endGameElements.module.scss";

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
        </div>
    );
};

export default EndGameElements;
