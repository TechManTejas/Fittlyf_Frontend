import { VideoRender } from "./VideoRender";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

        <div className="flex xl:items-center xl:justify-center mx-4 overflow-x-auto">
          {/* <div
            onClick={() => setsw(true)}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96" src="Card.png" alt="" />
            <p className="w-96"></p>
          </div> */}

          <div
            onClick={() => setsw(true)}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96" src="Card2.png" alt="" />
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

      {/* <Carousel showThumbs={false} className="sm:hidden mx-4">
        <div>
          <div
            onClick={() => setsw(true)}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96" src="Card.png" alt="" />
            <p className="w-96"></p>
          </div>
        </div>
        <div>
          <div
            onClick={() => setsw(true)}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96" src="Card2.png" alt="" />
            <p className="w-96"></p>
          </div>
        </div>
        <div>
          <div
            onClick={() => setsw(true)}
            className="m-2 cursor-pointer
                            md:m-2
                            lg:m-6
                            xl:m-8
                        "
          >
            <img className="md:w-96" src="Card2.png" alt="" />
            <p className="w-96"></p>
          </div>
        </div>
      </Carousel> */}

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
              <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              />
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="ml-5">
                    <h3 className="font-semibold">Suchita Mehra</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80">
                  I've struggled with my PCOS symptoms and searched for answers.
                  With innumerable roadblocks and redundant solutions, I have
                  always been driven to create something absolutely authentic
                </p>
              </div>
            </div>

            <div className="m-6">
              <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              />
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="ml-5">
                    <h3 className="font-semibold">Suchita Mehra</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80">
                  I've struggled with my PCOS symptoms and searched for answers.
                  With innumerable roadblocks and redundant solutions, I have
                  always been driven to create something absolutely authentic
                </p>
              </div>
            </div>

            <div className="m-6">
              <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              />
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="ml-5">
                    <h3 className="font-semibold">Suchita Mehra</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80">
                  I've struggled with my PCOS symptoms and searched for answers.
                  With innumerable roadblocks and redundant solutions, I have
                  always been driven to create something absolutely authentic
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center xl:justify-center">
            <div className="m-6">
              <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              />
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="ml-5">
                    <h3 className="font-semibold">Suchita Mehra</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80">
                  I've struggled with my PCOS symptoms and searched for answers.
                  With innumerable roadblocks and redundant solutions, I have
                  always been driven to create something absolutely authentic
                </p>
              </div>
            </div>

            <div className="m-6">
              <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              />
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="ml-5">
                    <h3 className="font-semibold">Suchita Mehra</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80">
                  I've struggled with my PCOS symptoms and searched for answers.
                  With innumerable roadblocks and redundant solutions, I have
                  always been driven to create something absolutely authentic
                </p>
              </div>
            </div>

            <div className="m-6">
              <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              />
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="ml-5">
                    <h3 className="font-semibold">Suchita Mehra</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80">
                  I've struggled with my PCOS symptoms and searched for answers.
                  With innumerable roadblocks and redundant solutions, I have
                  always been driven to create something absolutely authentic
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center xl:justify-center">
            <div className="m-6">
              <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              />
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="ml-5">
                    <h3 className="font-semibold">Suchita Mehra</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80">
                  I've struggled with my PCOS symptoms and searched for answers.
                  With innumerable roadblocks and redundant solutions, I have
                  always been driven to create something absolutely authentic
                </p>
              </div>
            </div>

            <div className="m-6">
              <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              />
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="ml-5">
                    <h3 className="font-semibold">Suchita Mehra</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80">
                  I've struggled with my PCOS symptoms and searched for answers.
                  With innumerable roadblocks and redundant solutions, I have
                  always been driven to create something absolutely authentic
                </p>
              </div>
            </div>

            <div className="m-6">
              <img
                src="r1.png"
                alt=""
                className="relative top-20 left-6 w-32 -mt-20"
              />
              <div className="border rounded-xl px-10 py-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="ml-5">
                    <h3 className="font-semibold">Suchita Mehra</h3>
                    <div className="space-x-1">
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                      <i className="text-yellow-400 fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm w-80">
                  I've struggled with my PCOS symptoms and searched for answers.
                  With innumerable roadblocks and redundant solutions, I have
                  always been driven to create something absolutely authentic
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