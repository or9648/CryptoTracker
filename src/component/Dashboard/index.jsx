import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Grid from './Grid'; // Import the Grid component
import List from './List'; // Import the List component

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ coins }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full h-full bg-black"> {/* Full height for better layout */}
      <Box sx={{ width: '100%', background: 'black' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            className="w-full"
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab
              label="Grid"
              {...a11yProps(0)}
              sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }} // Change selected tab color
            />
            <Tab
              label="List"
              {...a11yProps(1)}
              sx={{ color: 'white', '&.Mui-selected': { color: 'blue' } }} // Change selected tab color
            />
          </Tabs>
        </Box>
        
        <CustomTabPanel value={value} index={0}>
          {/* Render coins in a numbered grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
            transition={{ duration: 0.5 }} // Shorten duration for quicker animations
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" // Added padding for better spacing
          >
            {coins.map((coin, index) => (
              <Grid key={coin.id} coin={coin} index={index} /> // Pass coin and index to Grid component
            ))}
          </motion.div>
        </CustomTabPanel>
        
        <CustomTabPanel value={value} index={1}>
          <div className="text-white p-4"> {/* Added padding for list view */}
            {coins.map((coin, index) => (
              <div key={coin.id} className="bg-gray-800  p-4 rounded-md text-white mb-2 shadow-md hover:shadow-lg transition-shadow"> {/* Improved styling */}
                <List coin={coin} index={index} /> {/* Use List component */}
              </div>
            ))}
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
