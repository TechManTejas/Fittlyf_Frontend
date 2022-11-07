const Product = () => {
    return (
        <div id="Product" className="py-20 bg-[#4e4d880a]">
            <h1 className="flex mb-8 flex-col text-center font-bold text-3xl
                md:text-4xl
            ">
                <span>Our favorite formulas that</span>
                <span>rejuvenate & soothe!</span>
            </h1>
            <div className="flex flex-wrap items-center justify-evenly">
                <img src="prod.png" alt="" className="w-auto h-[300px]
                    md:h-full
                " />
                <div className="text-left m-5">
                    <h2 className="font-serif text-4xl font-bold">YOSHA</h2>
                    <h3 className="font-medium text-2xl mt-3">PCOD PCOS Tablets</h3>
                    <p className="md:w-[500px] mt-4 text-xl">
                        Yosha is an ayurvedic tablet made for delayed and Irregular Periods due 
                        to PCOS PCOD
                    </p>
                    <button className="border rounded-md mt-10 p-2 pl-4
                        md:mt-20 bg-violet-700
                    ">
                        <span className="text-sm font-semibold tracking-normal text-white">CHECK IT OUT</span>
                        <i className="ml-8 mr-3 text-white fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product