import { Route, Routes } from "react-router-dom"
import Footer from "./Template/Footer"
import Navbar from "./Template/Navbar"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import About from "./Pages/About"
import Form from "./Pages/Form"
import Shipping from "./Pages/Form/Shipping"
import Payment from "./Pages/Form/Payment"

const App = () => {
    return (
        <>
            
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/products" element={<Products/>} />
                <Route exact path="/about" element={<Home />} />
                <Route exact path="/form" element={<Form/>} />
                <Route exact path="/shipping" element={<Shipping/>} />
                <Route exact path="/payment" element={<Payment/>} />
            </Routes>
            
        </>
    )
}

export default App
