// src/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Header from '../component/Common/Header';
import BasicTabs from "../component/Dashboard/index";
import Footer from '../component/Common/Footer';
import Search from '../component/Dashboard/Search';
import Page from '../component/Dashboard/Page';
import Loader from '../component/Common/Loader'; // Import the Loader component
import { coins100 } from '../functions/coins100'; // Import the coins100 function

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  useEffect(() => {
    // Get 100 Coins
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await coins100(); // Fetch coins data
      setCoins(data);
      setPaginatedCoins(data.slice(0, 10)); // Initialize paginated coins
    } catch (error) {
      console.log("ERROR>>>", error.message);
    } finally {
      setLoading(false); // Ensure loading is set to false
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value); // Update search state
    console.log(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    const initialCount = (value - 1) * 10;
    setPaginatedCoins(filteredCoins.slice(initialCount, initialCount + 10)); // Use filteredCoins here
  };

  // Handle no results
  useEffect(() => {
    handlePageChange(null, 1); // Reset to page 1 when search changes
  }, [search]);

  // Render loading indicator or filtered coins
  return (
    <div className='h-full'>
      <Header />
      <Search search={search} handleChange={handleChange} />
   <div className=''>
   {loading ? (
        <Loader /> // Show loader component
      ) : filteredCoins.length > 0 ? (
        <>
          <BasicTabs coins={paginatedCoins} /> {/* Show paginated coins */}
          <Page page={page} handlePageChange={handlePageChange} /> {/* Pagination controls */}
        </>
      ) : (
        <div>
          <div>No results found</div> {/* Handle no results */}
          <Footer />
        </div>
      )}
   </div>
     
      <Footer />
    </div>
  );
}

export default Dashboard;
