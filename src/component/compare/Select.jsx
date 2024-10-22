import React, { useEffect, useState } from 'react';
import { coins100 } from '../../functions/coins100';
import { MenuItem, Select as MuiSelect, CircularProgress } from "@mui/material";

function Select({ crypto1, crypto2, setCrypto1, setCrypto2 }) {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const style = {
    height: "2.5rem",
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const myCoins = await coins100();
        setAllCoins(myCoins);
      } catch (error) {
        console.error("Error fetching coins:", error);
        setError("Failed to load coins");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className='flex items-center justify-start gap-2 mb-6'>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      <p className='text-white text-lg font-bold mr-3'>Crypto1:</p>
      {loading ? (
        <CircularProgress color="inherit" size={24} /> // Loading indicator
      ) : (
        <MuiSelect
          value={crypto1}
          onChange={(event) => setCrypto1(event.target.value)} // Handle change
          sx={style}
        >
          {allCoins.map((coin) => (
            <MenuItem key={coin.id} value={coin.id}>
              {coin.name} {/* Display coin name */}
            </MenuItem>
          ))}
        </MuiSelect>
      )}

      <p className='text-white text-lg font-bold ml-4 mr-3'>Crypto2:</p>
      {loading ? (
        <CircularProgress color="inherit" size={24} /> // Loading indicator
      ) : (
        <MuiSelect
          value={crypto2}
          onChange={(event) => setCrypto2(event.target.value)} // Handle change
          sx={style}
        >
          {allCoins.map((coin) => (
            <MenuItem key={coin.id} value={coin.id}>
              {coin.name} {/* Display coin name */}
            </MenuItem>
          ))}
        </MuiSelect>
      )}
    </div>
  );
}

export default Select;
