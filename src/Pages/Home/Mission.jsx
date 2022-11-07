const Mission = () => {
    return (
        <div id="Mission" className="text-center m-10
            xl:m-12
            2xl:m-16
        ">

            <h1 className="text-3xl font-bold">Our Mission</h1>

            <p className="mt-4 text-lg font-medium 
                xl:text-xl xl:mt-8 xl:mx-40
                2xl:text-2xl 2xl:mt-14 2xl:mx-60
            ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>

            <div className="mt-12 justify-center items-center flex flex-col
                md:flex md:flex-row md:
            ">
                <div className="rounded-3xl border border-gray-300 px-8 py-10 max-w-xs mb-4
                    md:m-1 md:py-20
                    lg:m-3
                    xl:m-4
                    2xl:m-6
                ">
                    <div className="flex items-center justify-center">
                        <img src="c1.avif" alt="" className="h-36"/>
                    </div>
                    <h3 className="font-normal mt-3 text-2xl">Eco-Conscious</h3>
                    <p className="mt-3 text-sm
                        md:max-w-sm
                        md:min-w-sm
                    ">Sustainability is our main goal, that's why our packaging is recyclable.</p>
                </div>

                <div className="rounded-3xl border border-gray-300 px-8 py-10 max-w-xs mb-4
                    md:m-1 md:py-20
                    lg:m-3
                    xl:m-4
                    2xl:m-6
                ">
                    <div className="flex items-center justify-center">
                        <img src="c2.avif" alt="" className="h-36" />
                    </div>
                    <h3 className="font-normal mt-3 text-2xl">Whole Ingredients</h3>
                    <p className="mt-3 text-sm
                        md:max-w-sm
                        md:min-w-sm
                    ">Our natural ingredients will leave you feeling fresh and smooth.</p>
                </div>

                <div className="rounded-3xl border border-gray-300 px-8 py-10 max-w-xs mb-4
                    md:m-1 md:py-20
                    lg:m-3
                    xl:m-4
                    2xl:m-6
                ">
                    <div className="flex items-center justify-center">
                        <img src="c3.avif" alt="" className="h-36" />
                    </div>
                    <h3 className="font-normal mt-3 text-2xl">Community Driven</h3>
                    <p className="mt-3 text-sm
                        md:max-w-sm
                        md:min-w-sm
                    ">We donate 5% of our sales to the communities that we live & work in.</p>
                </div>
            </div>

        </div>
    )
}

export default Mission
