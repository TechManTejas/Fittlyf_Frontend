import Footer from "../../Template/Footer"
import Navbar from "../../Template/Navbar"
import Experts from "./Experts"
import FAQ from "./FAQ"
import Ingredients from "./Ingredients"
import Review from "./Review"
import SingleProduct from "./SingleProduct"

const Products = ({setpack}) => {
    return (
        <div id="Products">
            <Navbar/>
            <SingleProduct setpack = {setpack}/>
            <Ingredients/>
            <Review/>   
            <Experts/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Products
