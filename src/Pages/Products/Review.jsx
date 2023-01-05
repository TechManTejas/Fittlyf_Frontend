import { VideoRender } from "./VideoRender";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card1 from "../../Images/test1.png"
import Card2 from "../../Images/test2.png"

const Review = () => {
  const [showvideo, setsw] = useState(false);

  return (
    <div id="Review">
      <VideoRender showvideo={showvideo} setsw={setsw} />
      <div>
        <h2
          className="my-8 text-center font-serif font-semibold text-2xl tracking-tighter
                md:my-12
                xl:my-16
                "
        >
          Customer Stories
        </h2>

        <div className="hidden md:flex md:items-center md:justify-center mx-4 overflow-x-auto">
          <div
            onClick={() => setsw("https://www.youtube.com/embed/qPLEq5qYezg")}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96 rounded-3xl shadow-xl" src={Card1} alt="" />
            <p className="w-96"></p>
          </div>

          <div
            onClick={() => {
              setsw("https://www.youtube.com/embed/qPLEq5qYezg");
            }}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96 rounded-3xl shadow-xl" src={Card2} alt="" />
            <p className="w-96"></p>
          </div>

          {/* <div
            onClick={() => setsw(true)}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96" src="Card2.png" alt="" />
            <p className="w-96"></p>
          </div> */}
        </div>
      </div>

      <Carousel showThumbs={false} className="md:hidden mx-4">
      <div
            onClick={() => setsw("https://www.youtube.com/embed/qPLEq5qYezg")}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96 rounded-3xl shadow-xl" src={Card1} alt="" />
            <p className="w-96"></p>
          </div>

          <div
            onClick={() => {
              setsw("https://www.youtube.com/embed/qPLEq5qYezg");
            }}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96 rounded-3xl shadow-xl" src={Card2} alt="" />
            <p className="w-96"></p>
          </div>
      </Carousel>

      <div className="flex flex-col mx-8-4">
        <h2
          className="my-8 text-center font-serif font-semibold text-2xl tracking-tighter
                md:my-12
                xl:my-16
            "
        >
          Reviews
        </h2>

        <div className="overflow-auto">
          <div
            className="flex items-center xl:justify-center
                    "
          >
            <div className="m-6">
              {/* <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              /> */}
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center mb-4 ">
                  <div className=" w-full flex  items-start flex-col justify-center">
                    <h3 className="font-semibold">Shambhavi, 27</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80 h-20">
                  Got my first period after 11 months. Had been diagnosed at a
                  very early age and tried everything. Finally tried YOSHA,
                  first period after 40 days of taking it. Very happy with the
                  results.
                </p>
              </div>
            </div>

            <div className="m-6">
              {/* <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              /> */}
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center mb-4 ">
                  <div className=" w-full flex items-start flex-col justify-center ">
                    <h3 className="font-semibold">Profi, Mother to 15 YO</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80 h-20">
                  My daughter finally started losing weight and having regular
                  periods after 2 years of PCOD. Would definitely recommend it.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center xl:justify-center">
            <div className="m-6">
              {/* <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              /> */}
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center mb-4 ">
                  <div className=" w-full flex  items-start flex-col justify-center">
                    <h3 className="font-semibold">Sheena, 24</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80 h-20">
                  Got my first PMS cramp and hoping to have my period in the
                  next 3 days after 4 months. Very hopeful and happy today.
                </p>
              </div>
            </div>

            <div className="m-6">
              {/* <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              /> */}
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center mb-4 ">
                  <div className=" w-full flex  items-start flex-col justify-center">
                    <h3 className="font-semibold">Ayushi, 29</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80 h-20 ">
                  Good medicine… no side effects and getting my periods
                  consistently since 3 months now.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center sm:hidden">See all {">"} </div>
      </div>
    </div>
  );
};

export default Review;
