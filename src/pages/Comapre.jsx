import { useState, useEffect } from 'react';
import Header from '../component/Common/Header';
import Footer from '../component/Common/Footer';
import Select from '../component/compare/Select';
import List from '../component/Dashboard/List';
import { getCoinData } from '../functions/getCoinData';
import { settingCoinObject } from '../functions/SettingCoinObject';
import { coins100 } from '../functions/coins100';
import CoinInfo from '../component/Coins/CoinInfo';
import { getPrices } from '../functions/getPrices'; 
import { settingChartData } from '../functions/settingchartdata'; 
import LineChart from '../component/Coins/LineChart';
import SelectDays from '../component/Coins/Selectdays';

function Compare() {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [coin1Data, setCoin1Data] = useState({});
  const [coin2Data, setCoin2Data] = useState({});
  const [error, setError] = useState(false);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [days, setDays] = useState(30);

  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days, priceType]);

  const getData = async () => {
    setLoading(true);
    setError(false); // Reset error state on new fetch
    try {
      const coins = await coins100(); 
      setAllCoins(coins);

      const [data1, data2] = await Promise.all([
        getCoinData(crypto1, setError),
        getCoinData(crypto2, setError),
      ]);

      if (data1) settingCoinObject(data1, setCoin1Data);
      if (data2) settingCoinObject(data2, setCoin2Data);

      if (data1 && data2) {
        await fetchPrices(data1, data2);
      }
    } catch (err) {
      console.error("Error fetching coins:", err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchPrices = async (data1, data2) => {
    setLoading(true);
    try {
      const [prices1, prices2] = await Promise.all([
        getPrices(crypto1, days, priceType),
        getPrices(crypto2, days, priceType),
      ]);
      settingChartData(setChartData, prices1, prices2);
    } catch (err) {
      console.error("Error fetching prices:", err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const updateCoinData = async (newCrypto, isCoin2) => {
    setLoading(true);
    setError(false); // Reset error state
    try {
      const coinData = await getCoinData(newCrypto, setError);
      if (isCoin2) {
        setCrypto2(newCrypto);
        settingCoinObject(coinData, setCoin2Data);
      } else {
        setCrypto1(newCrypto);
        settingCoinObject(coinData, setCoin1Data);
      }

      // Fetch prices after changing the coin
      await fetchPrices();
    } catch (err) {
      console.error("Error fetching coin data:", err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onCoinChange = (e, isCoin2) => {
    const newCrypto = e.target.value;
    if (isCoin2 && newCrypto !== crypto2) {
      updateCoinData(newCrypto, true);
    } else if (!isCoin2 && newCrypto !== crypto1) {
      updateCoinData(newCrypto, false);
    }
  };

  const handleDaysChange = async (newDays) => {
    setDays(newDays);
    setLoading(true);
    try {
      await fetchPrices(); // Fetch prices after changing days
    } catch (err) {
      console.error("Error fetching prices:", err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (e) => {
    const newPriceType = e.target.value;
    setPriceType(newPriceType);
    setLoading(true);
    try {
      await fetchPrices(); // Fetch prices after changing price type
    } catch (err) {
      console.error("Error fetching prices:", err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-black h-full'>
      <Header />
      <Select
        crypto1={crypto1}
        crypto2={crypto2}
        setCrypto1={(value) => onCoinChange({ target: { value } }, false)} // Passing the new value to onCoinChange
        setCrypto2={(value) => onCoinChange({ target: { value } }, true)} // Passing the new value to onCoinChange
      />
      {error && <p className="text-red-500"></p>}
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <>
          <div className='text-white'>
            <List coin={coin1Data} delay={0.5} />
            <List coin={coin2Data} delay={0.5} />
          </div>
          <div className="m-4 text-white mb-5 w-[1090px]">
            <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={false} />
            <LineChart chartData={chartData} multiAxis={true} />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Compare;
