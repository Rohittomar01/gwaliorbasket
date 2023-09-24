// for Componets
import Header from "./User_Components/Header"
import Main_Slider from "./User_Components/Main_Slider"
import Slider_02 from "./User_Components/Slider_02"
import Favourite_Picks from "./User_Components/Favourite_Picks"
import Explore_Category from "./User_Components/Expolore_Category"
import New_Category from "./User_Components/New_Category"
import Focus_Brand from "./User_Components/Focus_Brand"
import Buy_Em from "./User_Components/Buy_Em"
import How_It_Work from "./User_Components/How_it_Work"
import Trending_Products from "./User_Components/Trending_Products"

export default function Home() {
    return (
        <div >
            <div style={{position:'sticky'}}>
                <Header Tab_11='Offers' Tab_12='Deals' Tab_13='Coupon' Tab_21='Category' Tab_22='Deals' Tab_23="What's New" Tab_24='Trending' display='none' />
            </div>
            <div>
                <Main_Slider />
            </div>
            <div style={{ marginTop: '2%' }}>
                <Slider_02 />
            </div>
            <div>
                <Favourite_Picks />
            </div>
            <div>
                <Explore_Category />
            </div>
            <div>
                <New_Category />
            </div>
            <div>
                <Focus_Brand />
            </div>
            <div>
                <Buy_Em />
            </div>
            <div>
                <Trending_Products />
            </div>
            <div>
                <How_It_Work />
            </div>
        </div>
    )
}