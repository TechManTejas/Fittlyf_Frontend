import Footer from "../../Template/Footer"
import Navbar from "../../Template/Navbar"
import Experts from "./Experts"
import FAQ from "./FAQ"
import Ingredients from "./Ingredients"
import Review from "./Review"
import SingleProduct from "./SingleProduct"

const Products = () => {
    return (
        <div id="Products">
            <Navbar/>
            <SingleProduct/>
            <Ingredients/>
            <Experts />
            <Review/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Products
