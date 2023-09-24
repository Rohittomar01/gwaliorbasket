import React from "react";
import { createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { serverURL } from "../../../services/ServerServices";
import { Paper } from "@mui/material";

export default function Slider_02() {



    const Images = ['D_01.webp', 'D_02.webp', 'D_03.webp', 'D_04.webp', 'D_05.webp', 'D_02.webp']

    const playImage = () => {
        return Images.map((item) => {

            return (
                <div>
                    <img src={`${serverURL}/images/${item}`} style={{ width: '96.9%'}}></img>
                </div>
            )
        })

    }


    var settings = {
        dots: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
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
            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center',position:'relative' }}>
                <Paper elevation={4}>
                    <KeyboardArrowLeftIcon onClick={handleLeftSlide} style={{ position: 'absolute', zIndex: 1, marginTop: '7%',color:'red', backgroundColor: 'White', borderRadius: 15, marginLeft: '1%', cursor: 'pointer', fontSize: 27 }} />
                    </Paper>
                <Paper elevation={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <KeyboardArrowRightIcon onClick={handleRightSlide} style={{ position: 'absolute', zIndex: 1,color:'red', backgroundColor: 'White', borderRadius: 15, marginTop: '7%', marginRight: '1.5%', cursor: 'pointer', fontSize: 27 }} />
                </Paper>
                <div style={{ marginLeft: '2%', width: '96%', justifyContent: 'center', alignItems: 'center'}}>
                    <Slider ref={Refferance} {...settings}>
                        {playImage()}
                    </Slider>
                </div>
            </div>
        </div>
    )
}