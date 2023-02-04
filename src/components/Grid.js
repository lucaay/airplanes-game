import React from "react";
import classes from "./grid.module.scss";

const Grid = ({ grid }) => {
    return (
        <div className={classes["grid"]}>
            {grid.map((row, i) => {
                return (
                    <div className={classes["grid__row"]} key={"row" + i}>
                        {row.map((col, j) => {
                            return (
                                <div
                                    className={classes["grid__col"]}
                                    key={"col" + j}
                                >
                                    <div className={classes["cell"]}>CELL</div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Grid;
