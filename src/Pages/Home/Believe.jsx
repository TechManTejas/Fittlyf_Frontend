import mission from "../../Images/MissionNew.png"

const Believe = () => {
    return (
        <div id="Believe" className="" style = {{color: "#818b7e", background: "#f2efeb", fontFamily: "Maharlika"}}>
            <div className="">
                <h1 className=" mt-8 text-5xl tracking-normal text-center p-3
                sm:mt-10
                md:mt-12 md:text-4xl
                lg:mt-16
            ">The fittlyf mission</h1>

                <p className="text-md text-left p-3
                md:text-3xl
            ">
                    Fittlyf lives to provide the best and most innovative solution to women's health problems.
                </p>
            </div>
            
            <div className="flex justify-center">
                <img className="w-2/3" src={mission}></img>
            </div>
            
        </div>
    )
}

export default Believe
