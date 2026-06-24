import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";

import { Tooltip } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";

function Watchlist() {
    const labels = watchlist.map((subArray)=>subArray["name"]);
    const data = {
      labels,
      datasets: [
        {
          label: "Price",
          data: watchlist.map((stock)=>stock.price),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ]
    }
    //   export const data = {
    //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //   datasets: [
        // {
        //   label: '# of Votes',
        //   data: [12, 19, 3, 5, 2, 3],
        //   backgroundColor: [
        //     'rgba(255, 99, 132, 0.2)',
        //     'rgba(54, 162, 235, 0.2)',
        //     'rgba(255, 206, 86, 0.2)',
        //     'rgba(75, 192, 192, 0.2)',
        //     'rgba(153, 102, 255, 0.2)',
        //     'rgba(255, 159, 64, 0.2)',
        //   ],
        //   borderColor: [
        //     'rgba(255, 99, 132, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)',
        //   ],
        //   borderWidth: 1,
        // },
    //   ],
    // };
  return (
    <div className="watchlist-container">
      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
      <DoughnutChart data={data}/>
    </div>
  );
}

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && (
        <WatchListActions uid={stock.name} />
      )}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow>
        <button className="buy" onClick={handleBuyClick}>
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow>
        <button className="sell">Sell</button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" arrow>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};

export default Watchlist;