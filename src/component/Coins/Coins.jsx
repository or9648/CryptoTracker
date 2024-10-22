// src/components/CoinDetail/CoinDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../Dashboard/List';
import Header from '../Common/Header';
import { settingCoinObject } from '../../functions/SettingCoinObject';
import Loader from '../Common/Loader';
import CoinInfo from './CoinInfo';
import { getPrices } from '../../functions/getPrices';
import { getCoinData } from '../../functions/getCoinData';
import LineChart from '../../component/Coins/LineChart'; // Corrected import path
import Footer from '../Common/Footer';
import ConvertDate from '../../functions/ConvertDate';
import SelectDays from './Selectdays'; // Adjusted import case
import { settingChartData } from '../../functions/settingchartdata';

function CoinDetail() {
  const { id } = useParams(); // Get the coin ID from the URL
  const [coin, setCoin] = useState(null); // Initialize coin state
  const [loading, setLoading] = useState(true); // Loading state
  const [marketData, setMarketData] = useState([]); // State to hold market data
  const [days, setDays] = useState(30); // Default days for market chart
  const [chartData, setChartData] = useState({}); // State for chart data

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinData = await getCoinData(id);
        settingCoinObject(coinData, setCoin); // Set the coin data

        const fetchedMarketData = await getPrices(id, days);
        console.log('Fetched Market Data:', fetchedMarketData); // Debugging line
        settingChartData(setChartData, fetchedMarketData);
        // Prepare chart data
                setMarketData(fetchedMarketData); // Store market data
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchCoinData();
  }, [id, days]); // Add id and days as dependencies

  // Show loading spinner while data is fetching
  if (loading) return <Loader />; // Show Loader component while loading

  // Show message if no coin data is available
  if (!coin) return <div>No coin data available</div>;

  return (
    <div className="bg-black text-white min-h-screen">
      <Header /> {/* Add the Header component */}
      <div className="container mx-auto mb-3 p-4">
        <List coin={coin} delay={0.5} /> {/* Pass the coin object */}
      </div>
      <div className="container mx-auto h-auto mb-3 p-4">
        <SelectDays days={days} handleDaysChange={setDays} noPTag={false} /> {/* SelectDays component */}
        <LineChart chartData={chartData} /> {/* Pass chartData to LineChart */}
      </div>
      <CoinInfo heading={coin.name} desc={coin.desc} /> {/* Use the correct property for description */}
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default CoinDetail;
