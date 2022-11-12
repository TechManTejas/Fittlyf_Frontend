import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Form from "./Pages/Form";
import Shipping from "./Pages/Form/Shipping";
import Payment from "./Pages/Form/Payment";
import Razorpay from "./Pages/Form/Razorpay"
import { TempPage } from "./Pages/TempPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/about" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/payment" element={<Shipping />} />
        <Route exact path="/shipping" element={<Payment />} />
        <Route exact path="/razorpay" element={<Razorpay />} />
        <Route exact path="/temp" element={<TempPage />} />
      </Routes>
    </>
  );
};

export default App;
