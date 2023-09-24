import { useEffect, useState } from "react"
import { getData, serverURL, postData } from "../services/ServerServices";
import Swal from "sweetalert2";
import MaterialTable from "@material-table/core";
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogActions, FormControlLabel, Switch, DialogTitle, TextField, Button, Grid, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, Avatar, Stack, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";




export default function DisplayListProduct() {
   
     var Navigate=useNavigate()

    const [CompanyId, setCompanyId] = useState([]);
    const [CategoryId, setCategoryId] = useState('');
    const [Weight, setWeight] = useState();
    const [Price, setPrice] = useState('');
    const [OfferPrice, setOfferPrice] = useState('');
    const [Description, setDescription] = useState('');
    const [Images, setImages] = useState('');
    const [ProductId, setProductId] = useState('');
    const [Categories, setCategories] = useState([]);
    const [Products, setProducts] = useState([]);
    const [productListId, setProductListId] = useState('');


    // for Open dialog box
    const [Open, setOpen] = useState(false);
    //    for material table data
    const [Data, setData] = useState([]);

    //   for filling DropDowns
   
   
    const fetchCatogeryId = async () => {
        try {
            const result = await getData('listproduct/fetch_catogeryid');
            setCategories(result.data);
        } catch (error) {
            // Handle errors if any
            console.error(error);
        }
    };

    const fetchProduct = async () => {
        const result = await getData('listproduct/fetch_all_Product');
        setProducts(result.data);
        
    }

    const fillProducts = () => {
        return Products.map((item) => {
            return (<MenuItem value={item.productid}>{item.productname}</MenuItem>)

        });
    };
    const fillCategories = () => {
        return Categories.map((item) => {
            return (<MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>)
        });
    };
    const handleCategoryChange = (event) => {

        setCategoryId(event.target.value);
        // alert(categoryId);
        fetchProduct();
        fillProducts();
    }
    const handleProductsChange = (event) => {
        setProductId(event.target.value);

    }

    //  For updation

    const handleSubmitClick = async () => {

        var date = new Date();
        var dt = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getHours() + '/' + date.getDay() + '/' + date.getMinutes()

        var body = {
                       "companyid": CompanyId,
            'category': CategoryId,
            'product': ProductId,
            'weight': Weight,
            'price': Price,
            'offerprice': OfferPrice,
            'description': Description,
            'updatedat': dt,
            'createdby': 'Admin',
            "productListId": productListId,

        }

        var result = await postData('listproduct/update_listproduct', body)

        if (result.status) {
            setOpen(false)
            Swal.fire({
              
                icon: 'success',
                title: result.message,
            })
            ShowListProduct()
        }
        else {
            Swal.fire({
                icon: 'error',
                title: result.message,
            })

        }

    }

    //   for Fetch list product details

    const handleOpenDialog = (rowData) => {
        setOpen(true)
        setCompanyId(rowData.companyid);
        setCategoryId(rowData.catogeryid);
        setProductId(rowData.productid)
        setWeight(rowData.weight);
        setPrice(rowData.price);
        setOfferPrice(rowData.offerprice);
        setDescription(rowData.description);
        setImages(rowData.images[0]);
        setProductListId(rowData.productlistid)
    }

    const handleClose = () => {
        setOpen(false)
    }
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
                var result = await postData('listproduct/delete_listproduct_details', { productlistid: rowData.productlistid })
                Swal.fire(
                    'Deleted!',
                    ' deleted succesfully',
                    'success'
                )
                ShowListProduct()
            }
        })

    }


    const show_ListProduct_Details = () => {

        return (
            <div>
                <div>
                    <Dialog
                        open={Open}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" style={{ display: "flex", justifyContent: "space-between", paddingTop: 20 }}>
                            <div style={{ display: "flex", justifyItems: "center" }}>
                                <Avatar alt="Remy Sharp" src="./basketlogo.png" />
                                List Product Details</div>
                            <div>
                                <CloseIcon style={{ cursor: "Pointer" }} onClick={handleClose} />
                            </div>
                        </DialogTitle>
                        <Grid container spacing={2} style={{ padding: 15 }} >
                            <Grid item xs={6}>
                                <TextField value={CompanyId} fullWidth onChange={(event) => setCompanyId(event.target.value)} variant="outlined" label="Company Id" />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category Id</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={CategoryId}
                                        label="Category Id"
                                        onChange={handleCategoryChange}
                                    >
                                        <MenuItem value={"Choose State..."}>Choose State...</MenuItem>
                                        {fillCategories()}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Product Id</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={ProductId}
                                        label="Product Id"
                                        onChange={handleProductsChange}
                                    >
                                        <MenuItem value={"Choose City..."}>Choose City...</MenuItem>
                                        {fillProducts()}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <TextField value={Weight} fullWidth onChange={(event) => setWeight(event.target.value)} variant="outlined" label="Weight" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={Price} fullWidth onChange={(event) => setPrice(event.target.value)} variant="outlined" label="Price" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={OfferPrice} fullWidth onChange={(event) => setOfferPrice(event.target.value)} variant="outlined" label="OfferPrice" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={Description} fullWidth onChange={(event) => setDescription(event.target.value)} variant="outlined" label="Description" />
                            </Grid>

                        </Grid>
                        <DialogActions>
                            <Button autoFocus onClick={handleSubmitClick} >Edit</Button>
                            <Button autoFocus onClick={handleClose}>
                                Cancle
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        );
    }

    const fetchListProduct = async () => {
        var result = await getData('listproduct/fetchlistproduct')
        setData(result.data)
    }


    useEffect(function () {
        fetchListProduct();
       fetchProduct();
        fillCategories();
        fillProducts();
        fetchCatogeryId();
    }, [])

    const ShowListProduct = () => {

        return (

            <MaterialTable
                title="company List"
                columns={[
                    { title: 'Company Id', field: 'companyid' },
                    {
                        title: 'CategoryId/ProductId',
                        render: rowData => <div>{rowData.catogeryid}<br></br>{rowData.productid}</div>
                    },
                    {
                        title: 'Weight', field: 'weight',

                        render: rowData => <div>{rowData.weight}</div>
                    },
                    {
                        title: 'Price/Offer_Price', field: 'emailaddress',

                        render: rowData => <div>{rowData.price}<br />{rowData.offerprice}</div>
                    },
                    { title: 'Description', field: 'description', },
                    {
                        title: 'last Updation',

                        render: rowData => <div>{rowData.createdat}<br />{rowData.updatedat}<br />{rowData.createdby}</div>
                    },
                    // {
                    //     title: 'Logo',

                    //     render:rowData.images.map((item, index) => (
                    //         <Avatar
                    //             key={index}
                    //             src={`${serverURL}/images/${item}`}
                    //             style={{ width: 70, height: 70 }}
                    //             variant="rounded"
                    //         />
                    //     ))
                    // }

                ]}
                data={Data}

                actions={[
                    {
                        icon: "add",
                        isFreeAction: "true",
                        tooltip: "add list product",
                        onClick: () => Navigate("/ListProduct")

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

    return (
        <div>
            <div>
                {ShowListProduct()}
                {show_ListProduct_Details()}
            </div>
        </div>
    )


}

