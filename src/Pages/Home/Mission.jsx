import c1 from "../../Images/4.png"
import c2 from "../../Images/5.png"
import c3 from "../../Images/6.png"


const Mission = () => {
    return (
        <div id="Mission" className="text-center m-10
            xl:m-12
            2xl:m-16"
            style={{ color: "#818b7e", fontFamily: "Maharlika" }}
        >

            <h1 className="text-3xl ">What We Do</h1>

            {/* <p className="mt-4 text-lg font-medium 
                xl:text-xl xl:mt-8 xl:mx-40
                2xl:text-2xl 2xl:mt-14 2xl:mx-60
            ">
                Make every Indian women carefree to empower them in building a stronger India
            </p> */}

            <div className="justify-center items-center flex flex-col
                md:flex md:flex-row mt-8
            ">
                <div className="rounded-3xl px-8 py-4 max-w-xs
                    md:m-1 md:py-20
                    lg:m-3
                    xl:m-4
                    2xl:m-6
                ">
                    <div className="flex items-center justify-center">
                        <img src={c1} alt="" className="w-1/3"/>
                    </div>
                    <h3 className="font-normal mt-3 text-3xl">Backed by Science</h3>
                    {/* <p className="mt-3 text-sm
                        md:max-w-sm
                        md:min-w-sm
                    ">Sustainability is our main goal, that's why our packaging is recyclable.</p> */}
                </div>

                <div className="rounded-3xl border-gray-300 px-8 py-4 max-w-xs 
                    md:m-1 md:py-20
                    lg:m-3
                    xl:m-4
                    2xl:m-6
                ">
                    <div className="flex items-center justify-center">
                        <img src={c2} alt="" className="w-1/3" />
                    </div>
                    <h3 className="font-normal mt-3 text-3xl">Powered by Ayurveda</h3>
                    {/* <p className="mt-3 text-sm
                        md:max-w-sm
                        md:min-w-sm
                    ">Our natural ingredients will leave you feeling fresh and smooth.</p> */}
                </div>

                <div className="rounded-3xl  px-8 py-4 max-w-xs
                    md:m-1 md:py-20
                    lg:m-3
                    xl:m-4
                    2xl:m-6
                ">
                    <div className="flex items-center justify-center">
                        <img src={c3} alt="" className="w-1/3" />
                    </div>
                    <h3 className="font-normal mt-3 text-3xl">Made for Indian Women</h3>
                    {/* <p className="mt-3 text-sm
                        md:max-w-sm
                        md:min-w-sm
                    ">We donate 5% of our sales to the communities that we live & work in.</p> */}
                </div>
            </div>

        </div>
    )
}

export default Mission
