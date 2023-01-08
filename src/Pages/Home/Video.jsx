
import fittlyf_pcos_hero from "../../Videos/Fittlyf_pcos_hero.mp4"


const Video = () => {
    return (
        <div id="Video" className="flex justify-center m-3
            lg:m-12
            xl:m-16
            2xl:m-24">
            <video controls autoPlay loop className="
                lg:w-10/12
                xl:w-8/12
            ">
                <source src={fittlyf_pcos_hero} type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
        </div>
    )
}

export default Video
