// src/functions/SettingChartData.js

import ConvertDate from './ConvertDate'; // Import the ConvertDate function

export const settingChartData = (setChartData, fetchedMarketData) => {
  // Set the chart data
  setChartData({
    labels: fetchedMarketData.map((price) => ConvertDate(price[0])), // Convert timestamps to dates
    datasets: [
      {
        label: 'Price Dataset', // Dataset label
        data: fetchedMarketData.map((price) => price[1]), // Extract prices
        borderWidth: 1,
        fill: true,
        backgroundColor: "rgba(58, 128, 233, 0.1)",
        tension: 0.25,
        borderColor: "#3a80e9",
        pointRadius: 4,
        yAxisID: "crypto1",
      },
    ],
  });
};
