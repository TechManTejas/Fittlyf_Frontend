import { ValidatePhone } from "../../Validator";
import { notify } from "../../Components/Notify";
import { useEffect, useState } from "react";

const MobileNumber = ({ number, setNumber, setGoToOTP }) => {

    const [validate, setValidate] = useState("")

    function updateNumber(number) {
        setNumber(number)
        setValidate(ValidatePhone(number))
    }

    function navigateToOTP(e){
        e.preventDefault()
        if(validate == 1) {
            setGoToOTP(1)
        }else{
            notify(validate)
        }
    }

    useEffect(() => {
        setValidate(ValidatePhone(number))
    }, [])
    

    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-12">
                <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl backdrop-blur-md bg-opacity-95">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                                <p>Mobile Number Verification</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                                <p>Please enter your mobile number</p>
                            </div>
                        </div>
                        <div>
                                <div className="flex flex-col space-y-16">
                                    <div className="flex flex-row items-center justify-between mx-auto  ">
                                        <div className="h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 p-2">
                                            +91
                                        </div>
                                        <div className="w-full h-12 ">
                                            <input
                                                value={number}
                                                onChange={(e)=>{
                                                    updateNumber(e.target.value)
                                                }}
                                                type="number"
                                                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-5">
                                        
                                        <div>
                                            <button 
                                            onClick={(e) => {
                                                navigateToOTP(e)
                                            }}
                                            className="w-full" style={{ 
                                                "position": "relative", 
                                                "boxSizing": "border-box", 
                                                "WebkitTapHighlightColor": "transparent", 
                                                "outline": "0px", 
                                                "border": "0px", 
                                                "margin": "0px", 
                                                "cursor": "pointer", 
                                                "verticalAlign": "middle", 
                                                "appearance": "none", 
                                                "textDecoration": "none", 
                                                "fontFamily": "Roboto, Helvetica, Arial, sans-serif", 
                                                "letterSpacing": "0.02857em", 
                                                "minWidth": "64px", 
                                                "display": "inline-flex", 
                                                "WebkitBoxPack": "center", 
                                                "justifyContent": "center", 
                                                "WebkitBoxAlign": "center", 
                                                "alignItems": "center", 
                                                "fontSize": "0.8rem", 
                                                "fontWeight": "700", 
                                                "borderRadius": "0.5rem", 
                                                "lineHeight": "1.4", 
                                                "textAlign": "center", 
                                                "textTransform": "uppercase", 
                                                "userSelect": "none", 
                                                "transition": "all 150ms ease-in 0s", 
                                                "minHeight": "2.3125rem", 
                                                "padding": "0.5625rem 1.5rem", 
                                                "backgroundImage": "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", 
                                                "backgroundPositionY": "initial", 
                                                "backgroundRepeat": "initial", 
                                                "backgroundAttachment": "initial", 
                                                "backgroundOrigin": "initial", 
                                                "backgroundClip": "initial", 
                                                "backgroundColor": "initial", 
                                                "color": "rgb(255, 255, 255)", 
                                                "boxShadow": "rgb(52 71 103 / 15%) 0rem 0.1875rem 0.1875rem 0rem, rgb(52 71 103 / 20%) 0rem 0.1875rem 0.0625rem -0.125rem, rgb(52 71 103 / 15%) 0rem 0.0625rem 0.3125rem 0rem", 
                                                "backgroundSize": "150% !important", 
                                                "backgroundPositionX": "25% !important" 
                                                }}>
                                                Send OTP
                                            </button>
                                        </div>
                                        
                                        <div className="flex justify-center">
                                            OR
                                        </div>
                                                
                                        <button id="whatsapp-login"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNumber;