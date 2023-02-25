import { useEffect } from "react";
const Paperform = () => {

    useEffect(() => {
        var script = document.createElement('script');
        script.src = "https://paperform.co/__embed.min.js";
        document.body.appendChild(script);
    }, [])


    return (
        <>

            <div id="phone-verification" className="flex justify-center items-center bg-fittlyf-background bg-no-repeat bg-bottom bg-[#F0E9FF]
                md:h-screen
            ">
                <div data-paperform-id="fittlyf" className="w-full"></div>
            </div>
        </>

    );
};

export default Paperform;
