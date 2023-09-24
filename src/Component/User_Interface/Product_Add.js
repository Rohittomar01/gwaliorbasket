import { React, createRef } from 'react';
import { AppBar, Button, Grid, ListItem, Paper, List, ListItemText, Dialog, DialogActions, FormControlLabel, Switch, DialogTitle, TextField } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';




import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


import { serverURL } from '../../services/ServerServices';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useStyles } from '../Page1Css';
import { useState } from 'react';
import Header from './User_Components/Header';
// for icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



export default function Product_Add() {
    var classes = useStyles()
    const [open, setOpen] = useState(false);

    // ********************************USED FOR Slider*****************************************
    var settings = {
        // dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2200,
        slidesToScroll: 1,
        focusOnSelect: true
    };
    // ***********************************************************************************************


    //   ******************************USED FOR PLAY SLIDER IMAGES*******************************************
    var slider = createRef()
    function handlePrevImg() {
        slider.current.slickPrev()
    }

    function handleNextImg() {
        slider.current.slickNext()
    }
    // *****************************************************************************************************



    //  ****************************USED FOR PLAY IMG ON SLIDER******************************
    var image = ["p1.webp", "p2.webp", "p3.webp", "p4.webp", "p5.webp"]


    function playImg() {
        return image.map((item) => {
            return (<div ><img src={`${serverURL}/images/${item}`} style={{ width: "40%", marginLeft: "25%" }}></img></div>)
        })
    }
    //   *****************************************************************************************

    // ********************************USED FOR openDialog***********************************************
    const openDialog = () => {
        setOpen(true)
    }
    //  ***************************************************************************************************

    var Cart_Details = [
        { Description: 'Snickers Chocolate Combo', Price: '20', Discount: '2%', image: 'Snickers.webp', Quantity: '15g' },
        { Description: 'Nestle Kitkat Bar Chocolate Combo', Price: '20', Discount: '2%', image:'Kitkat_01.jpg', Quantity: '15g' },
        { Description: 'Cadbudry Dairy Milk Silk Chocolate Bar', Price: '20', Discount: '2%', image: 'DairyMilk_Silk.webp', Quantity: '15g' },
        { Description: 'cadbury 5 Star Chocolate Bar', Price: '20', Discount: '2%', image: 'Five_Star.jpg', Quantity: '15g' },
        { Description: 'cadbury Nutties Chocolate Combo', Price: '20', Discount: '2%', image: 'Nutties.jpg', Quantity: '15g' },
        { Description: 'Mars Miniatures Chocolate With', Price: '20', Discount: '2%', image: 'Mars_Chocolate.webp', Quantity: '15g' },
        { Description: 'Mars Miniatures Chocolate With', Price: '20', Discount: '2%', image: 'Kitkat_01.jpg', Quantity: '15g' },
        { Description: 'Mars Miniatures Chocolate With', Price: '20', Discount: '2%', image: 'Five_Star.jpg', Quantity: '15g' },
        { Description: 'Mars Miniatures Chocolate With', Price: '20', Discount: '2%', image: 'Nutties.jpg', Quantity: '15g' },
        { Description: 'Mars Miniatures Chocolate With', Price: '20', Discount: '2%', image: 'DairyMilk_Silk.webp', Quantity: '15g' },

    ]



    const Cart = () => {
        return Cart_Details.map((item) => {
            return (
                <div >
                    <Paper elevation={4} style={{ padding: '5%', width: '12vw', height: 'auto', marginTop: '5%' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%',height:'16vh' }}>
                            <img src={`${serverURL}/images/${item.image}`} style={{ width: '50%' }}></img>
                        </div>
                        <div >
                            <h4 style={{height:'8vh',textOverflow:'ellipsis', overflow:'hidden',display:'-webkit-flex',WebkitLineClamp:2,WebkitBoxOrient:'vertical'}}>{item.Description}</h4>
                        </div>
                        <div>
                            <span>{item.Quantity}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%' }}>
                            <div>
                                <span style={{ fontWeight: 700, }}>₹{item.Price}</span>
                            </div>
                            <div>
                                <Button style={{ color: 'red', borderColor: 'red' }} variant="outlined" size="small">
                                    Add
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>

            )
        })

    }


    var settings_01 = {
        dots: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrow: false
    };

    const Refferance = createRef();
    function handleLeftSlide() {
        Refferance.current.slickPrev()
    }
    function handleRightSlide() {
        Refferance.current.slickNext()
    }
    return (
        <div>
            {/* <AppBar position='none' style={{ background: 'rgb(204 0 0)', height: 55, display: 'flex', justifyContent: 'start', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ marginLeft: '8%', display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon />
                    <span style={{ color: '/FFF', fontWeight: 'bold', fontSize: '1.3rem' }}>Gwalior Basket</span>
                </div>
                <div style={{ marginLeft: 'auto', width: '300px', display: 'flex', justifyContent: 'space-evenly', fontFamily: 'Poppins' }}>
                    <span>Offers</span>
                    <span>Deals</span>
                    <span>Coupons</span>

                </div>
            </AppBar> */}
            <div>
                <Header Tab_11='Offers' Tab_12='Deals' Tab_13='Coupon' Tab_21='Category' Tab_22='Deals' Tab_23="What's New" Tab_24='Pickup & Delivery' />
            </div>
            {/* <div >
                <Paper style={{ width: '100%', height: 80, display: 'flex', alignItems: 'center', position: 'absolute' }} elevation={1}>
                    <img src='./target.png' style={{ width: 60, marginLeft: "7%" }} />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ marginTop: "1.5%" }}>
                            <Button style={{ color: 'rgb(204 0 0)', fontWeight: 600 }}>Category</Button>
                            <Button style={{ color: 'rgb(204 0 0)', fontWeight: 600 }}>Deals</Button>
                            <Button style={{ color: 'rgb(204 0 0)', fontWeight: 600 }}>What’s New</Button>
                            <Button style={{ color: 'rgb(204 0 0)', fontWeight: 600 }}>Pickup & Delivery</Button>
                        </div>

                        <Button onClick={openDialog} variant="contained" size="large" sx={{ background: "red", marginRight: "2%", padding: "1.2%", width: "12%" }}>
                            <ShoppingBagIcon /> My Cart
                        </Button>
                    </div>
                </Paper>
            </div> */}
            <div style={{ marginTop: "5%", width: "100%", height: "100vh" }}>

                <Grid container >

                    <Grid xs={6} item style={{ width: "100%", height: "auto", position: "relative", overflowY: "scroll" }}>
                        <div>
                            <KeyboardArrowLeftIcon onClick={handlePrevImg} style={{ color: 'white', fontSize: 30, zIndex: 1, marginTop: "15%", marginLeft: "6%", position: "absolute", background: "grey", borderRadius: "50%" }} />

                            <Slider ref={slider} {...settings} style={{ height: "120%" }}>
                                {playImg()}
                            </Slider>
                            <Paper elevation={4}><KeyboardArrowRightIcon onClick={handleNextImg} style={{ color: 'white', fontSize: 30, zIndex: 2, marginLeft: "86%", marginTop: "-26%", position: "absolute", background: "grey", borderRadius: "50%" }} /></Paper>
                        </div>
                        <div><span style={{ fontWeight: 600 }}>About Products</span></div>
                        <div>
                            <ul typeof='circle' style={{ border: "#D3D3D3" }}>
                                <li style={{ border: "#D3D3D3" }}>Country of Origin : India</li>
                                <li>Shelf Life : 18 months</li>
                                <li>Manufacturer Name : MuscleBlaze</li>
                                <li>Manufacturer Address : MuscleBlaze, 3rd Floor, Parsvnath Arcadia, T-01, M G Road Sector 14, Gurgaon - 122001.</li>
                            </ul>
                        </div>
                    </Grid>

                    <Grid xs={6} style={{ paddingLeft: "3%" }}>
                        <div>
                            <span className={classes.heading}>MuscleBlaze Raw Whey Protein Concentrate 80% with Added Digestive Enzymes Labdoor USA Certified Unflavoured</span>

                        </div>
                        <div><span className={classes.heading2}>1kg</span></div>
                        <div className={classes.space}></div>
                        <div>
                            <span className={classes.heading}>₹1999</span> <span className={classes.heading2} style={{ marginLeft: "2%", textDecorationLine: 'line-through', marginTop: '0.5%' }}>₹2220</span>
                            <Button size='small' variant="contained" href="#contained-buttons" style={{ marginLeft: "5%", background: " linear-gradient(to top left, #0066ff 8%, #ff99cc 100%)" }}>
                                10% Off
                            </Button>
                        </div>
                        <div className={classes.space}></div>
                        <div>
                            <Button variant="contained" style={{ background: "#004225" }} size="large">
                                <b>Add</b>
                            </Button>
                        </div>
                        <div className={classes.space2}></div>
                        <hr style={{ background: "lightgrey" }}></hr>
                        <div className={classes.space2}></div>
                        <div><span className={classes.heading}>How it Works</span></div>
                        <div>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src="./place-order.svg" style={{ border: "solid #D3D3D3" }}>
                                        </img>
                                    </ListItemAvatar>
                                    <ListItemText primary="Place an order" style={{ marginLeft: "10%" }} secondary="Choose from a wide range of daily essentials" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src="./do-not-blink.svg" style={{ border: "solid #D3D3D3" }}>

                                        </img>
                                    </ListItemAvatar>
                                    <ListItemText primary="Don't Blink" style={{ marginLeft: "10%" }} secondary="Our delivery partner will be at your door" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src="./enjoy.svg" style={{ border: "solid #D3D3D3" }} >

                                        </img>
                                    </ListItemAvatar>
                                    <ListItemText style={{ marginLeft: "10%" }} primary="Enjoy" secondary="Boom! You’ll never have to wait for groceries again" />
                                </ListItem>
                            </List>
                        </div>

                    </Grid>

                </Grid>

            </div>
            <div style={{ background: '#f5f5f5', marginTop: '14%', width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Paper>
                    <KeyboardArrowLeftIcon onClick={handleLeftSlide} style={{ position: 'absolute', zIndex: 1, marginTop: '17.2%', backgroundColor: '#bae6fd', borderRadius: 15, marginLeft: '1%', cursor: 'pointer', fontSize: 28 }} />
                </Paper>
                <Paper elevation={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <KeyboardArrowRightIcon onClick={handleRightSlide} style={{ position: 'absolute', zIndex: 1, color:'black', backgroundColor: '#bae6fd', borderRadius: 15, marginTop: '17.2%', marginRight: '1.5%', cursor: 'pointer', fontSize: 28 }} />
                </Paper>
                <div style={{ marginLeft: '2%', width: '97.5%', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ marginTop: '4%', fontFamily: 'poppins' }}><h3>You might also like</h3></div>
                    <div>
                        <Slider ref={Refferance} {...settings_01}>
                            {Cart()}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

const showDialog = () => {

    return (
        <div>
            <div>
                <Dialog
                    // open={open}
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ display: "flex", justifyContent: "space-between", paddingTop: 20 }}>
                        <div style={{ display: "flex", justifyItems: "center" }}>
                            <Avatar alt="Remy Sharp" src="./basketlogo.png" />
                            Edit Company</div>
                        <div>
                            {/* <CloseIcon style={{ cursor: "Pointer" }} onClick={handleClose} /> */}
                        </div>
                    </DialogTitle>
                    <Grid container spacing={2} style={{ padding: 15 }} >

                        <Grid item xs={6}>
                            <TextField variant="outlined" label="Enter Number" />
                        </Grid>
                    </Grid>

                    <DialogActions>
                        <Button autoFocus  >Edit</Button>
                        <Button autoFocus>
                            Cancle
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );

    return (
        <div >
            <div >
                {showDialog()}
            </div>
        </div>
    )
}