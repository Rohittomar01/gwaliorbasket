import Company from "./Component/administrator/Company";
import DisplayAllCompanies from "./Component/administrator/DisplayAllCompany";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Component/administrator/Product";
import Category from "./Component/administrator/Category";
import Admin from "./Component/administrator/Admin";
import DisplayAllProducts from "./Component/administrator/DisplayAllProducts";
import Page1Card from "./Component/administrator/Page1Card";
// User Interface
import Product_Add from "./Component/User_Interface/Product_Add";
import Cart from "./Component/administrator/Cart";
import DisplayAllCategories from "./Component/administrator/DisplayAllCategories";
import ListProduct from "./Component/administrator/ListProduct";
import Dashboard from "./Dasboard_Components/Dashboard";
import DisplayListProduct from "./Dasboard_Components/Display_ListProduct";
import Banner_Upload from "./Component/administrator/Banner_Upload";
import Display_Banner from "./Component/administrator/Display_Banners";
import Show_Category from "./Component/User_Interface/Show_Category";
import Please_Login from "./Component/User_Interface/Please_Login";
// Header
import Header from "./Component/User_Interface/User_Components/Header.js"
import Main_Slider from "./Component/User_Interface/User_Components/Main_Slider";
// for Home 
import Home from "./Component/User_Interface/Home";



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Please_Login />} path={"/Please_Login"}></Route>
        <Route element={<Show_Category />} path={"/Show_Category"}></Route>
        <Route element={<DisplayAllProducts />} path={"/DisplayAllProducts"}></Route>
        <Route element={<Display_Banner />} path={"/Display_Banner"}></Route>
        <Route element={<Banner_Upload />} path={"/Banner_Upload"}></Route>
        <Route element={<Main_Slider />} path={"/Main_Slider"}></Route>
        <Route element={<DisplayListProduct />} path={"/DisplayListProduct"}></Route>
        <Route element={<DisplayAllCategories />} path={"/displayallcategories"}></Route>
        <Route element={<ListProduct />} path={"/ListProduct"}></Route>
        <Route element={<Dashboard />} path={"/Dashboard/*"}></Route>
        {/* User Interface */}
        <Route element={<Header />} path={"/Header"}></Route>
        <Route element={<Home />} path={"/Home"}></Route>
        <Route element={<Cart />} path={"/Cart"}></Route>
        <Route element={<Product_Add />} path={"/Product_Add"}></Route>
        <Route element={<Page1Card />} path={"/Page1Card"}></Route>
        <Route element={<Company />} path={"/company"}></Route>
        <Route element={<DisplayAllCompanies />} path={"/DisplayAllCompanies"}></Route>
        <Route element={<Category />} path={"/Category"}></Route>
        <Route element={<Admin />} path={"/Admin"}></Route>
      </Routes>
    </Router>
  );
}

export default App;
