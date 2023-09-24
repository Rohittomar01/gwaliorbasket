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


export default function New_Category(){

    var Cart_Details = ['kitchen_needs.webp', 'pet_care.webp', 'gift_store.webp', 'makeup_beauty.webp', 'party_essential.webp', 'fitness.webp', 'organic_food.webp','baby_care.webp']

    const Cart = () => {
        return Cart_Details.map((item) => {
            return (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={`${serverURL}/images/${item}`} style={{ width: '95%' }}></img>
                    </div>
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
        slidesToShow: 7,
        slidesToScroll: 1,
       
    };

    const Refferance = createRef();
    function handleLeftSlide() {
        Refferance.current.slickPrev()
    }
    function handleRightSlide() {
        Refferance.current.slickNext()
    }
    return(
        <div style={{ background: '#fafafa', width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative', paddingBottom: '1%' }}>
        <Paper elevation={4}>
            <KeyboardArrowLeftIcon onClick={handleLeftSlide} style={{ position: 'absolute', zIndex: 1, color: 'red', marginTop: '14%', backgroundColor: 'white', borderRadius: 15, marginLeft: '1.3%', cursor: 'pointer', fontSize: 28 }} />
        </Paper>
        <Paper elevation={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <KeyboardArrowRightIcon onClick={handleRightSlide} style={{ position: 'absolute', zIndex: 1, color: 'red', backgroundColor: 'white', borderRadius: 15, marginTop: '14%', marginRight: '1.4%', cursor: 'pointer', fontSize: 28 }} />
        </Paper>
        <div style={{ marginLeft: '1%', width: '97.5%', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginLeft: '1%',width: '97.5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ marginTop: '1%', }}>
                    <h3 style={{ fontFamily: 'poppins', fontWeight: 600 }}>Explore New Categories</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1%', fontFamily: 'poppins', color: 'red' }}>
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