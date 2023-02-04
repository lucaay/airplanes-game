import React, { useEffect, useState } from "react";
import classes from "./endGameStats.module.scss";

const EndGameStats = ({ pastGamesData }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (pastGamesData.length > 0) {
            //sort pastGamesData by number of strikes in descending order
            pastGamesData.sort((a, b) => {
                return b.numberOfStrikes - a.numberOfStrikes;
            });

            setData(
                pastGamesData.map((game) => {
                    return (
                        <tr
                            className={classes["endGameStats__table__row"]}
                            key={game.date}
                        >
                            <td
                                className={
                                    classes["endGameStats__table__row__col"]
                                }
                            >
                                {game.date}
                            </td>
                            <td
                                className={
                                    classes["endGameStats__table__row__col"]
                                }
                            >
                                {game.numberOfStrikes}
                            </td>
                            <td
                                className={
                                    classes["endGameStats__table__row__col"]
                                }
                            >
                                {game.time}
                            </td>
                        </tr>
                    );
                })
            );
        }
    }, [pastGamesData]);
    return (
        <div className={classes["endGameStats"]}>
            <table className={classes["endGameStats__table"]}>
                <tbody>
                    <tr className={classes["endGameStats__table__row"]}>
                        <th
                            className={classes["endGameStats__table__row__col"]}
                        >
                            Date
                        </th>
                        <th
                            className={classes["endGameStats__table__row__col"]}
                        >
                            Strikes
                        </th>
                        <th
                            className={classes["endGameStats__table__row__col"]}
                        >
                            Duration
                        </th>
                    </tr>
                    {data}
                </tbody>
            </table>
        </div>
    );
};

export default EndGameStats;
