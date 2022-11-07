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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex items-center justify-center">
                <div className="my-10 flex items-center justify-center flex-col
                    md:my-20
                ">

                    <div className="md:grid md:grid-cols-2 flex flex-col-reverse">
                        <div className="p-16 bg-[#FFF7F3] flex flex-col items-start justify-center text-2xl">
                            <p className="max-w-[620px]">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.”
                            </p>
                            <h3 className="mt-10 font-semibold text-2xl">-Preeti Sinha</h3>
                        </div>
                        <img src="b1.png" alt=""/>
                    </div>

                    <div className="md:grid md:grid-cols-2">
                        <img src="b2.png" alt="" />
                        <div className="p-16 bg-[#FFF7F3] flex flex-col items-start justify-center text-2xl">
                            <p className="max-w-[620px]">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.”
                            </p>
                            <h3 className="mt-10 font-semibold text-2xl">-Preeti Sinha</h3>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Believe
