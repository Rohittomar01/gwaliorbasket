import { React, createRef } from 'react';
import { Button, Paper } from '@mui/material';
import { serverURL } from '../../../services/ServerServices';
// for icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// for Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Favourite_Picks() {

    var Cart_Details = [
        { Description: 'Amul Masti Dahi', Price: '34', Discount: '2%', image: 'amul_milk.webp', Quantity: '400 g' },
        { Description: 'Mother Dairy Classic Curd', Price: '72', Discount: '2%', image: 'amul_dairy_02.jpeg', Quantity: '1 kg' },
        { Description: 'Amul Butter - Pasteurised', Price: '56', Discount: '2%', image: 'amul_butter.jpeg', Quantity: '100g' },
        { Description: 'Amul Mali Paneer Fresh', Price: '91', Discount: '2%', image: 'Five_Star.jpg', Quantity: '200g' },
        { Description: 'Amul Moti - Homogenised Tone...', Price: '32', Discount: '2%', image: 'Nutties.jpg', Quantity: '450ml' },
        { Description: 'Tomato Desi', Price: '37', Discount: '2%', image: 'Mars_Chocolate.webp', Quantity: '1000 - 1050g' },
        { Description: 'Tender Coconut', Price: '69', Discount: '2%', image: 'coconut.webp', Quantity: '250 ml' },
        { Description: 'Harvest Gold White Bread', Price: '45', Discount: '2%', image: 'harvest_bread.webp', Quantity: '700g' },
        { Description: 'Mother Dairy Classic Curd', Price: '72', Discount: '2%', image: 'amul_milk.webp', Quantity: '1 kg' },
        { Description: 'Mars Miniatures Chocolate With', Price: '20', Discount: '2%', image: 'DairyMilk_Silk.webp', Quantity: '15g' },

    ]
    const Cart = () => {
        return Cart_Details.map((item) => {
            return (
                <div >
                    <Paper elevation={4} style={{ marginLeft:'1.5%',padding: '5%', width: '12vw', height: 'auto', marginTop: '1%',marginBottom:'2.7%' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%', height: '18vh' }}>
                            <img src={`${serverURL}/images/${item.image}`} style={{ width: '105px', height: '105px' }}></img>
                        </div>
                        <div style={{ lineHeight: 0 }}>
                            <p style={{ lineHeight: 1, fontWeight: 'bold', height: '5.9vh', textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-flex', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{item.Description}</p>
                            <p>{item.Quantity}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
                            <div>
                                <span style={{ fontWeight: 600, }}>₹{item.Price}</span>
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
        <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative', paddingBottom: '2%' }}>
            <Paper elevation={4}>
                <KeyboardArrowLeftIcon onClick={handleLeftSlide} style={{ position: 'absolute', zIndex: 1, color: 'red', marginTop: '17%', backgroundColor: 'lightgrey', borderRadius: 15, marginLeft: '1%', cursor: 'pointer', fontSize: 28 }} />
            </Paper>
            <Paper elevation={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <KeyboardArrowRightIcon onClick={handleRightSlide} style={{ position: 'absolute', zIndex: 1, color: 'red', backgroundColor: 'lightgrey', borderRadius: 15, marginTop: '17%', marginRight: '1%', cursor: 'pointer', fontSize: 28 }} />
            </Paper>
            <div style={{ marginLeft: '2%', width: '97.5%', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '97.5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ marginTop: '4%', }}>
                        <h3 style={{ fontFamily: 'poppins', fontWeight:'bolder'}}>Your Favourate Picks</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '4%', fontFamily: 'poppins', color: 'red' }}>
                        <h4>See All</h4>
                        <KeyboardArrowRightIcon style={{ marginTop: '27.5%' }} />
                    </div>
                </div>
                <div>
                    <Slider ref={Refferance} {...settings_01}>
                        {Cart()}
                    </Slider>
                </div>
            </div>
        </div>
    )
}