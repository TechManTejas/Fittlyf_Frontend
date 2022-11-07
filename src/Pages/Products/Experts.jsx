const Experts = () => {
    return (
        <div id="Experts" className="mb-36">

            <h2 className="my-8 text-center font-serif font-semibold text-2xl tracking-tighter
                md:my-12
                xl:my-16
            ">Our Experts</h2>

            <div className="flex items-center md:justify-center overflow-auto">

                <div className="lg:flex items-center justify-center mr-8 ml-5">
                    <img className="w-56 mx-2" src="e1.png" alt="" />
                    <div className="p-2 text-left">
                        <h2 className="font-bold font-serif text-lg">Ms. Lakshmi</h2>
                        <p className="mt-4 text-sm w-60">Registered Dietician PCOS and Fertility Nutrition Specialist</p>
                        <p className="my-5 text-sm w-60">Yosha is made for women's health and wellness.</p>
                        <button className="px-16 py-3 text-sm font-bold border rounded-md border-black">Watch Video</button>
                    </div>
                </div>

                <div className="lg:flex items-center justify-center ml-8 mr-5">
                    <img className="w-56 mx-2" src="e2.png" alt="" />
                    <div className="p-2 text-left">
                        <h2 className="font-bold font-serif text-lg">Ms. Jasmine</h2>
                        <p className="mt-4 text-sm w-60">Registered Dietician PCOS and Fertility Nutrition Specialist</p>
                        <p className="my-5 text-sm w-60">Yosha is made for women's health and wellness.</p>
                        <button className="px-16 py-3 text-sm font-bold border rounded-md border-black">Watch Video</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experts
