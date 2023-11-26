import React from 'react';
import './editProfile.css';
import TextField from '@mui/material/TextField';
import { Box, Button, Grid } from '@mui/material';

const EditProfile = () => {
  return (
    <Box
      component="form"
      //   onSubmit={}
      className="profileEdit"
    >
      <Grid xs={8} sm={9} className="profileEditGrid" container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            defaultValue="Isuru Wimalasiri"
            variant="standard"
            fullWidth
            className="profileEditText"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Mobile Number"
            defaultValue="+94703134701"
            variant="standard"
            fullWidth
            className="profileEditText"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Address"
            defaultValue="17/3 Moratuwa, Colombo"
            variant="standard"
            fullWidth
            className="profileEditText"
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{ color: '#66bb6a', width: '90px' }}
            className="profileBtnCancel"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#66bb6a',
              marginLeft: '20px',
              width: '90px',
            }}
            className="profileBtnSave"
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfile;
