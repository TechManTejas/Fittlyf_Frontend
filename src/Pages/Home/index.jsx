import Footer from "../../Template/Footer";
import Navbar from "../../Template/Navbar";
import Believe from "./Believe";
import Join from "./Join";
import Main from "./Main";
import Mission from "./Mission";
import Product from "./Product";
import Video from "./Video";
import { Client } from "./Client";
import TherapEZImage from "../../Images/1.png"
import YoshaImage from "../../Images/2.png"
import FittlyfLogo from "../../Images/fittlyf_logo_icon_circle.png"
import Women from "../../Images/women.png"
import { useState } from "react";

const Home = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div id="Home">
      <section className="px-5">
        <div className="">
          <nav className="py-8 max-w-7xl mx-auto flex flex-col sm:flex-row w-full justify-between">
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <div className="mb-2 w-fit relative">
                  <img
                    src={FittlyfLogo}
                    alt="logo-upload"
                    className="h-12 mx-auto object-contain"
                  />
                </div>
                <a href="/" className="font-semibold text-2xl">
                  Fittlyf
                </a>
              </div>
              <div className="flex items-center sm:hidden">
                {/* Hamburger Menu */}
                <button
                  onClick={toggleDrawer}
                  className="p-2 text-gray-600 focus:outline-none"
                  aria-label="Toggle Menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden sm:flex text-base font-medium gap-8">
              {/* Desktop Navigation Links */}
              <a href="/products" className="hover:opacity-80">
                YOSHA
              </a>
              <a href="/therapez" className="hover:opacity-80">
                TherapEZ
              </a>
              <a href="/privacy-policy" className="hover:opacity-80">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="hover:opacity-80">
                Terms And Conditions
              </a>
            </div>

            {/* Drawer */}
            <div
              className={`fixed top-0 right-0 w-64 h-full bg-slate-100 z-50 shadow-lg transition-transform ease-in-out transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                } sm:hidden`}
            >
              <div className="p-8">
                <button
                  onClick={toggleDrawer}
                  className="absolute top-4 right-4 p-2 text-gray-600 focus:outline-none"
                  aria-label="Close Drawer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                <a href="/products" className="block py-2 hover:text-indigo-600">
                  YOSHA
                </a>
                <a href="/therapez" className="block py-2 hover:text-indigo-600">
                  TherapEZ
                </a>
                <a href="/privacy-policy" className="block py-2 hover:text-indigo-600">
                  Privacy Policy
                </a>
                <a href="/terms-and-conditions" className="block py-2 hover:text-indigo-600">
                  Terms And Conditions
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex gap-20 flex-col-reverse lg:flex-row max-w-7xl py-12 sm:pt-16 mx-auto">
          <div className="flex-1">
            <div className="">
              <h1 className="text-4xl md:text-7xl md:leading-none max-w-5xl font-bold">
                Transforming Health Together
              </h1>
            </div>
            <div>
              <p className="sm:leading-relaxed max-w-3xl text-2xl mt-4">
                Dedicated to redefining health and wellness in India. Our mission is
                to empower every individual to lead a vibrant and fulfilling life
              </p>
            </div>
            <div className="max-w-lg mt-12 text-left">
              <section className="relative">
                <h2 className="mb-3 text-2xl sm:text-2xl font-custom font-bold max-w-4xl md:leading-tight">
                  Empowerment, Recovery, and Wellness – All in One Place
                </h2>
                <div className="">
                  <form
                    className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-2 max-w-2xl gap-x-2 items-center flex-wrap"
                    action="/subscribe"
                    acceptCharset="UTF-8"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="authenticity_token"
                      defaultValue="jLN2ZNKPwP0eaqFQ9e2IESiKYY57iD5ZGENpmCtcMK0hES5CVGU65KWXl-21MO0NqMp-YPVs1R_f4CTTYLgDvw"
                      autoComplete="off"
                    />
                    <input
                      type="hidden"
                      name="iframe_id"
                      id="iframe_id"
                      defaultValue="afiql3it"
                      autoComplete="off"
                    />
                    <label className="sr-only" htmlFor="email">
                      Email address
                    </label>
                    <input
                      autoComplete="email"
                      required="required"
                      className="flex-auto rounded-lg border-0 bg-white px-6 py-3.5 shadow-sm ring-1 ring-black/10 focus:ring-2 w-full focus:ring-black/10 text-slate-900 text-base sm:text-xl sm:leading-6"
                      placeholder="Reach out on whatsapp"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <input
                      type="submit"
                      name="commit"
                      defaultValue="Send "
                      className="rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition focus-visible:outline focus-visible:outline-2 w-full focus-visible:outline-offset-2 focus-visible:outline-white"
                      style={{ backgroundColor: "#692cf3" }}
                      data-disable-with="Send "
                    />
                  </form>
                </div>
              </section>
            </div>
          </div>
          <div className="flex-1 relative sm:self-start shrink-0 flex justify-end">
            <div className="w-full">
              <div className="max-w-7xl mx-auto">
                <div
                  id="media-container"
                  className="w-full"
                >
                  <img
                    src={Women}
                    className="top-0 left-0 w-full h-full rounded-xl"
                    loading="lazy"
                    title="Hero Image"
                  />
                  {/* <img
                    src={Women}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    loading="lazy"
                    title="YouTube Video"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="px-5 relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl max-w-2xl mx-auto font-custom font-bold md:leading-tight">
              Comprehensive Approach to Wellness
            </h2>
            <p className="sm:leading-relaxed text-2xl max-w-2xl mx-auto"></p>
          </div>
          <div className="flex flex-col gap-28 mb-28">
            <div className="rounded-xl text-center lg:text-left items-center flex flex-col lg:flex-row gap-4 md:gap-12 lg:gap-20">
              <div className="flex relative justify-center order-first">
                <div className="group">
                  <img
                    loading="lazy"
                    src={YoshaImage}
                    alt="Women's Health Supplements that Nurture"
                    className="w-full max-w-2xl object-cover rounded-xl"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl sm:mb-4 font-semibold">
                  Women's Health Supplements that Nurture
                </h3>
                <p className="sm:leading-relaxed mt-2 sm:mt-4 opacity-70 max-w-2xl">
                  Our science-backed supplements are formulated to provide essential
                  nutrients that contribute to your overall well-being. Elevate your
                  health and vitality with our carefully curated range of products.
                </p>
              </div>
            </div>
            <div className="rounded-xl text-center lg:text-left items-center flex flex-col lg:flex-row gap-4 md:gap-12 lg:gap-20">
              <div className="flex relative justify-center lg:order-last">
                <div className="group">
                  <img
                    loading="lazy"
                    src={TherapEZImage}
                    alt="Transforming Physiotherapy Patient Recovery"
                    className="w-full max-w-2xl object-cover rounded-xl"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl sm:mb-4 font-semibold">
                  Transforming Physiotherapy Patient Recovery
                </h3>
                <p className="sm:leading-relaxed mt-2 sm:mt-4 opacity-70 max-w-2xl">
                  Our software tools provide physiotherapists and orthopedic
                  specialists with essential resources to optimize patient recovery.
                  Real-time tracking, automated reminders, and precise exercise
                  feedback ensure every patient's journey is efficient and effective.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2  lg:grid-cols-2  gap-12 sm:gap-16 mb-20"></div>
        </div>
      </section>
      <div
        className="w-full mx-auto mt-12 sm:mt-32"
        style={{ background: "rgba(207, 92, 246, 0.08)" }}
      >
        <div>
          <section className="py-16 px-5 relative overflow-hidden sm:pt-32">
            <div className="mx-auto items-center flex flex-col gap-2 sm:gap-4 max-w-4xl">
              <h2 className="text-3xl sm:text-5xl md:leading-tight text-center font-bold">
                Transforming Health Together
              </h2>
              <div className="mb-16 mt-8 text-center">
                <section className="relative">
                  <h2 className="mb-3 text-2xl sm:text-2xl font-custom font-bold max-w-4xl md:leading-tight">
                    Empowerment, Recovery, and Wellness – All in One Place
                  </h2>
                  <div className="">
                    <form
                      className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-2 max-w-2xl gap-x-2 items-center flex-wrap"
                      action="/subscribe"
                      acceptCharset="UTF-8"
                      method="post"
                    >
                      <input
                        type="hidden"
                        name="authenticity_token"
                        defaultValue="q0JSBTCSS0eyoS79c5liP-vKAX0wHxjQJOicQG4g860G4AojtnixXglcGEAzRAcja4oek77785bjS9ELJcTAvw"
                        autoComplete="off"
                      />
                      <input
                        type="hidden"
                        name="iframe_id"
                        id="iframe_id"
                        defaultValue="afiql3it"
                        autoComplete="off"
                      />
                      <label className="sr-only" htmlFor="email">
                        Email address
                      </label>
                      <input
                        autoComplete="email"
                        required="required"
                        className="flex-auto rounded-lg border-0 bg-white px-6 py-3.5 shadow-sm ring-1 ring-black/10 focus:ring-2 w-full focus:ring-black/10 text-slate-900 text-base sm:text-xl sm:leading-6"
                        placeholder="Reach out on whatsapp"
                        type="email"
                        name="email"
                        id="email"
                      />
                      <input
                        type="submit"
                        name="commit"
                        defaultValue="Send "
                        className="rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition focus-visible:outline focus-visible:outline-2 w-full focus-visible:outline-offset-2 focus-visible:outline-white"
                        style={{ backgroundColor: "#692cf3" }}
                        data-disable-with="Send "
                      />
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <footer className="max-w-6xl py-10 flex flex-col text-lg px-5 gap-3 sm:gap-8 mx-auto">
          <div className="text-sm">
            <div className="flex justify-center gap-4 py-2.5"></div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <span className="opacity-40">
                © 2023 © 2023 Track and Improve Patient Recovery All Rights Reserved.
                All rights reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

// const Home = () => {
//   return (
//     <div id="Home">
//       <Navbar />
//       <Main />
//       <Product />
//       <Video />
//       <Mission />
//       <Believe />
//       {/* <Join /> */}
//       <Client />
//       <Footer />
//     </div>
//   );
// };

export default Home;
