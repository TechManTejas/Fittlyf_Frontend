import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Form from "./Pages/Form";
import Shipping from "./Pages/Form/Shipping";
import Payment from "./Pages/Form/Payment";
import { useState } from "react";

const App = () => {
  const [pack, setpack] = useState(false);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/products"
          element={<Products setpack={setpack} />}
        />
        <Route exact path="/about" element={<Home />} />
        <Route exact path="/form" element={<Form pack={pack} />} />
        <Route exact path="/shipping" element={<Shipping pack={pack} />} />
        <Route exact path="/payment" element={<Payment pack={pack} />} />
      </Routes>
    </>
  );
};

export default App;
