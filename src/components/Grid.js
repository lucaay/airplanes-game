import React from "react";
import classes from "./grid.module.scss";
import clsx from "clsx";

const Grid = ({ grid, planePosition }) => {

    return (
        <div className={classes["grid"]}>
            {grid.map((row, i) => {
                return (
                    <div className={classes["grid__row"]} key={"row" + i}>
                        {row.map((col, j) => {
                            const cellClickHandler = (e) => {
                                console.log(`Clicked on cell ${i} ${j}`);
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
                                                grid[i][j] === 1,
                                        })}
                                        onClick={cellClickHandler}
                                    >
                                        {col}
                                    </div>
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
