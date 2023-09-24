import React, { useState, useEffect } from "react";
import { createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { serverURL, getData } from "../../../services/ServerServices";

export default function Main_Slider() {

    const [Banner, setBanner] = useState([])

    const fetchAllBanner = async () => {
        var result = await getData('banner/fetch_all_banner')
        var Data=result.data[0].images
        var Images = Data.substring(0,Data.length-1).split(',')
        setBanner(Images)
    };

    useEffect(function () {

        fetchAllBanner();

    }, [])

   
    const playImage = () => {
        return Banner.map((item) => {
            return (
                <div>
                    <img src={`${serverURL}/images/${item}`} style={{ width: '100%' }}></img>
                </div>
            )
        })

    }


    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <KeyboardArrowLeftIcon onClick={handleLeftSlide} style={{ position: 'absolute', zIndex: 1, marginTop: '8.5%', backgroundColor: 'white', borderRadius: 15, marginLeft: '2%', cursor: 'pointer', fontSize: 27 }} />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <KeyboardArrowRightIcon onClick={handleRightSlide} style={{ position: 'absolute', zIndex: 1, backgroundColor: 'white', borderRadius: 15, marginTop: '8.5%', marginRight: '2%', cursor: 'pointer', fontSize: 27 }} />
                </div>
                <Slider ref={Refferance} {...settings}>
                    {playImage()}
                </Slider>

            </div>
        </div>
    )
}