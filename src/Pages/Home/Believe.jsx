const Believe = () => {
    return (
        <div id="Believe">

            <h1 className="text-center mt-8 font-bold font-serif text-3xl tracking-normal
                sm:mt-10
                md:mt-12 md:text-4xl
                lg:mt-16
            ">We Believe</h1>
            
            <p className="mt-6 text-2xl text-center mx-4
                md:text-3xl
            ">
                We believe in building innovative products and solutions for women one problem at a time.
            </p>

            <div className="flex items-center justify-center">
                <div className="my-10 flex items-center justify-center flex-col
                    md:my-20
                ">

                    <div className="md:grid md:grid-cols-2 md:flex-wrap-reverse">
                        <div className="p-16 bg-[#FFF7F3] flex flex-col items-start justify-center text-2xl">
                            <p className="max-w-[620px]">
                                “Got my first period after 11 months. Had been diagnosed at a very early age and tried everything. Finally tried YOSHA, first period after 40 days of taking it. Very happy with the results.”
                            </p>
                            <h3 className="mt-10 font-semibold text-2xl">-Shambhavi, 27</h3>
                        </div>
                        <img src="b1.png" alt=""/>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:flex-wrap">
                        <img src="b2.png" alt="" />
                        <div className="p-16 bg-[#FFF7F3] flex flex-col items-start justify-center text-2xl">
                            <p className="max-w-[620px]">
                                “Got my first PMS cramp and hoping to have my period in the next 3 days after 4 months. Very hopeful and happy today.”
                            </p>
                            <h3 className="mt-10 font-semibold text-2xl">-Sheena, 24</h3>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Believe
