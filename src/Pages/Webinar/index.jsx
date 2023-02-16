import HERO from "../../Images/HERO.JPG";
import { useRef } from "react";
import { sendWebinarData } from "../../APIs/WebinarAPI";
import { successNotify } from "../../Components/Notify";
import { notify } from "../../Components/Notify";
import { ValidateAllWebinar } from "../../Validator";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Webinar() {

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== "hyderabad") {
      navigate("/");
    }
  }, []);

  const name = useRef();
  const phoneNumber = useRef();
  const email = useRef();

  const sendData = async () => {
    const data = {
      name: name.current.value,
      phoneNumber: phoneNumber.current.value,
      email: email.current.value,
      city: id,
    };

    const validate = ValidateAllWebinar(
      name.current.value,
      email.current.value,
      phoneNumber.current.value
    );

    if (validate !== "none") {
      notify(validate);
      return;
    }

    await sendWebinarData(data).then((res) => {
      if (res.status === 200) {
        successNotify("Data Saved Successfully");
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else notify("Try Again Later");
    });
  };

  return (
    <>
      <div className="font-arsenal">
        <div
          className="flex justify-center items-center bg-fittlyf-background bg-no-repeat bg-bottom bg-[#F0E9FF]
                    md:h-screen
                "
        >
          <div
            className="border bg-white 
                        lg:p-8 lg:px-14 lg:ml-24
                        md:p-6 md:px-8 md:ml-24
                        md:flex md:flex-row md:rounded-3xl
                        flex flex-col justify-center items-center
                        p-5
                    "
            style={{ boxShadow: "rgba(100, 100, 111, 0.8) 0px 7px 29px 0px" }}
          >
            <div
              className="flex justify-center items-center 
                            lg:w-72 lg:-ml-40
                            md:w-64 md:-ml-32
                            w-[280px]
                        "
            >
              <img src={HERO} className="md:rounded-3xl"></img>
            </div>
            <div
              className="flex flex-col justify-center items-center 
                            lg:ml-14
                            md:ml-8
                        "
            >
              <div
                className="text-2xl 
                                lg:m-2.5 lg:mt-8
                                md:m-2 md:my-4 md:mt-6
                                m-2 my-3 mt-8
                            "
              // style={{ fontFamily: "Maharlika" }}
              >
                REGISTER FOR WEBINAR
              </div>
              <div
                className="
                                lg:mb-4
                                md:mb-2
                                mb-4
                            "
              // style={{ fontFamily: "Maharlika" }}
              >
                I was just told to add a random subtext below this title
              </div>
              <div>
                <div
                  className="justify-center items-center
                                    md:flex
                                "
                >
                  <div
                    className="
                                        lg:m-2.5
                                        md:m-2
                                        m-5
                                    "
                  >
                    <input
                      className="rounded 
                                            lg:w-72
                                            w-72
                                        "
                      type="text"
                      placeholder="Name"
                      ref={name}
                    ></input>
                  </div>
                </div>
                <div
                  className="justify-center items-center
                                    md:flex
                                "
                >
                  <div
                    className="
                                        lg:m-2.5
                                        md:m-2
                                        m-5
                                    "
                  >
                    <input
                      className="rounded 
                                            lg:w-72
                                            w-72
                                        "
                      type="text"
                      placeholder="Email"
                      ref={email}
                    ></input>
                  </div>
                </div>
                <div
                  className="justify-center items-center
                                    md:flex
                                "
                >
                  <div
                    className="
                                        lg:m-2.5
                                        md:m-2
                                        m-5
                                    "
                  >
                    <input
                      className="rounded 
                                            lg:w-72
                                            w-72
                                        "
                      type="text"
                      placeholder="Phone"
                      ref={phoneNumber}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex justify-center text-white ">
                <button
                  onClick={() => sendData()}
                  className="rounded-lg border bg-[#8d77ab]
                                    lg:px-10 lg:py-3 lg:m-2.5 lg:my-5
                                    md:px-7 md:py-2 md:m-2 md:my-4  
                                    px-10 py-3 m-3 my-6
                                "
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webinar;
