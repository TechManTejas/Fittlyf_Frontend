import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Form from "./Pages/Form";
import Shipping from "./Pages/Form/Shipping";
import Payment from "./Pages/Form/Payment";
import Success from "./Pages/Form/Success"
import { Notify } from "./Components/Notify";
import Webinar from "./Pages/Webinar";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import PhoneVerification from "./Pages/PhoneVerification";
import DietPlan from "./Pages/DietPlan";
import Paperform from "./Pages/Paperform";


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
        <Route exact path="/order/:id" element={<Success />} />
        <Route exact path="/webinar/:id" element={<Webinar />} />
        <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/paperform" element={<Paperform />} />
        <Route exact path="/phone-verification" element={<PhoneVerification />} />
        <Route exact path="/diet-plan" element={<DietPlan />} />
      </Routes>
      <Notify />
    </>
  );
};

export default App;
