// src/functions/ConvertDate.js
const ConvertDate = (number) => {
    const date = new Date(number);
    return date.getDate() + "/" + (date.getMonth() + 1); // Format: DD/MM
  };
  
  export default ConvertDate; // Export the function
  