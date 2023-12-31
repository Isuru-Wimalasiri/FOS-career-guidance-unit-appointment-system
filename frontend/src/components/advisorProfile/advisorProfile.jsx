import React, { useState } from 'react';
import './advisorProfile.css';
import HistoryIcon from '@mui/icons-material/History';
import EditIcon from '@mui/icons-material/Edit';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EditProfile from '../editProfile/editProfile';
import PostAddIcon from '@mui/icons-material/PostAdd';

export const AdvisorProfile = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 200;

  const [clickOption, setClickOption] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSideClick = (index) => {
    if (index === 0) {
      setClickOption(0);
    } else if (index === 1) {
      setClickOption(1);
    } else if (index === 2) {
      setClickOption(2);
    }
  };

  const drawer = (
    <div>
      <div className="studentProfileHeaderLeft">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/cc/University_of_Peradeniya_crest.png"
          height="40px"
          alt="fosLogo"
        />{' '}
        <span className="studentProfileHeaderLeftText">FOS-CGU</span>
      </div>
      <List>
        {['New', 'History', 'Edit Details'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            style={
              clickOption === index
                ? { backgroundColor: '#66bb6a', color: 'white' }
                : { backgroundColor: 'white' }
            }
          >
            <ListItemButton onClick={() => handleSideClick(index)}>
              <ListItemIcon>
                {index === 0 && <PostAddIcon />}
                {index === 1 && <HistoryIcon />}
                {index === 2 && <EditIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="profile">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className="profileToolHeader">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <div className="profileHeader">
              <div className="profilePic"></div>
              <Typography variant="h6" noWrap component="div" color="#222222">
                Isuru Wimalasiri
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <div className="profileSection">
            {clickOption === 1 ? <div>Print</div> : <EditProfile />}
          </div>
        </Box>
      </Box>
    </div>
  );
};
