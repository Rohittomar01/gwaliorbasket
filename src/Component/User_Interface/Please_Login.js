import { useEffect, useState } from "react";
// for DialogBox
import { Dialog, DialogContent, DialogActions, FormControlLabel, Switch, DialogTitle, TextField, Button, Grid, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, Avatar, Stack, MenuItem, Select } from "@mui/material";
// for Style
import { Please_LoginStyles } from "../../Components_CSS/Please_LoginCSS";



export default function Please_Login() {

    // for Style
    const classes = Please_LoginStyles()

    const [Number, setNumber] = useState();
    const [open, setOpen] = useState(false);
    const [openOtp, setOpenOtp] = useState(false);


    const handleClose = () => {

        setOpen(false)
    };


    const DialogBox = () => {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                >
                    <DialogTitle id="alert-dialog-title" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    </DialogTitle>
                    <DialogContent  >
                        <Grid container spacing={2} style={{ marginTop: 5 }}>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    InputProps={{
                                        style: {
                                            borderRadius: 30,
                                        }
                                    }}
                                    fullWidth onChange={(event) => setNumber(event.target.value)} variant="outlined" >91+</TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth onClick={() => [setOpen(false), setOpenOtp(true)]} style={{ borderRadius: 20, backgroundColor: "#004225", color: 'white', height: '7vh', marginTop: '2vh' }}>Login</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth onClick={() => setOpen(false)} variant='text' style={{ borderRadius: 20, color: '#004225', height: '7vh' }}>Close</Button>
                            </Grid>
                            <Grid item xs={6} className={classes.rowStyle}>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
    const Otp_DialogBox = () => {
        return (
            <div>
                <Dialog
                    open={openOtp}
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                >
                    <DialogTitle id="alert-dialog-title" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    </DialogTitle>
                    <DialogContent >
                        <Grid container spacing={2} style={{ marginTop: 5 }}>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    InputProps={{
                                        style: {
                                            borderRadius: 30,
                                        }
                                    }}
                                    fullWidth onChange={(event) => setNumber(event.target.value)} variant="outlined" >91+</TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth onClick={() => setOpen(true)} style={{ borderRadius: 20, backgroundColor: "#004225", color: 'white', height: '7vh', marginTop: '2vh' }}>Confirm</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth onClick={() => [setOpenOtp(false), setOpen(true)]} variant='text' style={{ borderRadius: 20, color: '#004225', height: '7vh' }}>Close</Button>
                            </Grid>
                            <Grid item xs={6} className={classes.rowStyle}>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    useEffect(function () {
        DialogBox()
    }, [])

    const showContent = () => {
        return (
            <div>
                <div style={{ lineHeight: '0vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div><h3 style={{ textAlign: "center" }} >Please Login</h3></div>
                    <div><p style={{ textAlign: "center", color: 'Gray' }}>Please login to access the cart</p></div>
                    <div><Button onClick={() => setOpen(true)} style={{ backgroundColor: "#004225", color: 'white', width: '25vw', height: '7vh', marginTop: '2vh' }}>Login</Button></div>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.boxtable}>
                {showContent()}
                {DialogBox()}
                {Otp_DialogBox()}
            </div>
        </div>
    )
}