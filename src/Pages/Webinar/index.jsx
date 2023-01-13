import HERO from "../../Images/HERO.JPG"

function Webinar() {
    return (
        <>
            <div>
                <div className="flex justify-center items-center h-screen bg-fittlyf-background bg-no-repeat bg-center  bg-[#F0E9FF]">
                    <div className="flex border rounded-3xl bg-white p-8 px-14"
                        style={{ boxShadow:"rgba(100, 100, 111, 0.8) 0px 7px 29px 0px"}}
                    >
                        <div className="flex justify-center items-center w-72 -ml-40">
                            <img src={HERO} className="rounded-3xl"></img>
                        </div>
                        <div className="flex flex-col justify-center items-center ml-14">
                            <div className="font-medium text-2xl m-2.5 my-5 mt-10" style={{fontFamily:"Maharlika"}}>MAKE AN APPOINTMENT</div>
                            <div>
                                <div className="flex justify-center items-center">
                                    <div className="m-2.5">
                                        <input className="rounded w-64" type="text" placeholder="Name"></input>
                                    </div>
                                    <div className="m-2.5">
                                        <input className="rounded w-64" type="text" placeholder="Mail"></input>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="m-2.5">
                                        <input className="rounded w-64" type="text" placeholder="Phone"></input>
                                    </div>
                                    <div className="m-2.5">
                                        <select className="rounded w-64">
                                            <option disabled selected>Choose Your Class</option>
                                            <option>Class 1</option>
                                            <option>Class 2</option>
                                            <option>Class 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <textarea rows={4} className="m-2.5 rounded w-full" type="text" placeholder="Message" style={{resize:"none"}}></textarea>
                                </div>
                            </div>
                            <div className="flex justify-center text-white ">
                                <button className="px-10 py-3 m-2.5 my-5 rounded-lg border bg-[#8d77ab]">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Webinar
