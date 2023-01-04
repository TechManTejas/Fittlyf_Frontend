import Footer from "../../Template/Footer"
import Navbar from "../../Template/Navbar"
import Believe from "./Believe"
import Join from "./Join"
import Main from "./Main"
import Mission from "./Mission"
import Product from "./Product"
import Video from "./Video"

const Home = () => {
    return (
        <div id="Home">
            <Navbar />
            <Main />
            <Product />
            <Video />
            <Mission />
            
            <Believe />
            {/* <Join /> */}
            <Footer />
        </div>
    )
}

export default Home