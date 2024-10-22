import React from "react";
import { motion } from "framer-motion";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

function Grid({ coin, delay }) {
  
  // Null/undefined check for `coin` to prevent runtime errors
  if (!coin) return null;

  return (
    <a href={`/coin/${coin.id}`} aria-label={`View details of ${coin.name}`}>
      <motion.div
        className={`flex flex-col gap-4 overflow-y-hidden w-full max-w-xs md:max-w-md lg:max-w-lg m-2 p-6 md:p-8 bg-gray-800 rounded-lg border-2 cursor-pointer transition-all duration-300 
          ${coin.price_change_percentage_24h < 0 ? "border-red-600" : "border-gray-800"} 
          hover:border-green-500`}
        initial={{ opacity: 0, z: 50 }}
        whileInView={{ opacity: 1, z: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="flex items-center gap-4">
          <img
            src={coin.image || '/default-image.png'}
            alt={coin.name || 'coin'}
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-sm text-white font-semibold uppercase">
              {coin.symbol?.toUpperCase() || 'N/A'}
            </p>
            <p className="text-xs text-gray-400">{coin.name || 'Unknown Coin'}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {coin.price_change_percentage_24h >= 0 ? (
            <>
              <div className="border-2 border-green-500 rounded-full py-1 px-3 font-semibold text-green-500">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="border-2 border-green-500 rounded-full p-2 flex justify-center items-center text-green-500">
                <TrendingUpRoundedIcon />
              </div>
            </>
          ) : (
            <>
              <div className="border-2 border-red-600 rounded-full py-1 px-3 font-semibold text-red-600">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="border-2 border-red-600 rounded-full p-2 flex justify-center items-center text-red-600">
                <TrendingDownRoundedIcon />
              </div>
            </>
          )}
        </div>

        <p className={`font-semibold text-xl ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-600"}`}>
          ${coin.current_price?.toLocaleString() || 'N/A'}
        </p>
        <p className="text-sm text-gray-400">
          Total Volume: {coin.total_volume?.toLocaleString() || 'N/A'}
        </p>
        <p className="text-sm text-gray-400">
          Market Capital: ${coin.market_cap?.toLocaleString() || 'N/A'}
        </p>
      </motion.div>
    </a>
  );
}

export default Grid;
