import mission from "../../Images/MissionNew.png"

const Believe = () => {
    return (
        <div className="lg:flex lg:justify-center " style = {{color: "#818b7e", background: "#f2efeb", fontFamily: "Maharlika"}}>
            <div className="mb-10 
                lg:w-6/12 
                xl:w-[35vw]
                md:m-3 
            ">
                <h1 className=" text-6xl tracking-normal text-center p-2 md:py-4
                sm:mt-10 sm:text-6xl sm:text-left
                md:mt-12  
                lg:mt-16
                xl:text-7xl
            ">The Fittlyf mission</h1>

                <p className="text-lg text-left px-3 py-2
                    sm:text-3xl
                ">
                    Fittlyf lives to provide the best and most innovative solution to women's health problems.
                </p>
            </div>
            
            <div className="flex justify-center lg:w-4/12">
                <img className="w-2/3 lg:mt-24
                    sm:w-1/2
                    lg:w-7/12
                " src={mission}></img>
            </div>
            
        </div>
    )
}

export default Believe
