import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Grid, Avatar, ListItemIcon, Drawer, Paper, Button, ListItemButton, ListItemAvatar } from '@mui/material';
import Scrollbars from 'react-custom-scrollbars';
import { serverURL, getData } from '../../services/ServerServices';
// for Component
import Header from './User_Components/Header';
// for Style
import { Show_Category_Styles } from '../../Components_CSS/Show_CateoryCSS';

export default function Show_Category() {

    const classes = Show_Category_Styles()

    const [Category, setCategory] = useState([]);
    const [Product, setProduct] = useState([]);


    const fetchAllCategories = async () => {
        var result = await getData('category/fetch_all_category')
        setCategory(result.data)

    };
    const fetchallproducts = async (categoryid) => {
        var body = {
            'categoryid': categoryid
        }
        var result = await getData('listproduct/fetchallproducts', body)
        setProduct(result.data)
    };

    useEffect(function () {

        fetchAllCategories();
        // fetchallproducts();


    }, [])


    const categoryList = () => {
        return Category.map((item) => {
            return (
                <List component="list" aria-label="mailbox folders">
                    <ListItem >
                        <ListItemButton onClick={() => fetchallproducts(item.categoryid)} onSelect={true} selected={item.selected} style={{ borderRadius: 30 }}>
                            <ListItemAvatar>
                                <Avatar
                                    alt={item.categoryname}
                                    src={`${serverURL}/images/${item.icon}`}
                                    sx={{ width: 46, height: 46 }}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={item.categoryname} />
                        </ListItemButton>
                    </ListItem>
                    {/* <Divider /> */}
                </List>
            )
        })
    }


    // for  show Product


    const Cart = () => {
        return Product.map((item) => {
            return (
                <div style={{ padding: "1.5%" }}>
                    <Paper elevation={4} className={classes.cart_paper} >
                        <div className={classes.cart_img_div}>
                            <img src={`${serverURL}/images/${item.images}`} className={classes.cart_image} ></img>
                        </div>
                        <div style={{ lineHeight: 0 }}>
                            <p className={classes.cart_p_div}>{item.description}</p>
                            <p>{item.weight}</p>
                        </div>
                        <div className={classes.cart_price_button_div} >
                            <div>
                                <span style={{ fontWeight: 600 }}>₹{item.price}</span>
                            </div>
                            <div>
                                <Button className={classes.cart_button} variant="outlined" size="small">
                                    Add
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>

            )
        })

    }


    // useEffect(function () {
    //     categoryList()
    // }, [])

    return (
        <div>
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={2.5} className={classes.grid_01} >
                        <Scrollbars thumbSize={'100%'} autoHide={true} >
                            {categoryList()}
                        </Scrollbars>
                    </Grid>
                    <Grid item xs={9.5} className={classes.grid_02}>
                        <Scrollbars autoHide={true} className={classes.scrollbar_02} >
                            <Grid item xs={12} className={classes.grid_03} >
                                {Cart()}
                            </Grid>
                        </Scrollbars>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}