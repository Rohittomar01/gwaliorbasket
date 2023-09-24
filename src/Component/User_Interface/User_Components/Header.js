import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocationIcon from '@mui/icons-material/Menu';
// For Icons
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// theme Color Css
import { Theme_ColorStyle } from '../../Theme_Style/Theme_Color';
import { Button } from '@mui/material';



export default function Header(props) {
 const display=props.display
    var classes = Theme_ColorStyle()
    return (
        <div>
            <div>
                <AppBar position='sticky' style={{ backgroundColor: '#004225' }}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <ShoppingBasketIcon />
                        </IconButton>
                        <Typography style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '95%' }}>
                            <Typography variant="h6" fontWeight={600} fontFamily={'poppins'} color="inherit" component="div">
                                Gwalior Basket
                            </Typography>
                            <Typography style={{ display: 'flex', flexDirection: 'row', width: '22%', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'poppins'}>
                                    {props.Tab_11}
                                </Typography >
                                <Typography fontFamily={'poppins'}>
                                    {props.Tab_12}
                                </Typography>
                                <Typography fontFamily={'poppins'}>
                                    {props.Tab_13}
                                </Typography>
                            </Typography>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                <AppBar position="static" style={{ backgroundColor: 'white' }}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            {/* <img src='../assert/target_01.png'></img> */}
                        </IconButton>
                        <Typography style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '95%', alignItems: 'center' }}>
                            <Typography style={{ display: 'flex', flexDirection: 'row', width: '35%', justifyContent: 'space-between' }}>
                                <Typography color={'#004225'} fontFamily={'poppins'} fontWeight={700}>
                                    {props.Tab_21}
                                </Typography>
                                <Typography color={'#004225'} fontFamily={'poppins'} fontWeight={700}>
                                    {props.Tab_22}
                                </Typography>
                                <Typography color={'#004225'} fontFamily={'poppins'} fontWeight={700}>
                                    {props.Tab_23}
                                </Typography>
                                <Typography color={'#004225'} fontFamily={'poppins'} fontWeight={700}>
                                    {props.Tab_24}
                                </Typography>
                            </Typography>
                            <Button   size="large"  style={{height:'5%',backgroundColor:'#004225',display:display}}variant="contained"><ShoppingBagIcon size='5%' /> My Cart</Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}