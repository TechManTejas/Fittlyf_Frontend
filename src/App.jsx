import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Form from "./Pages/Form";
import Shipping from "./Pages/Form/Shipping";
import Payment from "./Pages/Form/Payment";
import { TempPage } from "./Pages/TempPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/about" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/temp" element={<TempPage />} />
      </Routes>
    </>
  );
};

export default App;
