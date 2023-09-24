import { useState } from "react";
import { Grid, Button } from "@mui/material"
import { DropzoneArea } from 'material-ui-dropzone';
import { TextField, MenuItem, FormHelperText } from "@material-ui/core";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Swal from "sweetalert2";
import { serverUrl, postData } from "../../services/ServerServices"
// for Css
import { Banner_Styles } from "../../Components_CSS/Banner_UploadCss"


export default function Banner_Upload() {

    const classes = Banner_Styles()


    const [images, setImages] = useState([]);
    const [error, setError] = useState('')
    const [Status, setStatus] = useState('')



    // error Handling
    const handleError = (input, value) => {
        setError(prev => ({ ...prev, [input]: value }))
    }
    const validation = () => {
        var isValid = true;

        if (!images) {
            handleError('images', 'Please Select the Image')
            isValid = false;
        }
        if (!Status) {
            handleError('Status', 'Please Select the Status')
            isValid = false;
        }
        return isValid;

    }
    // for submit

    const handleSubmitClick = async () => {

        var date = new Date();
        var dt = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getHours() + '/' + date.getDay() + '/' + date.getMinutes()
        // if (validation()) {
            var body = {
                'companyid':'10',
                'status': Status,
                'createdat': dt,
                'updatedat': dt,
                'images': images,
                'createdby': 'Admin',
            }
            // console.log('FORMDATA', body);

            // formData.append('companyid', companyid);
            // formData.append('category', category);
            // formData.append('product', productSend);
            // formData.append('weight', weight);
            // formData.append('price', price);
            // formData.append('offerprice', offerPrice);
            // formData.append('description', description)
            // formData.append('createdat', dt)
            // formData.append('updatedat', dt)
            // formData.append('submitedby', 'Admin');
            // console.log("formdata", formData);
            // images.map((item, i) => {
            //     formData.append('images' + i, item)
            // })

            var result = await postData('banner/submit_banner', body)

            if (result.status) {
                Swal.fire({
                    icon: 'success',
                    title: result.message,
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: result.message,
                })

            }

        // }
    }


    // for handle Images
    const handleImage = (files) => {
        setImages(files)
    }



    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <div>
                    <div className={classes.headingStyle}>Company Category</div>
                </div>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <DropzoneArea
                            acceptedFiles={['image/*']}
                            dropzoneText={"Drag and drop an image here or click"}
                            filesLimit={5}
                            onChange={(files) => handleImage(files)}
                            error={!error.images ? false : true}
                            onFocus={() => handleError("images", null)}
                        />
                        <FormHelperText style={{ color: 'red' }}>
                            {error.images ? "" : "Please Select Images"}
                        </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={(event)=>setStatus(event.target.value)}
                                error={!error.Status ? false : true}
                                onFocus={() => handleError('Status', null)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="True" />
                                <FormControlLabel value="false" control={<Radio />} label="False" />
                            </RadioGroup>
                        </FormControl>
                        <FormHelperText style={{ color: 'red' }}>
                            {error.Status ? "Please Select Status" : ""}
                        </FormHelperText>
                    </Grid>
                    <Grid xs={6} item>
                        <Button fullWidth onClick={()=>handleSubmitClick()} variant="contained" style={{ marginBottom: '2%' }}>Submit</Button>
                    </Grid>
                    <Grid xs={6} item>
                        <Button fullWidth variant="contained" style={{ marginBottom: '2%' }}>Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}