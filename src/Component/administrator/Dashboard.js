import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Grid, Paper } from '@mui/material';
import { style, width } from '@mui/system';
import { margin } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoryIcon from '@mui/icons-material/Category';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LogoutIcon from '@mui/icons-material/Logout';
import DisplayAllCompanies from './DisplayAllCompany';
import DisplayAllCategories from './DisplayAllCategories';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Product from './Product';
import DisplayAllProducts from './DisplayAllProducts';





export default function Dashboard() {

  var navigate = useNavigate()

  return (

    <div>

      <Box sx={{ flexGrow: 1, background: "black" }}>
        <AppBar position="static" sx={{ background: "black" }}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Gwalior Basket
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container>
        <Grid item xs={2}>
          <div style={{ margin: 30 }}><Avatar alt="Remy Sharp" variant="rounded" src={"./basketlogo.png"} /></div>
          <Paper style={{ width: 180, height: 70, margin: 20, background: "EEEEEE" }} elevation={2}>
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", paddingTop: 18, fontFamily: "poppins", fontWeight: "bold" }}>
              <Avatar alt="Remy Sharp" variant="rounded" src={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png"} sx={{ height: 45 }} />
              <span >Rohit tomar</span>
            </div>
          </Paper>
          <div>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate("/Dashboard/DisplayAllCategories")}
                >


                  <ListItemIcon>

                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontFamily: "poppins", fontWeight: 700, letterSpacing: 1 }}>Category</span>} />
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate("/Dashboard/Product")}
                >
                  <ListItemIcon>
                    <AddShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AddPhotoAlternateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Pictures"/>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>


            </List>
          </div>

        </Grid>
        <Grid item xs={8}>
          <Routes>
            <Route element={< DisplayAllCategories />} path={"/DisplayAllCategories"}></Route>
          </Routes>
          <Routes>
            <Route element={<Product />} path={"/Product"}></Route>
            <Route element={<DisplayAllProducts />} path={"/DisplayAllProducts"}></Route>
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

