import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Wishlist icon
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu icon
import BarChartIcon from '@mui/icons-material/BarChart'; // Import BarChart icon for comparison
import { Link } from 'react-router-dom'; // Import Link

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, backgroundColor: 'black', height: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {/* Home, Compare, Dashboard, and Wishlist Items */}
        {[
          { text: 'Home', icon: <HomeIcon />, link: '/' },
          { text: 'Compare', icon: <BarChartIcon />, link: '/compare' }, // Added Compare item with icon
          { text: 'Dashboard', icon: <DashboardIcon />, link: '/dashboard' },
          { text: 'Wishlist', icon: <FavoriteIcon />, link: '/wishlist' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Use Link here */}
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'white' }} />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} variant="contained" sx={{ backgroundColor: 'white', color: 'black' }}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
