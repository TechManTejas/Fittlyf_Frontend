import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { VideoRender } from "./VideoRender";
import Expert from "../../Images/Expert.jpg";

const Experts = () => {
  const [showvideo, setsw] = useState(false);

  return (
    <div id="Experts" className="my-36">
      <VideoRender showvideo={showvideo} setsw={setsw} />
      <h2
        className="my-8 text-center font-serif font-semibold text-2xl tracking-tighter
                md:my-12
                xl:my-16
            "
      >
        Our Experts
      </h2>

      <div className="hidden sm:flex items-center md:justify-center overflow-auto">
        <div className="lg:flex items-center justify-center mx-10">
          <img className="w-56 mx-2" src={Expert} alt="" />
          <div className="p-2 text-left">
            <h2 className="font-bold font-serif text-lg">Dr. Sneha keshwani</h2>
            <p className="mt-4 text-sm w-60">
              DDS, MD . Fertility Nutrition Specilist
            </p>
            {/* <p className="my-5 text-sm w-60">
              Yosha is made for women's health and wellness.
            </p> */}
            <button
              onClick={() => setsw("https://www.youtube.com/embed/dDjMpng8AKc")}
              className="px-16 py-3 text-sm font-bold border rounded-md border-black"
            >
              Watch Video
            </button>
          </div>
        </div>

        {/* <div className="lg:flex items-center justify-center mx-10">
                    <img className="w-56 mx-2" src="e2.png" alt="" />
                    <div className="p-2 text-left">
                        <h2 className="font-bold font-serif text-lg">Ms. Jasmine</h2>
                        <p className="mt-4 text-sm w-60">
                            Registered Dietician PCOS and Fertility Nutrition Specialist
                        </p>
                        <p className="my-5 text-sm w-60">
                            Yosha is made for women's health and wellness.
                        </p>
                        <button onClick={() => setsw("https://www.youtube.com/embed/dDjMpng8AKc")} className="px-16 py-3 text-sm font-bold border rounded-md border-black">
                            Watch Video
                        </button>
                    </div>
                </div> */}
      </div>

      <Carousel
        showThumbs={true}
        className="sm:hidden mx-10 my-3"
        thumbWidth={200}
      >
        <div>
          <div className="lg:flex items-center justify-center mx-10">
            <img className="w-56 mx-2" src={Expert} alt="" />
            <div className="p-2 text-left">
              <h2 className="font-bold font-serif text-lg">
                Dr. Sneha keshwani
              </h2>
              <p className="mt-4 text-sm w-60 mb-5">
                DDS, MD . Fertility Nutrition Specilist
              </p>
              {/* <p className="my-5 text-sm w-60">
                Yosha is made for women's health and wellness.
              </p> */}
              <button onClick={() => setsw("https://www.youtube.com/embed/dDjMpng8AKc")} className="mb-10 px-16 py-3 text-sm font-bold border rounded-md border-black">
                
                Watch Video
              </button> 
            </div>
          </div>
        </div>
        {/* <div>
                    <div className="lg:flex items-center justify-center mx-10">
                        <img className="w-56 mx-2" src="e2.png" alt="" />
                        <div className="p-2 text-left">
                            <h2 className="font-bold font-serif text-lg">Ms. Jasmine</h2>
                            <p className="mt-4 text-sm w-60">
                                Registered Dietician PCOS and Fertility Nutrition Specialist
                            </p>
                            <p className="my-5 text-sm w-60">
                                Yosha is made for women's health and wellness.
                            </p>
                            <button className="mb-10 px-16 py-3 text-sm font-bold border rounded-md border-black">
                                Watch Video
                            </button>
                        </div>
                    </div>
                </div> */}
      </Carousel>
    </div>
  );
};

export default Experts;
