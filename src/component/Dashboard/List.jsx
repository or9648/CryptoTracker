import React, { useState } from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

function List({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist.includes(coin.id));

  const priceChangePercentage = coin.price_change_percentage_24h !== undefined
    ? coin.price_change_percentage_24h.toFixed(2)
    : "N/A"; // Handle missing price change percentage with a default value

  return (
    <a href={`/coin/${coin.id}`}>
      <motion.tr
        className="w-full py-4 mb-2 mx-auto flex flex-col md:flex-row justify-between items-center rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 border border-blue-500"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Tooltip title="Coin Image">
          <td className="w-12 mr-4 border-b border-blue-500">
            <img src={coin.image} className="coin-image h-12 w-12 rounded-full" alt={`${coin.name} logo`} />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td className="w-40 md:w-1/4 border-b border-blue-500">
            <div className="flex flex-col md:flex-row md:items-center">
              <p className="font-semibold">{coin.symbol?.toUpperCase()}</p>
              <p className="ml-2">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Coin Price Percentage In 24hrs" placement="bottom-start">
          <td className="text-center md:text-left border-b border-blue-500">
            <div className="flex items-center justify-center md:justify-start">
              <div className={`price-chip ${coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {priceChangePercentage}%
              </div>
              <div className="td-chip-icon">
                {coin.price_change_percentage_24h >= 0 ? (
                  <TrendingUpRoundedIcon />
                ) : (
                  <TrendingDownRoundedIcon />
                )}
              </div>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Coin Price In USD" placement="bottom-end">
          <td className={`current-price ${coin.price_change_percentage_24h >= 0 ? '' : 'text-red-500'} text-center md:text-left border-b border-blue-500`}>
            ${coin.current_price?.toLocaleString()}
          </td>
        </Tooltip>
        <Tooltip title="Coin Total Volume" placement="bottom-end">
          <td className="td-totalVolume text-right border-b border-blue-500">
            {coin.total_volume?.toLocaleString()}
          </td>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <td className="td-marketCap text-right border-b border-blue-500">
            ${coin.market_cap?.toLocaleString()}
          </td>
        </Tooltip>
        <td className="mobile hidden text-left border-b border-blue-500">
          {/* Mobile-specific content can be added here if needed */}
        </td>
        <td
          className={`watchlist-icon ${coin.price_change_percentage_24h < 0 ? 'text-red-500' : ''} cursor-pointer`}
          onClick={(e) => {
            e.preventDefault(); // Prevent link navigation
            // Logic to add/remove from watchlist
            if (isCoinAdded) {
              const newWatchlist = watchlist.filter((id) => id !== coin.id);
              localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
              setIsCoinAdded(false);
            } else {
              watchlist.push(coin.id);
              localStorage.setItem("watchlist", JSON.stringify(watchlist));
              setIsCoinAdded(true);
            }
          }}
        >
          {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
        </td>
      </motion.tr>
    </a>
  );
}

export default List;
