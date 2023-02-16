import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authentication } from "../../Firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const OTP = ({number, setGoToOTP}) => {

    const navigate = useNavigate()

    useEffect(() => {
        let phoneNumber =  "+91" + number;
        requestOTP(phoneNumber)
    }, [])

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {

            }
        }, authentication);
    }

    const requestOTP = (phoneNumber) => {
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier
        signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                console.log(error)
            });
    }

    const verifyOTP = (e) => {
        let otp = e.target.value;
        setOTP(otp)

        if (otp.length === 6) {
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user)
                navigate("/diet-plan")
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
            });
        }
    }

    const [OTP, setOTP] = useState()

    return(
        <>
            <div id="recaptcha-container"></div>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-12">
                <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl backdrop-blur-md bg-opacity-95">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                                <p>Mobile Number Verification</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                                <p>We have sent an OTP to +91 {number}</p>
                            </div>
                        </div>
                        <div>
                            <form action="" method="post">
                                <div className="flex flex-col space-y-16">
                                    <div className="flex flex-row items-center justify-between mx-auto w-full ">
                                        <div className="w-full h-12 ">
                                            <input
                                                value={OTP}
                                                onChange={(e) => { 
                                                    verifyOTP(e) 
                                                }}
                                                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                type="num"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-5">
                                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                            <p>Didn't recieve code?</p>{" "}
                                            <button
                                                onClick={()=>{
                                                    requestOTP(phoneNumber)
                                                }}
                                                className="flex flex-row items-center text-blue-600"

                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Resend
                                            </button>
                                        </div>
                                        <div>
                                            <button 
                                            onClick={()=>{
                                                setGoToOTP(0)
                                            }}
                                            style={{
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
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OTP;