import React from "react";
import { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { getData, serverURL } from "../../services/ServerServices";
import CloseIcon from '@mui/icons-material/Close';
// import { render } from "@testing-library/react";
import { Dialog, DialogActions, FormControlLabel, Switch, DialogTitle, TextField, Button, Grid, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, Avatar, Stack, MenuItem, Select } from "@mui/material";
import { useStylesTable } from "../../Components_CSS/DisplayAllCompanyCss";
import { flexbox } from "@mui/system";
import Swal from "sweetalert2";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { postData } from "../../services/ServerServices";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CheckBox, Pending } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";






export default function DisplayAllCompanies() {

    const [companies, setCompanies] = useState([]);
    const [CompanyName, setCompanyName] = useState("");
    const [OwnerName, setOwnerName] = useState("");
    const [emailaddress, setEmailAddress] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [status, setStatus] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [oldPicture, setOldPicture] = useState("");
    const [btnStatus, setBtnStatus] = useState(false);
    const [message, setMessage] = useState("");
    const [defaultLogo, setDeafaultLogo] = useState({ fileName: "./defaultlogo.png", bytes: "" });


    // **********************For show edit dialogbox*************************
    const [open, setOpen] = useState(false);
    // **************************************************************************



    const fetchAllStates = async () => {
        var result = await getData('statecity/fetch_all_state')
        setStates(result.data)
    };

    const fetchAllCities = async (stateid) => {
        var body = { "stateid": stateid }
        var result = await postData('statecity/fetch_all_cities', body)
        setCities(result.data)
    }

    useEffect(function () {
        fetchAllStates();
        fetchAllCities();
    }, [])

    const handleChange = (event) => {
        setDeafaultLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
        setBtnStatus(true)
    };

    const fillStates = () => {
        return states.map((item) => {
            return (<MenuItem value={item.stateid}>{item.statename}</MenuItem>)
        })

    };
    const fillCities = () => {
        return cities.map((item) => {
            return (<MenuItem value={item.cityid}>{item.cityname}</MenuItem>)
        })
    };

    const handleStateChange = (event) => {
        setState(event.target.value)
        fetchAllCities(event.target.value)
    };

    const handleCityChange = (event) => {
        setCity(event.target.value)
    };

    const handleStatus = (temp) => {
        if (temp == "Pending") { setStatus("Pending") }
        if (temp == "Verified") { setStatus("Verified") }
        // if(Switch==defaultChecked){
        //     setStatus('Verified')
        // }
        // else{
        //     setStatus('Pending')

        // }

    }



    const showCompanyDetails = () => {

        return (
            <div>
                <div>
                    <Dialog
                        open={open}
                        // onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" style={{ display: "flex", justifyContent: "space-between", paddingTop: 20 }}>
                            <div style={{ display: "flex", justifyItems: "center" }}>
                                <Avatar alt="Remy Sharp" src="./basketlogo.png" />
                                Edit Company</div>
                            <div>
                                <CloseIcon style={{ cursor: "Pointer" }} onClick={handleClose} />
                            </div>
                        </DialogTitle>
                        <Grid container spacing={2} style={{ padding: 15 }} >

                            <Grid item xs={6}>
                                <TextField value={CompanyName} fullWidth onChange={(event) => setCompanyName(event.target.value)} variant="outlined" label="company Name" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={OwnerName} fullWidth onChange={(event) => setOwnerName(event.target.value)} variant="outlined" label="Owner Name" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={emailaddress} fullWidth onChange={(event) => setEmailAddress(event.target.value)} variant="outlined" label="Email" type="email" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={MobileNumber} fullWidth onChange={(event) => setMobileNumber(event.target.value)} variant="outlined" label="Mobile Number" type="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={Address} fullWidth onChange={(event) => setAddress(event.target.value)} variant="outlined" label="address" type="email" />
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
                                    >
                                        <MenuItem value={"Choose State..."}>Choose State...</MenuItem>
                                        {fillStates()}
                                    </Select>
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
                                    >
                                        <MenuItem value={"Choose City..."}>Choose City...</MenuItem>
                                        {fillCities()}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} className={classes.flex} >
                                <FormControlLabel control={status == "Pending" ? <Switch onChange={() => handleStatus(status)} /> : <Switch defaultChecked onChange={() => handleStatus(status)} />} label={status} />
                            </Grid>
                            <Grid item xs={6} className={classes.flex} >
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" onChange={handleChange} />
                                    <PhotoCamera />
                                </IconButton>
                                <Avatar alt="Remy Sharp" variant="rounded" src={defaultLogo.fileName} />
                                < PictureBtn />
                            </Grid>
                        </Grid>
                        <DialogActions>
                            <Button onClick={handleEditSubmit} autoFocus  >Edit</Button>
                            <Button onClick={handleClose} autoFocus>
                                Cancle
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        );
    }
    // ****************************For Close edit dialogbox*************************************
    const handleClose = () => {

        setOpen(false)
    };

    const handleDelete = async (rowData) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                var result = await postData('company/delete_company_details', { companyid: rowData.companyid })
                Swal.fire(
                    'Deleted!',
                    'Company has been deleted.',
                    'success'
                )
            }
            fetchAllCompanies()
        })

    }

    const handleEditSubmit = async () => {
        var cd = new Date();
        var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()
        var body = {
            "companyname": CompanyName,
            "ownername": OwnerName,
            "emailaddress": emailaddress,
            "mobilenumber": MobileNumber,
            "address": Address,
            "state": state,
            "city": city,
            "password": password,
            "defaultlogo": defaultLogo.bytes,
            "createat": dd,
            "updateat": dd,
            "createdby": "ADMIN",
            "status": status,
            "companyid": companyId
        }
        var result = await postData('company/edit_new_company', body)

        if (result.status) {
            setOpen(false)
            Swal.fire({
                icon: 'success',
                title: result.message,
            })
        }
        else {
            setOpen(false)
            Swal.fire({
                icon: 'success',
                title: result.message,
            })
        }

        fetchAllCompanies()
        setBtnStatus(false)

    };


    // **************For apply css********************
    var classes = useStylesTable()
    var Navigate = useNavigate()

    // **************For fetchAllCompanies ********************
    const fetchAllCompanies = async () => {

        var result = await getData("company/fetch_all_companies")
        setCompanies(result.data)
    };

    useEffect(function () {
        fetchAllCompanies()
    }, []);




    const handlePicCancle = () => {

        setDeafaultLogo({ fileName: `${serverURL}/images/${oldPicture}`, bytes: "" })
        setOldPicture("")
        setMessage("")
    };
    const handlePicSave = async () => {
        var formData = new FormData()
        formData.append("companyid", companyId)
        formData.append("logo", defaultLogo.bytes)
        var result = await postData("company/edit_company_logo", formData)
        if (result.status) {
            setMessage("./tick.gif")
        }
        else {
            setMessage("./tick.gif")
        }
    }



    const PictureBtn = () => {
        return (
            <div>
                {btnStatus ? <div style={{ display: "flex" }}>
                    <Button onClick={handlePicSave}>save</Button>
                    <Button onClick={handlePicCancle}>cancle</Button>
                </div> : <><img src={`${message}`}></img></>}
            </div>
        );
    }


    // **************For open Edit Dialogbox AND FILL DATA IN DIALOGBOX********************
    const handleOpenDialog = (rowData) => {

        setOpen(true)
        fetchAllCities(rowData.state)
        setCompanyName(rowData.companyname)
        setOwnerName(rowData.ownername)
        setEmailAddress(rowData.emailaddress)
        setMobileNumber(rowData.mobilenumber)
        setAddress(rowData.address)
        setPassword(rowData.password)
        setState(rowData.state)
        setCity(rowData.city)
        setStatus(rowData.status)
        setCompanyId(rowData.companyid)
        setDeafaultLogo({ fileName: `${serverURL}/images/${rowData.logo}`, bytes: "" })
        setOldPicture(rowData.logo)

    };




    // **************For showAllComapany in MaterialTable********************


    function showAllComapany() {
        return (
            <MaterialTable
                title="company List"
                columns={[
                    { title: 'Company Name', field: 'companyname' },
                    { title: 'Owner Name', field: 'ownername' },
                    {
                        title: 'address', field: 'address',

                        render: rowData => <div>{rowData.address}<br />{rowData.cityname},{rowData.statename}</div>
                    },
                    {
                        title: 'Contact Details', field: 'emailaddress',

                        render: rowData => <div>{rowData.emailaddress}<br />{rowData.mobilenumber}</div>
                    },
                    { title: 'Status', field: 'status', },
                    {
                        title: 'last Updation',

                        render: rowData => <div>{rowData.createat}<br />{rowData.updateat}<br />{rowData.createby}</div>
                    },
                    {
                        title: 'Logo',

                        render: rowData => <Avatar src={`${serverURL}/images/${rowData.logo}`} styles={{ width: 70, height: 70, }} variant="rounded"></Avatar>
                    }

                ]}
                data={companies}

                actions={[
                    {
                        icon: "add",
                        isFreeAction: "true",
                        tooltip: "add company",
                        onClick: () => Navigate("/company")

                    },
                    {
                        icon: 'edit',
                        tooltip: 'Edit User',
                        onClick: (event, rowData) => handleOpenDialog(rowData)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => handleDelete(rowData)
                    }
                ]}
            />
        )
    }
    // **************it return use for return viewfunction(HOC)********************
    return (

        <div className={classes.mainContainer}>
            <div className={classes.boxtable}>
                {showAllComapany()}
                {showCompanyDetails()}
            </div>
        </div>
    )



}