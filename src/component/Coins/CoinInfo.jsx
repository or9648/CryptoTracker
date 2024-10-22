import React, { useState } from 'react';

function CoinInfo({ heading, desc }) {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle between show more/less

  // Split the description into two parts
  const shortDesc = desc.slice(0, 400); // First 200 characters
  const isLongDesc = desc.length > 400; // Check if the description is longer than 200 characters

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{heading}</h1>
      <p className="text-gray-300">
        {/* Render the full description or the shortened version based on isExpanded */}
        {isExpanded || !isLongDesc ? (
          <span dangerouslySetInnerHTML={{ __html: desc }} />
        ) : (
          <span dangerouslySetInnerHTML={{ __html: `${shortDesc}...` }} />
        )}
      </p>
      {isLongDesc && (
        <button
          onClick={() => setIsExpanded(!isExpanded)} // Toggle the expanded state
          className="text-blue-400 mt-2 focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}

export default CoinInfo;
