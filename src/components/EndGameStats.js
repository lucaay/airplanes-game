import React from "react";
import classes from "./endGameStats.module.scss";
import clsx from "clsx";

const EndGameStats = ({numberOfStrikes}) => {
    return (
        <div className={classes["endGameStats"]}>
            <p className={classes["endGameStats__strikes"]}>
                Number of strikes: <span>{numberOfStrikes}</span>
            </p>
            
        </div>
    );
};

export default EndGameStats;
