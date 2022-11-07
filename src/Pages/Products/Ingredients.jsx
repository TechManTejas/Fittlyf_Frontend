const Ingredients = () => {
    return (
        <div id="Ingredients" className="flex flex-col text-left
            md:text-center
        ">
            <h1 className="font-bold font-serif text-2xl m-5">Ingredients</h1>

            <div className="md:flex md:text-center md:items-center md:justify-center
                grid grid-cols-2 text-left items-start justify-start
                sm:grid sm:grid-cols-3 sm:text-left
            ">

                <div className="flex flex-col max-w-[230px] m-6">
                    <div className="md:flex md:justify-center">
                        <img className="w-20" src="i1.png" alt="" />
                    </div>
                    <h3 className="font-medium text-xl my-3">Inositol</h3>
                    <p className="text-sm">Inositol restores Hormone Balance and Helps in reducing Cyst in ovaries</p>
                </div>

                <div className="flex flex-col max-w-[230px] m-6">
                    <div className="md:flex md:justify-center">
                        <img className="w-20" src="i2.png" alt="" />
                    </div>
                    <h3 className="font-medium text-xl my-3">Shatavari</h3>
                    <p className="text-sm">Inositol restores Hormone Balance and Helps in reducing Cyst in ovaries</p>
                </div>

                <div className="flex flex-col max-w-[230px] m-6">
                    <div className="md:flex md:justify-center">
                        <img className="w-20" src="i3.png" alt="" />
                    </div>
                    <h3 className="font-medium text-xl my-3">Manjishtha</h3>
                    <p className="text-sm">Inositol restores Hormone Balance and Helps in reducing Cyst in ovaries</p>
                </div>

                <div className="flex flex-col max-w-[230px] m-6">
                    <div className="md:flex md:justify-center">
                        <img className="w-20" src="i4.png" alt="" />
                    </div>
                    <h3 className="font-medium text-xl my-3">Ashoka</h3>
                    <p className="text-sm">Inositol restores Hormone Balance and Helps in reducing Cyst in ovaries</p>
                </div>

                <div className="flex flex-col max-w-[230px] m-6">
                    <div className="md:flex md:justify-center">
                        <img className="w-20" src="i5.png" alt="" />
                    </div>
                    <h3 className="font-medium text-xl my-3">Ashwagandha</h3>
                    <p className="text-sm">Inositol restores Hormone Balance and Helps in reducing Cyst in ovaries</p>
                </div>

            </div>
        </div>
    )
}

export default Ingredients