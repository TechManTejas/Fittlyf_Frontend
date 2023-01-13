import HERO from "../../Images/HERO.JPG"

function Webinar() {
    return (
        <>
            <div>
                <div className="flex justify-center items-center bg-fittlyf-background bg-no-repeat bg-bottom bg-[#F0E9FF]
                    md:h-screen
                ">
                    <div className="border bg-white 
                        lg:p-8 lg:px-14 lg:ml-24
                        md:p-6 md:px-8 md:ml-24
                        md:flex md:flex-row md:rounded-3xl
                        flex flex-col justify-center items-center
                        p-5
                    "
                        style={{ boxShadow:"rgba(100, 100, 111, 0.8) 0px 7px 29px 0px"}}
                    >
                        <div className="flex justify-center items-center 
                            lg:w-72 lg:-ml-40
                            md:w-64 md:-ml-32
                            w-[280px]
                        ">
                            <img src={HERO} className="md:rounded-3xl"></img>
                        </div>
                        <div className="flex flex-col justify-center items-center 
                            lg:ml-14
                            md:ml-8
                        ">
                            <div className="font-medium text-2xl 
                                lg:m-2.5 lg:my-5 lg:mt-10
                                md:m-2 md:my-4 md:mt-8
                                m-2 my-3 mt-8
                            " 
                                style={{fontFamily:"Maharlika"}}>REGISTER FOR WEBINAR</div>
                            <div>
                                <div className="justify-center items-center
                                    md:flex
                                ">
                                    <div className="
                                        lg:m-2.5
                                        md:m-2
                                        m-5
                                    ">
                                        <input className="rounded 
                                            lg:w-64
                                            md:w-52
                                            w-72
                                        " type="text" placeholder="Name"></input>
                                    </div>
                                    <div className="
                                        lg:m-2.5
                                        md:m-2
                                        m-5
                                    ">
                                        <input className="rounded 
                                            lg:w-64
                                            md:w-52
                                            w-72
                                        " type="text" placeholder="Mail"></input>
                                    </div>
                                </div>
                                <div className="justify-center items-center
                                    md:flex
                                ">
                                    <div className="
                                        lg:m-2.5
                                        md:m-2
                                        m-5
                                    ">
                                        <input className="rounded 
                                            lg:w-64
                                            md:w-52
                                            w-72
                                        " type="text" placeholder="Phone"></input>
                                    </div>
                                    <div className="
                                        lg:m-2.5
                                        md:m-2
                                        m-5
                                    ">
                                        <select className="rounded 
                                            lg:w-64
                                            md:w-52
                                            w-72
                                        ">
                                            <option disabled selected>Choose Your Class</option>
                                            <option>Class 1</option>
                                            <option>Class 2</option>
                                            <option>Class 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <textarea rows={3} className="rounded w-full
                                        lg:m-2.5
                                        md:m-2
                                        mx-5
                                    " type="text" placeholder="Message (Optional)" style={{resize:"none"}}></textarea>
                                </div>
                            </div>
                            <div className="flex justify-center text-white ">
                                <button className="rounded-lg border bg-[#8d77ab]
                                    lg:px-10 lg:py-3 lg:m-2.5 lg:my-5
                                    md:px-7 md:py-2 md:m-2 md:my-4  
                                    px-10 py-3 m-3 my-6
                                ">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Webinar
