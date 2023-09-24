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
import { Pending } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";





export default function Display_Banner() {

    var navigate = useNavigate()
    const [companyId, setCompanyId] = useState('')
    const [category, setCategory] = useState([])
    const [description, setDescription] = useState('')
    const [oldPicture, setOldPicture] = useState("");
    const [btnStatus, setBtnStatus] = useState(false);
    const [message, setMessage] = useState("");
    const [Data, setData] = useState([])
    const [Images, setImages] = useState("");




    const [icon, setIcon] = useState({
        fileName: "./category.png",
        bytes: "",
    });

    // **********************For show edit dialogbox*************************
    const [open, setOpen] = useState(false);
    // **************************************************************************


    console.log('Banner', Data);

    const fetchAllBanner = async () => {
        var result = await getData('banner/fetch_all_banner')
        var Images = result.data[0].Images.split(',')
        setData(result.data)
    };


    useEffect(function () {

        fetchAllBanner();

    }, [])


    const handleChange = (event) => {
        setImages({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
        setBtnStatus(true)
    };


    const showCategoryDetails = () => {

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
                                <TextField value={companyId} fullWidth onChange={(event) => setCompanyId(event.target.value)} variant="outlined" label="company Id" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={category} fullWidth onChange={(event) => setCategory(event.target.value)} variant="outlined" label="Category" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={description} fullWidth onChange={(event) => setDescription(event.target.value)} variant="outlined" label="Description" />
                            </Grid>


                            {/* <Grid item xs={6}  >
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" onChange={handleChange} />
                                    <PhotoCamera />
                                </IconButton>
                                <Avatar alt="Remy Sharp" variant="rounded" src={defaultLogo.fileName} />
                                < PictureBtn />
                            </Grid> */}
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
            fetchAllBanner()
        })

    }

    const handleEditSubmit = async () => {
        var cd = new Date();
        var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()
        var body = {
            "companyid": companyId,
            "category": category,

            "Images": Images.bytes,
            "updateat": dd,
            "createdby": "ADMIN",

        }
        var result = await postData('category/edit_category', body)

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

        fetchAllBanner()
        setBtnStatus(false)

    };


    // **************For apply css********************
    var classes = useStylesTable()
    var Navigate = useNavigate()


    useEffect(function () {

        fetchAllBanner()

    }, []);




    const handlePicCancle = () => {

        setImages({ fileName: `${serverURL}/images/${oldPicture}`, bytes: "" })
        setOldPicture("")
        setMessage("")
    };
    const handlePicSave = async () => {
        var formData = new FormData()
        formData.append("companyid", companyId)
        formData.append("logo", Images.bytes)
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
        // fetchAllCities(rowData.state)
        // setCompanyName(rowData.companyname)
        // setOwnerName(rowData.ownername)
        // setEmailAddress(rowData.emailaddress)
        // setMobileNumber(rowData.mobilenumber)
        // setAddress(rowData.address)
        // setPassword(rowData.password)
        // setState(rowData.state)
        // setCity(rowData.city)
        // setStatus(rowData.status)
        // setCompanyId(rowData.companyid)
        // setDeafaultLogo({ fileName: `${serverURL}/images/${rowData.logo}`, bytes: "" })
        // setOldPicture(rowData.logo)

    };




    // **************For showAllComapany in MaterialTable********************


    function showAllCategory() {
        return (
            <MaterialTable
                title="company List"
                columns={[
                    { title: 'Company Id', field: 'companyid' },
                    { title: 'Banner Id', field: 'bannerid' },
                    { title: 'Status', field: 'status' },
                    {
                        title: 'last updation',
                        render: rowData => <div>{rowData.updatedat}<br />{rowData.createat}<br></br>{rowData.createdby}</div>
                    },

                    {
                        title: 'Banners',
                        render: rowData => <Avatar src={`${serverURL}/images/${rowData.images}`} styles={{ width: 70, height: 70, }} variant="rounded"></Avatar>
                    }

                ]}
                data={Data}

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
                {showAllCategory()}
                {showCategoryDetails()}
            </div>
        </div>
    )



}