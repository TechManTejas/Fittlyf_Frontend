import mission from "../../Images/MissionNew.png"

const Believe = () => {
    return (
        <div id="Believe" style = {{color: "#818b7e", background: "#f2efeb", fontFamily: "Maharlika"}}>
            <div>
                <h1 className=" text-5xl tracking-normal text-center p-3
                sm:mt-10
                md:mt-12 md:text-4xl
                lg:mt-16
            ">The Fittlyf mission</h1>

                <p className="text-lg text-left px-3 py-2
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
