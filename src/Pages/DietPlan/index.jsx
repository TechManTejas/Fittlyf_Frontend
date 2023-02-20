import axios from "axios";
import { useEffect } from "react";
import HERO from "../../Images/vegan.jpg";

const DietPlan = () => {

    useEffect(() => {
        if(localStorage.getItem("phoneNumber")){
            var phoneNumber = localStorage.getItem("phoneNumber")
            console.log(phoneNumber)
            // save to database
            localStorage.removeItem("phoneNumber");
        }

        if (localStorage.getItem("otpless_waId")){
            var otpless_waId = localStorage.getItem("otpless_waId")
            // sent otpless_waId to server
            console.log(otpless_waId)
            // axios.post(
            //     "https://fittlyf.authlink.me/",
            //     {
            //         "waId": otpless_waId
            //     },
            //     {
            //         headers:{
            //             'Content-Type': 'application/json',
            //             'clientSecret': 'iyyfgsz1cfe74gmy',
            //             'clientId':'pqirooh0'
            //         }
            //     }
            // ).then(({data}) => {
            //     console.log(data);
            //     //save to database
            // })
        }
    })

    return (
        <div className="flex justify-center items-center bg-fittlyf-background bg-no-repeat bg-bottom bg-[#F0E9FF] 
            md:h-screen
        ">
            <div
                className="border bg-white 
                        lg:p-8 lg:px-14 lg:ml-24
                        md:p-6 md:px-8 md:ml-24
                        md:flex md:flex-row md:rounded-lg
                        flex flex-col justify-center items-center
                        p-5
                    "
                style={{ boxShadow: "rgba(100, 100, 111, 0.8) 0px 7px 29px 0px" }}
            >
                <div
                    className="flex justify-center items-center 
                            lg:w-72 lg:-ml-40
                            md:w-64 md:-ml-32
                            w-[280px]
                        "
                >
                    <img src={HERO} className="md:rounded-3xl"></img>
                </div>
                <div
                    className="flex flex-col justify-center items-center 
                            lg:ml-14
                            md:ml-8
                        "
                >
                    <div
                        className="text-2xl 
                                lg:m-2.5 lg:mt-8
                                md:m-2 md:my-4 md:mt-6
                                m-2 my-3 mt-8
                            "
                    // style={{ fontFamily: "Maharlika" }}
                    >
                        VEGAN DIET PLAN
                    </div>
                    <div
                        className="
                                max-w-[500px]
                                lg:mb-4
                                md:mb-2
                                mb-4
                            "
                    // style={{ fontFamily: "Maharlika" }}
                    >
                        Are you gluten-free and vegan, too? Meal planning
                        around multiple dietary restrictions can be
                        challenging. This Gluten-Free Vegan Meal Plan is
                        filled with delicious options to make it easier to
                        shop and prepare healthy meals. If you are glutenfree and looking to make your diet more plantbased, this meal plan can be a great resource for
                        you, too. If you are on a long-term vegan diet, it is
                        important to consult with your personal healthcare
                        team and/or a registered dietitian to ensure that
                        you are getting all the essential nutrients you need.
                        {' '}
                        This meal plan isintended to provide
                        guidance and inspiration for planning
                        gluten-free meals. The meal plan
                        includes a variety of nutritiousfoods,
                        but isfor informational purposes only
                        and does not constitute medical dietary
                        advice. Consult with your personal
                        healthcare team when considering this
                        information.

                    </div>
                    <div>
                    </div>
                    <div className="flex justify-center text-white ">

                        <a
                            download
                            type="submit"
                            href="4_Week_Vegan_Gluten_Free_Mean_Plan.pdf"
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
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DietPlan;
