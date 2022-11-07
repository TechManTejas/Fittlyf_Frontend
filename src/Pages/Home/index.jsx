import Footer from "../../Template/Footer"
import Navbar from "../../Template/Navbar"
import Believe from "./Believe"
import Join from "./Join"
import Main from "./Main"
import Mission from "./Mission"
import Product from "./Product"

const Home = () => {
    return (
        <div id="Home">
            <Navbar/>
            <Main/>
            <Mission/>
            <Product/>
            <Believe/>
            <Join/>
            <Footer/>
        </div>
    )
}

export default Home
