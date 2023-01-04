
import fittlyf_pcos_hero from "../../Videos/Fittlyf_pcos_hero.mp4"


const Video = () => {
    return (
        <div id="Video" className="flex justify-center m-10
            xl:m-12
            2xl:m-16">
            <video controls className="w-10/12">
                <source src={fittlyf_pcos_hero} type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
        </div>
    )
}

export default Video
