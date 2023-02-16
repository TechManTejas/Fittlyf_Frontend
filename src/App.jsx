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

import { authentication } from "./Firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";


const App = () => {

  useEffect(() => {
    // requestOTP()
  },[])

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {

      }
    }, authentication);
  }

  const requestOTP = () => {
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(authentication, "+917666674367", appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
    }).catch((error) => {
        console.log(error)
    });
  }

  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp)

    if(otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
    }
  }

  const [otp, setOTP] = useState(0)

  return (
    <>
      <div id="recaptcha-container"></div>
      <div className="absolute flex h-screen w-screen justify-center items-center">
        <input value={otp} onChange={(e) =>{verifyOTP(e)}}></input>
      </div>
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
        <Route exact path="/phone-verification" element={<PhoneVerification />} />
      </Routes>
      <Notify />
    </>
  );
};

export default App;
