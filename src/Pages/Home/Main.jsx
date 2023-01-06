import HomeImg from "../../Images/HeroImage.png"

import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div
      id="Main"
      className="bg-[#8d77ab] text-white items-center
            md:flex 
        "
    >
      <div
        className="text-left ml-4
                sm:ml-8
                lg:ml-10
                xl:ml-16
                2xl:ml-24
            "
      >
        <h1
          className="tracking-light pt-4 text-5xl
                    sm:pt-8 sm:text-4xl
                    lg:pt-12 lg:text-5xl
                    xl:pt-14 xl:text-6xl
                    2xl:pt-16 2xl:text-8xl
                "
          style={{ fontFamily: "Maharlika" }}
        >
          Women Health Done Right
        </h1>

        <p
          className=" tracking-wide mr-8 mt-6 
                    sm:mt-8 sm:text-md
                    lg:mt-12 lg:text-lg
                    xl:mt-14 xl:text-xl
                    2xl:mt-16 2xl:text-2xl
                "
          style={{ fontFamily: "Maharlika" }}
        >
          For Women - By Women
        </p>

        <Link to="/products">
          <button
            className="bg-white border-black rounded-lg px-4 py-2 font-bold text-[#200044] mt-6 text-sm shadow-2xl
                    sm:mt-8 sm:text-sm
                    lg:mt-12 lg:text-lg
                    xl:mt-14 xl:text-xl
                    2xl:mt-16
                "
            style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}
          >
            <span>CHECK IT OUT</span>
            <i className="ml-4 fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>

      <img
        src={HomeImg}
        loading="lazy"
        alt=""
        className="mr-4
                md:w-[60vw] md:mt-24
                lg:w-[65vw]
                xl:w-[70vw]
                2xl:w-[100vw]
            "
      />
    </div>
  );
};

export default Main;
//bg-[#4E4D88]
//from-[#8483d1] via-[#5a599e] to-[#343369]