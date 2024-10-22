import React, { useEffect, useState } from 'react';
import Footer from '../component/Common/Footer';
import Header from '../component/Common/Header';
import BasicTabs from '../component/Dashboard';
import { coins100 } from '../functions/coins100'; // Ensure this import is correct

function WishList() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || []; // Default to empty array if no watchlist
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist.length > 0) { // Check if watchlist has items
      getData();
    }
  }, [watchlist]); // Dependency array updated to include watchlist

  const getData = async () => {
    try {
      const allCoins = await coins100(); // Fetch all coins
      if (allCoins) {
        // Filter the fetched coins to match the watchlist
        const filteredCoins = allCoins.filter((coin) => watchlist.includes(coin.id));
        setCoins(filteredCoins);
      }
    } catch (error) {
      console.error("Error fetching coins:", error); // Log any errors
    }
  };

  return (
    <div>
      <Header />
      {coins.length > 0 ? ( // Check if there are coins in the filtered list
        <BasicTabs coins={coins} /> // Pass filtered coins to BasicTabs
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <button className="btn">Dashboard</button> {/* Assuming you have a Button component styled */}
            </a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default WishList;
