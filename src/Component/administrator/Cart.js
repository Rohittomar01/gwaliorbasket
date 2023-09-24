import { AppBar, Button, Grid, ListItem, Paper, List, ListItemText, ListItemAvatar, Chip, Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// for Style
import { cartStyles } from '../../Components_CSS/Cart_CSS';
// for components
import Header from '../User_Interface/User_Components/Header';



export default function Cart() {

    var classes = cartStyles()

    return (
        <div style={{ background: "#ECF2FF", height: "auto" }}>
            <div>
                <Header Tab_11='Offers' Tab_12='Deals' Tab_13='Coupon' Tab_21='Category' Tab_22='Deals' Tab_23="What's New" Tab_24='Trending' display='none' />
            </div>
            <Grid container className={classes.container_grid}>
                <Grid item xs={6}>
                    <div>
                        <span className={classes.heading_01}>Cart (1 Item)</span>
                        <span style={classes.p_01}> &nbsp;&nbsp; &nbsp;₹20 saved on this order &nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div style={{ marginTop: "5%" }}>
                        <Paper className={classes.borderradius} elevation={4} width={"100%"}>
                            <List className={classes.list} >
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src="./mucleblaze.webp" height={70}>
                                        </img>
                                    </ListItemAvatar>
                                    <ListItemText primary="MuscleBlaze Raw Whey Protein Concentrate 80% with Added Digestive Enzymes Labdoor USA Certified" secondary="1kg" />
                                </ListItem>
                            </List>
                        </Paper>
                    </div>
                    <div style={{ marginTop: "2%" }}>
                        <Paper className={classes.borderradius} elevation={4} style={{ padding: "5%" }}>
                            <ListItemText primary={<span className={classes.bold} >Delivery Partner Tip</span>} secondary="The entire amount will be sent to your delivery partner"></ListItemText>
                            <Chip className={classes.marginleft} deleteIcon={<img src="./coin.avif"></img>} label="₹10" variant="outlined" />
                            <Chip className={classes.marginleft} Image={<img src="./coin.avif"></img>} label="₹20" variant="outlined" />
                            <Chip className={classes.marginleft} Image={<img src="./coin.avif"></img>} label="₹35" variant="outlined" />
                            <Chip className={classes.marginleft} Image={<img src="./coin.avif"></img>} label="₹50" variant="outlined" />
                        </Paper>
                    </div>
                    <div style={{ marginTop: "2%" }}>
                        <Paper className={classes.borderradius} elevation={4} style={{ padding: "4%", display: "flex", flexDirection: "row" }} >
                            <span><img src="./scooter.webp" style={{ width: 70 }} ></img></span>
                            <span className={classes.bold}>See how we ensure our delivery partner’s safety</span><span className={classes.bold} style={{ color: "red", marginLeft: "1%" }}>Learn More</span>
                        </Paper>
                    </div>
                </Grid>

                <Grid item xs={5} style={{ marginLeft: "2%" }} >
                    <div style={{ display: "flex", justifyContent: "right" }}>
                        <Button variant="outlined" color="error">
                            Empty
                        </Button>
                    </div>
                    <div style={{ marginTop: "3%" }} >
                        <Paper className={classes.borderradius} elevation={4} style={{ padding: "4%", display: "flex", flexDirection: "row" }} >
                            <span><img src="./offer.webp" style={{ width: 40 }} ></img></span>
                            <span style={{ marginTop: "2%", marginLeft: "2%" }}>Available Offers/Coupons</span>
                            <PlayArrowIcon style={{ color: "red", alignSelf: "center", marginLeft: "35%" }} />
                        </Paper>
                    </div>
                    <div style={{ marginTop: "2%" }}>
                        <Paper className={classes.borderradius} elevation={4} style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center", padding: "8%" }}>
                            <div className={classes.flex}>
                                <span>Item Total</span>
                                <span>₹1999</span>

                            </div>
                            <div className={classes.flex2}>
                                <span>Handling Charge<span style={{ color: " darkgreen" }}>(₹10 saved)</span></span>
                                <span>  ₹5</span>
                            </div>
                            <div className={classes.flex2}>
                                <span>Delivery Fee<span style={{ color: " darkgreen" }}>(₹35 saved)</span></span>
                                <span>₹0</span>
                            </div>
                            <hr style={{ background: "#D3D3D3" }}></hr>
                            <div className={classes.flex}>
                                <span>To Pay</span>
                                <span style={{ fontWeight: 700 }}>₹2004</span>
                            </div>
                        </Paper>

                    </div>
                    <div style={{ marginTop: "2%" }}>
                        <Paper className={classes.borderradius} elevation={4} style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center", padding: "6%" }}>
                            <span style={{ display: "flex", alignItems: "center" }}><img src="./location-pin.svg" style={{ width: 40 }} ></img><span>Enter your delivery address</span></span>

                            <Button style={{ marginTop: "5%" }} fullWidth variant="contained">
                                ADD ADDRESS TO PROCEED
                            </Button>
                        </Paper>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}