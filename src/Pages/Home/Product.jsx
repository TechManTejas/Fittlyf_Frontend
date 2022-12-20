import { Link } from "react-router-dom";
import Prod from "../../Images/prod.png"

const Product = () => {
    return (
        <div id="Product" className="py-20 bg-[#4e4d880a]">
            <h1
                className="flex mb-8 flex-col text-center font-bold text-3xl
                md:text-4xl
            "
            >
                <span>Our favorite formulas that</span>
                <span>rejuvenate & soothe!</span>
            </h1>
            <div className="flex flex-wrap items-center justify-evenly">
                <img
                    src={Prod}
                    alt=""
                    className="w-auto h-[300px]
                    md:h-full
                "
                />
                <div className="text-left m-5">
                    <h2 className="font-serif text-4xl font-bold">YOSHA</h2>
                    <h3 className="font-medium text-2xl mt-3">PCOD PCOS Tablets</h3>
                    <p className="md:w-[500px] mt-4 text-xl">
                        Yosha is an ayurvedic tablet made for delayed and Irregular Periods
                        due to PCOS PCOD
                    </p>
                    <Link to="/products">
                        <button
                            className="border rounded-md mt-10 p-2 pl-4 bg-purple-600
                        md:mt-20
                    "
                        >
                            <span className="text-lg font-bold tracking-normal text-white">
                                CHECK IT OUT
                            </span>
                            <i className="ml-8 mr-3 text-white fa-solid fa-arrow-right"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;