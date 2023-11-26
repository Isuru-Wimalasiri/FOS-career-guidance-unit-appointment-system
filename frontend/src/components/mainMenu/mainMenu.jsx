import React from 'react';
import './mainMenu.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="mainMenu">
      <div className="row mainOptions">
        <Card sx={{ width: 270 }}>
          <CardActionArea>
            <div className="menuOptionsCardIcon">
              <AccountCircleIcon style={{ fontSize: '5rem' }} />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Profile
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                height={40}
              >
                View Your Details
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="menuOptionsBtn">
            <Button
              size="large"
              style={{ backgroundColor: '#66bb6a' }}
              variant="contained"
              onClick={() => {
                navigate('../menu/studentProfile');
              }}
            >
              Click Here
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 270 }}>
          <CardActionArea>
            <div className="menuOptionsCardIcon">
              <CalendarMonthIcon style={{ fontSize: '5rem' }} />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Make an Appoinment
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                height={40}
              >
                Make an Appoinment with Academic Counsellor
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="menuOptionsBtn">
            <Button
              size="large"
              style={{ backgroundColor: '#66bb6a' }}
              variant="contained"
              onClick={() => {
                navigate('../appoinment');
              }}
            >
              Click Here
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default MainMenu;
