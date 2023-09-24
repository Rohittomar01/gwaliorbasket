import React from "react";
import { useState, useEffect } from "react";
import {Link, TextField, Button, Grid, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, Avatar, Stack, MenuItem, Select } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useStyles } from './CompanyCss'
import { getData } from "../../services/ServerServices";
import { postData } from "../../services/ServerServices";
import Swal from "sweetalert2";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from "react-router-dom";
import { footerStyle } from "./FooterCss";


export default function Footer() {
    var classes = footerStyle()

    return (
        <div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 20 }}>

                <Grid >
                    <span className={classes.headingStyle}>About Us</span>
                    <Link><Grid item xs={3}><span>About Us</span></Grid></Link>
                   <Link><Grid item xs={3}><span>aaaa</span></Grid></Link> 
                    <Link><Grid item xs={3}><span>bbbb</span></Grid></Link>
                   <Link><Grid item xs={3}><span>cccc</span></Grid></Link> 
                </Grid>

                <Grid>
                <span className={classes.headingStyle}>About Us</span>
                    <Link><Grid item xs={3}><span>About Us</span></Grid></Link>
                   <Link><Grid item xs={3}><span>aaaa</span></Grid></Link> 
                    <Link><Grid item xs={3}><span>bbbb</span></Grid></Link>
                   <Link><Grid item xs={3}><span>cccc</span></Grid></Link> 
                </Grid>

                <Grid>
                <span className={classes.headingStyle}>About Us</span>
                    <Link><Grid item xs={3}><span>About Us</span></Grid></Link>
                   <Link><Grid item xs={3}><span>aaaa</span></Grid></Link> 
                    <Link><Grid item xs={3}><span>bbbb</span></Grid></Link>
                   <Link><Grid item xs={3}><span>cccc</span></Grid></Link> 
                </Grid>

                <Grid>
                <span className={classes.headingStyle}>Services</span>
                <Link><Grid item xs={3}><span>About Us</span></Grid></Link>
                   <Link><Grid item xs={3}><span>aaaa</span></Grid></Link> 
                    <Link><Grid item xs={3}><span>bbbb</span></Grid></Link>
                   <Link><Grid item xs={3}><span>cccc</span></Grid></Link> 
                </Grid>




            </div>

        </div>
    )


}