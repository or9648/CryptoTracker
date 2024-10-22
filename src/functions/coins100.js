import axios from "axios";

export const coins100 = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    console.log("RESPONSE>>>", response.data);
    return response.data; // Return the data directly
  } catch (error) {
    console.log("ERROR>>>", error.message);
    return []; // Return an empty array on error
  }
};
