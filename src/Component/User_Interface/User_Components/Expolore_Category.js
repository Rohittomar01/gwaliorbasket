import { useEffect } from "react";
import { Paper } from "@mui/material";
import { serverURL,getData } from "../../../services/ServerServices"
// for icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Category } from "@mui/icons-material";
import { useState } from "react";


export default function Explore_Category() {

 const [Category,setCategory]=useState([]);

    const fetchAllCategories = async () => {
        var result = await getData('category/fetch_all_category')
        setCategory(result.data)
       
    };

    useEffect(function () {

        fetchAllCategories();

    }, [])


    const Cart = () => {
        return Category.map((item) => {
            return (
                <Paper style={{ margin:'0.7%',display:'flex',flexDirection:'column',background:'#FFF0F5',borderRadius:15,width:'11vw',height:'30vh',padding:'0.7%'}}>
                    <div style={{height:'30%'}}><h3 style={{textAlign:'center',color:'#35155D'}}>{item.categoryname}</h3></div>
                    <div style={{marginTop:'15%',display: 'flex', justifyContent: 'center', padding: '2%' }}>
                        <img src={`${serverURL}/images/${item.icon}`} style={{ width: '70%',height:'85%' }}></img>
                    </div >
                </Paper>

            )
        })

    }






    return (
        <div>
            <div style={{ marginLeft: '2%', width: '94.5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <h3 style={{ fontFamily: 'poppins', fontWeight: "bolder" }}>Explore By Categories</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', fontFamily: 'poppins', color: 'red' }}>
                    <h4>See All</h4>
                    <KeyboardArrowRightIcon style={{ marginTop: '27%' }} />
                </div>
            </div>
            <div style={{ marginLeft: '1.5%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {Cart()}
            </div>
        </div>

    )
}