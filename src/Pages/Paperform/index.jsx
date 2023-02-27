import { useEffect } from "react";
import PaperformButton from "../../Images/paperformbutton.png"

const Paperform = () => {

    useEffect(() => {
        var script = document.createElement('script');
        script.src = "https://paperform.co/__embed.min.js";
        document.body.appendChild(script);
    }, [])


    return (
        <>
            <div className="flex justify-center items-center bg-fittlyf-background bg-no-repeat bg-bottom bg-[#F0E9FF]
                h-screen
            ">
                <button data-paperform-id="fittlyf" data-popup-button={1}>
                    <img src={PaperformButton}/>
                </button>
            </div>
        </>

    );
};

export default Paperform;
