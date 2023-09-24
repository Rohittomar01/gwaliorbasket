import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { serverURL, getData } from "../../../services/ServerServices"
// for icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function Focus_Brand() {

    const [Product, setProduct] = useState([]);

    const fetchAllDealsProducts = async () => {
        var result = await getData('product/fetch_all_DealsProducts')
        setProduct(result.data)
        
    };

    useEffect(function () {

        fetchAllDealsProducts();

    }, [])


    const Cart = () => {
        return Product.map((item) => {
            return (
                <Paper style={{ margin: '0.7%', display: 'flex', flexDirection: 'column', background: 'linear-gradient(0deg, rgba(113,6,162,1) 34%, rgba(93,12,119,1) 72%)', borderRadius: 15, width: '11vw', height: '35vh', padding: '0.7%' }}>
                    <div style={{ height: '15%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}><p style={{ marginTop: '15%', fontFamily: 'poppins', fontWeight: "bold", padding: '0.8', width: '60%', background: 'white', textAlign: 'center', color: '#35155D', borderRadius: 5 }}>Best Deal</p></div>
                    <div style={{ height: '25%' }}><h3 style={{ textAlign: 'center', color: 'white' }}>{item.productname}</h3></div>
                    <div style={{ marginTop: '15%', display: 'flex', justifyContent: 'center', padding: '2%' }}>
                        <img src={`${serverURL}/images/${item.image}`} style={{ width: '70%', height: '85%' }}></img>
                    </div >
                </Paper>

            )
        })

    }








    return (
        <div>
            <div style={{ marginLeft: '2%', width: '94.5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ marginTop: '0%', }}>
                    <h3 style={{ fontFamily: 'poppins', fontWeight: 700 }}>Brands In Focus</h3>
                </div>
                {/* <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%', fontFamily: 'poppins', color: 'red' }}>
                    <h4>See All</h4>
                    <KeyboardArrowRightIcon style={{ marginTop: '27%' }} />
                </div> */}
            </div>
            <div style={{ marginLeft: '1.5%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {Cart()}
            </div>
        </div>

    )
}