const Main = () => {
    return (
        <div id="Main" className="bg-[#4E4D88] text-white items-center
            md:flex 
        ">
            <div className="text-left ml-4
                sm:ml-8
                lg:ml-10
                xl:ml-16
                2xl:ml-24
            ">

                <h1 className="font-bold tracking-light pt-4 text-4xl
                    sm:pt-8 sm:text-4xl
                    lg:pt-12 lg:text-5xl
                    xl:pt-14 xl:text-6xl
                    2xl:pt-16 2xl:text-8xl
                ">Women Health Done Right</h1>

                <p className=" tracking-wide mr-8 mt-6 
                    sm:mt-8 sm:text-md
                    lg:mt-12 lg:text-lg
                    xl:mt-14 xl:text-xl
                    2xl:mt-16 2xl:text-2xl
                ">
                    The modern woman's essential health and wellness destination, providing expert-led 
                    PCOS,PCOD, prenatal and postnatal medication, support, advice and more.
                </p>
                
                <button className="bg-white rounded-3xl px-6 py-4 font-bold text-[#200044] mt-6 text-xs
                    sm:mt-8 sm:text-xs
                    lg:mt-12 lg:text-md
                    xl:mt-14 xl:text-xl
                    2xl:mt-16
                ">
                    <span>CHECK IT OUT</span>
                    <i className="ml-4 fa-solid fa-arrow-right"></i>
                </button>
            </div>
            
            <img src="homeImg.png" alt="" className="mr-4
                md:w-[60vw] md:mt-24
                lg:w-[65vw]
                xl:w-[70vw]
                2xl:w-[100vw]
            "/>
        </div>
    )
}

export default Main
