import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button, Grid, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, Avatar, Stack, MenuItem, Select } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useStyles } from './CompanyCss'
import { getData } from "../../services/ServerServices";
import { postData } from "../../services/ServerServices";
import Swal from "sweetalert2";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from "react-router-dom";




export default function Company(props) {


    const [CompanyName, setCompanyName] = useState("");
    const [OwnerName, setOwnerName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Address, setAddress] = useState("");
    const [Password, setPassword] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [defaultLogo, setDeafaultLogo] = useState({ fileName: "./defaultlogo.png", bytes: "" })
    const handleClickShowPassword = () => setShowPassword((show) => !show);


    // *********************USE FOR  CSS AND NAVIGATE*****************************
    var classes = useStyles()
    var navigate = useNavigate()
    // ***************************************************************************


    // *********************USE FOR  fetchAllStates AND FILL *****************************
    const fetchAllStates = async () => {
        var result = await getData('statecity/fetch_all_state')
        // console.log("xxxxxxxxxxxxxxxxxxxxx",result)
        setStates(result.data)
    };
    const fillStates = () => {
        return states.map((item) => {

            return (<MenuItem value={item.stateid}>{item.statename}</MenuItem>)

        })

    };

    // ***************************************************************************


    // *********************USE FOR  fetchAllCities AND FILL *****************************
    const fetchAllCities = async (stateid) => {
        var body = { "stateid": stateid }
        var result = await postData('statecity/fetch_all_cities', body)
        // console.log("xxxxxxxxxxxxxxxxxxxxx",result)
        setCities(result.data)
    }

    const fillCities = () => {
        return cities.map((item) => {

            return (<MenuItem value={item.cityid}>{item.cityname}</MenuItem>)

        })

    };

    // ***************************************************************************


    useEffect(function () {
        fetchAllStates();
        fetchAllCities();

    }, [])


    // *********************USE FOR CHECKS*****************************
    const handleError = (inputs, value) => {
        setError(prev => ({ ...prev, [inputs]: value }))
    }

    const validation = () => {

        var isValid = true

        if (!CompanyName) {
            handleError("CompanyName", "Invalid company name")
            isValid = false

        }
        if (!OwnerName) {
            handleError("OwnerName", "Invalid Owner Name")
            isValid = false

        }
        if (!MobileNumber || !(/^[0-9]{10}$/.test(MobileNumber))) {
            handleError("MobileNumber", "Invalid Mobile Number")
            isValid = false

        }
        if (!emailAddress || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))) {
            handleError("emailAddress", "Invalid Email Address")
            isValid = false
        }
        if (!Address) {
            handleError("Address", "Invalid  Address")
            isValid = false
        }
        if (!state || state == "Choose State...") {
            handleError("state", "Required state")
            isValid = false
        }
        if (!city || city == "Choose City...") {

            handleError("city", "Required city")
            isValid = false
        }
        if (!Password) {
            handleError("Password", "Inavlid Password")
            isValid = false
        }


        return isValid
    }
    // ****************************************************************


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleChange = (event) => {
        setDeafaultLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    };



    const handleStateChange = (event) => {

        setState(event.target.value)
        fetchAllCities(event.target.value)
    };

    const handleCityChange = (event) => {

        setCity(event.target.value)
    };
    // ***************************USE FOR SUBMIT FORM DATA*************************************
    const handleSubmitClick = async () => {

        if (validation()) {

            var cd = new Date();
            var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()
            var formData = new FormData()

            formData.append("companyname", CompanyName)
            formData.append("ownername", OwnerName)
            formData.append("emailaddress", emailAddress)
            formData.append("mobilenumber", MobileNumber)
            formData.append("address", Address)
            formData.append("state", state)
            formData.append("city", city)
            formData.append("password", Password)
            formData.append("defaultlogo", defaultLogo.bytes)
            formData.append("createat", dd)
            formData.append("updateat", dd)
            formData.append("createdby", "ADMIN")
            formData.append("status", "pending")
            var result = await postData("company/add_new_company", formData)

            if (result.status) {
                Swal.fire({
                    icon: 'success',
                    title: result.message,
                })
            }

            handleResetClick()
        }

    }
    // **************************************************************************


    // ***************************USE FOR RESET FORM*************************************
    const handleResetClick = () => {

        setCompanyName("")
        setOwnerName("")
        setEmailAddress("")
        setMobileNumber("")
        setAddress("")
        setPassword("")
        setState('')
        setCity('')
        setDeafaultLogo({ fileName: "./defaultlogo.png", bytes:"" })
    }
    // **************************************************************************


    // *******************************USE FOR FORM INTERFACE*************************
    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div><Avatar alt="Remy Sharp" src="./basketlogo.png" /></div>

                                <div className={classes.headingStyle}>Company Resistration</div>
                            </div>

                            <div>
                                <FormatListBulletedIcon onClick={() => navigate("/DisplayAllCompanies")} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.CompanyName ? false : true} helperText={error.CompanyName} onFocus={() => handleError("CompanyName", null)} value={CompanyName} fullWidth onChange={(event) => setCompanyName(event.target.value)} variant="outlined" label="company Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.OwnerName ? false : true} helperText={error.OwnerName} onFocus={() => handleError("OwnerName", null)} value={OwnerName} fullWidth onChange={(event) => setOwnerName(event.target.value)} variant="outlined" label="Owner Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.emailAddress ? false : true} helperText={error.emailAddress} onFocus={() => handleError("emailAddress", null)} value={emailAddress} fullWidth onChange={(event) => setEmailAddress(event.target.value)} variant="outlined" label="Email" type="email" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.MobileNumber ? false : true} helperText={error.MobileNumber} onFocus={() => handleError("MobileNumber", null)} value={MobileNumber} fullWidth onChange={(event) => setMobileNumber(event.target.value)} variant="outlined" label="Mobile Number" type="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField error={!error.Address ? false : true} helperText={error.Address} onFocus={() => handleError("Address", null)} value={Address} fullWidth onChange={(event) => setAddress(event.target.value)} variant="outlined" label="address" type="email" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state}
                                label="State"
                                onChange={handleStateChange}
                                error={!error.state ? false : true} helperText={error.state} onFocus={() => handleError("state", null)}
                            >
                                <MenuItem value={"Choose State..."}>Choose State...</MenuItem>
                                {fillStates()}
                            </Select>
                            <div style={{ color: "red", padding: 11 }}>{error.state}</div>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={city}
                                label="City"
                                onChange={handleCityChange}
                                error={!error.city ? false : true} helperText={error.city} onFocus={() => handleError("city", null)}
                            >
                                <MenuItem value={"Choose City..."}>Choose City...</MenuItem>
                                {fillCities()}
                            </Select>
                            <div style={{ color: "red", padding: 11 }} >{error.city}</div>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} >
                        <IconButton className={classes.flex} color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={handleChange} />
                            <PhotoCamera />
                            <Avatar alt="Remy Sharp" variant="rounded" src={defaultLogo.fileName} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(event) => setPassword(event.target.value)}
                                value={Password}
                                error={!error.Password ? false : true} onFocus={() => handleError("Password", null)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            <div style={{ color: "red", padding: 11 }}>{error.Password}</div>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth onClick={handleSubmitClick} variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth onClick={handleResetClick} variant="contained">Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
 // **************************************************************************
