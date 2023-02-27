import { useEffect } from "react";
import Main from "../Home/Main";

const Paperform = () => {

    useEffect(() => {
        var script = document.createElement('script');
        script.src = "https://paperform.co/__embed.min.js";
        document.body.appendChild(script);
    }, [])


    return (
        <>
            <div className="flex flex-col justify-center items-center bg-fittlyf-background bg-no-repeat bg-bottom bg-[#F0E9FF]
                min:h-screen
            "> 
                <div className="">
                    <Main button={0} />
                </div>
                
                <div className="flex flex-col items-center bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg backdrop-blur-md bg-opacity-85 space-y-16
                    lg:m-3 lg:rounded-2xl
                ">
                    <div className="font-bold text-6xl text-[#9a6dda]">
                        PCOS Quiz
                    </div>
                    <div className="text-2xl">
                        Answer 4 question to know how can you reverse your condition.
                    </div>
                    <button
                        data-paperform-id="fittlyf" data-popup-button={1}
                        style={{
                            "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                            "letterSpacing": "0.02857em",
                            "minWidth": "64px",
                            "fontWeight": "700",
                            "borderRadius": "0.5rem",
                            "lineHeight": "1.4",
                            "textAlign": "center",
                            "userSelect": "none",
                            "transition": "all 150ms ease-in 0s",
                            "minHeight": "1.8125rem",
                            "padding": "0.375rem 1.125rem",
                            "fontSize": "1.75rem",
                            "backgroundImage": "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
                            "color": "rgb(255, 255, 255)",
                        }}
                    >
                        Take Quiz
                    </button> 
                </div>
            </div>
        </>

    );
};

export default Paperform;
