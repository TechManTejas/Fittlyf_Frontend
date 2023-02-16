import { useState } from "react";
import { useEffect } from "react";
import MobileNumber from "./MobileNumber";
import OTP from "./OTP";

const PhoneVerification = () => {

    const [number, setNumber] = useState("")
    const [goToOTP, setGoToOTP] = useState(0)

    return (
        <div className="flex justify-center items-center bg-fittlyf-background bg-no-repeat bg-bottom bg-[#F0E9FF] 
            md:h-screen
        ">
            
            {goToOTP ?
                <OTP number={number} setGoToOTP={setGoToOTP} />
                :
                <MobileNumber number={number} setNumber={setNumber} setGoToOTP={setGoToOTP}/>
            }
            
        </div>
    );
};

export default PhoneVerification;
