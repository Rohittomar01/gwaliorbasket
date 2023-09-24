import { serverURL } from '../../services/ServerServices';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { React, createRef } from 'react';
import { Grid, Paper } from '@mui/material';


export default function Page1Card() {
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

            return (<div  ><img src={`${serverURL}/images/${item}`} style={{ width: "40%", marginLeft: "25%" }}></img></div>)
        })
    }

    return (
        <Grid container>
            <Grid xs={6} item style={{ width: "100%", height: "50vh", position: "relative" }}>

                {/* <ArrowBackIosNewIcon onClick={handlePrevImg} style={{ color: 'white', fontSize: 30, zIndex: 1, marginTop: "22%", marginLeft: "6%", position: "absolute", background: "grey", borderRadius: "50%" }} /> */}

                <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </div>
                {/* <ArrowForwardIosIcon onClick={handleNextImg} style={{ color: 'white', fontSize: 30, zIndex: 2, marginLeft: "86%", marginTop: "-35%", position: "absolute", background: "grey", borderRadius: "50%" }} /> */}
            </Grid>
            <Grid xs={6}>
                <Paper elevation={4} style={{ background: "red", height: "30vh", width: "20vw" }}>jkkhiuyiytiuytrea5e6r7ti8youlkhjhgfrstytu</Paper>
            </Grid>
        </Grid>
    )
}