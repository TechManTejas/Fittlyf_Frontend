const Join = () => {
    return (
        <div id="Join" className="text-center pb-28 pt-20 bg-[#7DA1BF]">
            <h1 className="font-bold font-serif text-3xl md:text-4xl text-[#111D27] tracking-tight">Celebrating the new Fit Life ;)</h1>
            <p className="mt-4 text-xl md:text-md">
                Join & be the first to know about new collections and exclusive offers
            </p>
            <div className="mt-16">
                <input 
                    type="email" 
                    name=""
                    className="p-2 w-80 bg-[#7DA1BF] border-black border placeholder:text-black" 
                    placeholder="EMAIL ID"
                />
                <button className="px-3 py-2 text-white bg-black">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Join
