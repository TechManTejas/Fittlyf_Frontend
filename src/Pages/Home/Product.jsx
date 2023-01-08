import { Link } from "react-router-dom";
import Prod from "../../Images/product.JPG"

const Product = () => {
    return (
        <div id="Product" className="bg-[#88754d0a]
            py-5
            md:py-0 
        " 
        style={{ color: "#818b7e", background: "#f2efeb", fontFamily: "Maharlika" }}>
            <div className="flex flex-wrap items-center justify-center">
                <img src={Prod}
                    alt=""
                    className="object-cover w-11/12 mx-10
                    md:h-full
                    md:w-1/2
                    xl:w-1/3
                "
                />
                
                <div className="text-left m-3 font-serif" style={{color:"#818b7e", fontSize:"16px"}}>
                    <h1
                        className="flex mb-5 flex-col text-left font-serif font-light text-[35px]
                sm:text-5xl
                xl:text-6xl
                sm:mb-8
            "
                    >
                        <span >First Ayurcutical in India</span>
                        {/* <span>rejuvenate & soothe!</span> */}
                    </h1>
                    {/* <h2 className="font-serif text-4xl font-light">YOSHA</h2> */}
                    {/* <h3 className="font-medium text-2xl mt-3">PCOD PCOS Tablets</h3> */}
                    <p className="md:w-[500px] mt-4 text-lg
                        md:text-xl
                        xl:text-2xl
                    ">
                    We understand the needs of Indian women and understand just like you, your treatment needs to be advanced. We are the converging point where Science meets Ayurveda.
                    </p>
                    <p className="md:w-[500px] mt-4 text-lg
                        md:text-xl
                        xl:text-2xl
                    ">
                    With YOSHA we have brought 40:1 Inositol with the ancient science of Ayurveda. Myo-inositol and D-chiro-inositol at a ratio of 40:1 have been proven in research to improve PCOS/PCOD conditions.
                    </p>
                    <p className="md:w-[500px] mt-4 text-lg
                        md:text-xl
                        xl:text-2xl
                    ">
                    Using ayurveda to improve issues related to period to have high-impact results
                    </p>
                    <Link to="/products">
                        <div className="flex justify-center">
                        <button
                                className="border rounded-md mt-10 p-4 px-24 bg-white shadow-lg
                        md:mt-20 
                    " 
                        >
                            <span className="text-lg font-normal tracking-wide text-black ">
                                Learn More
                            </span>
                            {/* <i className="ml-8 mr-3 text-white fa-solid fa-arrow-right"></i> */}
                        </button>
                        </div>
                        
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;