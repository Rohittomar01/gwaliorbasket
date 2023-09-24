import { Grid } from "@mui/material";
import { TextField, MenuItem, FormHelperText } from "@material-ui/core";
import { FormControl, InputLabel, Select, Button } from "@mui/material";
import { Style } from "../../Components_CSS/ListProductCSS";
import { postData, getData } from "../../services/ServerServices";
import { useEffect, useState } from "react";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { DropzoneArea } from 'material-ui-dropzone';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



export default function ListProduct() {

    const classes = Style()
    var navigate = useNavigate();

    const [companyid, setCompanyId] = useState('');
    const [category, setCategory] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productSend, setProductSend] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [offerPrice, setOfferPrice] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState('')
    // for fetching data
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    const fetchCatogeryId = async () => {
        try {
            const result = await getData('listproduct/fetch_catogeryid');
            setCategories(result.data)
            // setCategoryId(result.data.categoryid)

        } catch (error) {
            // Handle errors if any
            console.error(error);
        }
    };

    const fetchProduct = async (categoryId) => {
      var body={
        'categoryId':categoryId
      }
        const result = await getData('listproduct/fetch_all_Product', { body: JSON.stringify(body) })
          
          
        setProducts(result.data)
        // alert(categoryId)
        // alert(body.categoryid); 
    }

    const fillProducts = () => {
        return products.map((item) => {
            return (<MenuItem value={item.productid}>{item.productname}</MenuItem>)

        });
    };
    const fillCategories = () => {
        return categories.map((item) => {
            return (<MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>)
        });
    };
    const handleCategoryChange = (event) => {
      
        // setCategory(event.target.value);
        setCategoryId(event.target.value);
        fetchProduct(event.target.value);
        fillProducts();
    }
    const handleProductsChange = (event) => {
        setProductSend(event.target.value);

    }
    // for handle Images
    const handleImage = (files) => {
        setImages(files)
    }
    //  for error handle

    const handleError = (input, value) => {

        setError(prev => ({ ...prev, [input]: value }))
    }

    const validation = () => {
        var isValid = true;

        if (!companyid) {
            handleError("companyid", "Inavlid CompanyId")
            isValid = false;
        }
        if (!categoryId) {
            handleError("categoryId", "Inavlid Category")
            isValid = false;
        }
        if (!productSend) {
            handleError("productSend", "Inavlid Product")
            isValid = false;
        }
        if (!price) {
            handleError("price", "Inavlid Price")
            isValid = false;
        }
        if (!offerPrice) {
            handleError("offerPrice", "Inavlid Offer price")
            isValid = false;
        }
        if (!weight) {
            handleError("weight", "Inavlid Weight")
            isValid = false;
        }
        if (!description) {
            handleError("description", "Inavlid Description")
            isValid = false;
        }
        if (!images) {
            handleError("images", "Inavlid Images")
            isValid = false;
        }
        return isValid;
    }

    // for submit

    const handleSubmitClick = async () => {

        var date = new Date();
        var dt = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getHours() + '/' + date.getDay() + '/' + date.getMinutes()
        if (validation()) {
            var body = {
                "companyid": companyid,
                'categoryid': categoryId,
                'productid': productSend,
                'weight': weight,
                'price': price,
                'offerprice': offerPrice,
                'description': description,
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

            var result = await postData('listproduct/submit_data', body)

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

        }
    }

    const handleResetClick = () => {

        setCompanyId('')
        setCategoryId('')
        setDescription('')
        setWeight('')
        setImages('')
        setPrice('')
        setOfferPrice('')
        setProductSend('')

    }

    useEffect(function () {
        fetchCatogeryId();
    }, []);

    return (
        <div>
            <div className={classes.mainContainer}>
                <div className={classes.box} >
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className={classes.FormatListBulletedIcon}>
                                <  FormatListBulletedIcon />
                            </div>
                            <div xs={12} className={classes.headingStyle}>List Product</div>
                        </div>
                        <div className={classes.FormatListBulletedIcon}>
                            <FormatListBulletedIcon onClick={() => navigate("/DisplayListProduct")} />
                        </div>
                    </div>
                    <Grid container marginY={10} spacing={1}>
                        <Grid xs={6} item>
                            <TextField error={!error.companyid ? false : true} helperText={error.companyid} onFocus={() => handleError("companyid", null)} fullWidth value={companyid} onChange={(event) => setCompanyId(event.target.value)} id="outlined-basic" label="Company Id" variant="outlined" />
                        </Grid>
                        <Grid xs={6} item>
                            <FormControl fullWidth sx={{ minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Category Id</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={categoryId}
                                    label="Category Id"
                                    onChange={handleCategoryChange}
                                    error={!error.categoryId ? false : true}
                                    onFocus={() => handleError(categoryId, null)}
                                >

                                    {fillCategories()}
                                </Select>
                                <FormHelperText style={{ color: 'red' }}>{error.categoryId}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid xs={6} item>
                            <FormControl fullWidth sx={{ minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Product Id</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={productSend}
                                    label="Product Id"
                                    onChange={handleProductsChange}
                                    error={!error.productSend ? false : true}
                                    onFocus={() => handleError(productSend, null)}
                                >

                                    {fillProducts()}

                                </Select>
                                <FormHelperText style={{ color: 'red' }}>{error.productSend}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid xs={6} item>
                            <TextField error={!error.weight ? false : true} helperText={error.weight} onFocus={() => handleError("weight", null)} fullWidth value={weight} onChange={(event) => setWeight(event.target.value)} id="outlined-basic" label="Weight" variant="outlined" />
                        </Grid>
                        <Grid xs={6} item>
                            <TextField error={!error.price ? false : true} helperText={error.price} onFocus={() => handleError("price", null)} fullWidth value={price} onChange={(event) => setPrice(event.target.value)} id="outlined-basic" label="Price" variant="outlined" />
                        </Grid>
                        <Grid xs={6} item>
                            <TextField error={!error.offerPrice ? false : true} helperText={error.offerPrice} onFocus={() => handleError("offerPrice", null)} fullWidth value={offerPrice} onChange={(event) => setOfferPrice(event.target.value)} id="outlined-basic" label="Offer Price" variant="outlined" />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField error={!error.description ? false : true} helperText={error.description} onFocus={() => handleError("description", null)} fullWidth value={description} onChange={(event) => setDescription(event.target.value)} id="outlined-basic" label="Description" variant="outlined" />
                        </Grid>
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
                                {error.images ? "" : "Please Select Image"}
                            </FormHelperText>
                        </Grid>
                        <Grid xs={6} item>
                            <Button fullWidth onClick={handleSubmitClick} variant="contained" style={{ marginBottom: '2%' }}>Submit</Button>
                        </Grid>
                        <Grid xs={6} item>
                            <Button fullWidth onClick={handleResetClick} variant="contained" style={{ marginBottom: '2%' }}>Reset</Button>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}