import React, { useRef, useState } from "react";
import { sendOrderPage1Data } from "../../APIs/OrdersAPI";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/reducer";
import { ValidateAll } from "../../Validator";
import { Link } from "react-router-dom";
import { states } from "../../APIs/States";
import { Refs } from "../../Hooks/Refs";
import {
  page1SetInitialValue,
  resolveResponse,
} from "../../APIs/SetValueFunctions";
import { notify } from "../../Components/Notify";

const C1 = ({ pack }) => {
  //Inital States
  const [showSummary, setShowSummary] = useState(false);
  const [loader, setloader] = useState(false);
  const [{ page1Data, packNumber }, dispatch] = useStateValue();
  const navigate = useNavigate();

  // Set Initial Value to Input Tags
  useEffect(() => {
    page1SetInitialValue(page1Data);
  }, []);

  const orderPage1Data = async () => {
    setloader(true);

    const validate = ValidateAll();
    if (validate !== "none") {
      setloader(false);
      notify(validate);
      return;
    }

    const data = {
      emailPhoneNumber: Refs.emailPhoneNumber.current.value,
      emailMe: Refs.emailMe.current.checked,
      country: Refs.country.current.value,
      firstName: Refs.firstName.current.value,
      lastName: Refs.lastName.current.value,
      address: Refs.address.current.value,
      apartmentAndOthers: Refs.apartmentAndOthers.current.value,
      city: Refs.city.current.value,
      state: Refs.state.current.value,
      zip: Refs.zip.current.value,
      saveThis: Refs.saveThis.current.checked,
      duration: pack.period,
      noOfBottles: pack.bottle,
      noOfTablets: pack.tablets,
      Price: pack.price,
      packNumber: packNumber,
      PhoneNumber: Refs.PhoneNumber.current.value,
    };

    dispatch({
      type: actionType.SET_PAGE1,
      page1Data: data,
    });

    let response = await sendOrderPage1Data(data);

    console.log(response);

    if (response === "ERR_BAD_RESPONSE") {
      notify("Server not Responding, Try After Some Time...");
      setloader(false);
    } else if (response === "ERR_NETWORK") {
      notify("Cannot connect to network");
      setloader(false);
    } else if (response.data.code === "success") {
      dispatch({
        type: actionType.SET_ID,
        id: response.data.data.data.id,
      });
      navigate("/payment");
    }

    // navigate("/payment");
  };

  return (
    <div className="flex justify-end box:w-[54vw]">
      <div className="w-screen sm:w-[36rem] h-screen flex flex-col justify-between px-4 sm:px-0 box:mx-14 box:ml-4">
        <div>
          <div>
            <h1 className="font-normal text-3xl mb-4 mt-3 box:mt-16">
              fittlyf
            </h1>

            <div className="flex flex-col box:hidden bg-gray-100">
              <div className="flex justify-between items-center py-4 px-2">
                <button
                  onClick={() => {
                    setShowSummary(!showSummary);
                  }}
                >
                  <div className="text-red-500 text-sm">
                    <i className="fa-solid fa-cart-shopping mr-2"></i>Show order
                    summary<i className="ml-2 fa-solid fa-chevron-down"></i>
                  </div>
                </button>
                <div>
                  <span className="font-semibold text-lg">₹499.00</span>
                </div>
              </div>

              {showSummary && (
                <div>
                  <hr className="bg-gray-300" />
                  <div className="p-2">
                    <div className="flex text-sm space-x-3 justify-between items-center my-5">
                      <img
                        className="w-20"
                        src="https://cdn.shopify.com/s/files/1/0618/6765/5415/products/1_small.png?v=1654409191"
                        alt=""
                      />
                      <div className="flex xl:w-96 flex-col">
                        <h4 className="font-semibold">
                          YOSHA PCOS PCOD tablets | Delayed Periods | Ayurvedic
                        </h4>
                        <p className="my-2">{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p>
                      </div>
                      <span className="font-semibold">₹499.00</span>
                    </div>

                    <hr className="bg-gray-300" />

                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="my-5">Subtotal</h5>
                        <h5 className="my-5">Shipping</h5>
                      </div>
                      <div className="text-right">
                        <h5 className="font-semibold my-4">₹499.00</h5>
                        <h5 className="font-semibold my-4">Free</h5>
                      </div>
                    </div>

                    <hr className="bg-gray-300" />

                    <div className="flex items-center justify-between my-5">
                      <div>
                        <div className="font-semibold">Total</div>
                        <div className="text-xs">Including ₹76.12 in taxes</div>
                      </div>
                      <div>
                        <span className="text-sm">INR</span>
                        <span className="font-semibold text-2xl">₹499.00</span>
                      </div>
                    </div>
                  </div>
                  <hr className="bg-gray-300" />
                </div>
              )}
            </div>

            <p className="text-sm my-5">
              <span className="text-red-500">Cart</span> &gt;{" "}
              <span>Information</span> &gt;{" "}
              <span className="text-gray-500">Shipping</span> &gt;{" "}
              <span className="text-gray-500">Payment</span>
            </p>
          </div>
          <h2 className="font-normal text-lg my-3">Contact Information</h2>
          <div>
            <input
              ref={Refs.emailPhoneNumber}
              className="  w-[100%] focus:outline-red-500 border rounded-md px-4 py-3 text-sm"
              placeholder="Email"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center gap-3 mt-3 border border-gray-500 rounded-md px-4 py-3">
            <img
              className="w-12 h-8"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"
            ></img>
            <div>+91</div>
            <input
              ref={Refs.PhoneNumber}
              className=" w-[100%] focus:outline-red-500 border-t-0 border-x-0 text-sm"
              placeholder="Mobile phone number"
              type="tel"
              name=""
              id=""
            />
          </div>
          <div className="space-x-3 my-3 text-sm">
            <input ref={Refs.emailMe} type="checkbox" name="" id="" />
            <span>Email me with news and offers</span>
          </div>

          <h2 className="font-normal text-lg my-2 mt-8">Shipping address</h2>

          <select
            ref={Refs.country}
            name=""
            id=""
            className="px-3 my-2  w-[100%] py-3 bg-white border rounded-lg text-sm"
          >
            <option value="India">India</option>
          </select>

          <div className="sm:flex">
            <input
              ref={Refs.firstName}
              className="focus:outline-red-500 sm:mr-2 my-2 w-full border rounded-md px-4 py-3 text-sm"
              placeholder="First Name"
              type="text"
              name=""
              id=""
            />
            <input
              ref={Refs.lastName}
              className=" focus:outline-red-500 sm:ml-2 my-2 w-full border rounded-md px-4 py-3 text-sm"
              placeholder="Last Name"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <input
              ref={Refs.address}
              className=" focus:outline-red-500 w-full my-2 border rounded-md px-4 py-3 text-sm"
              placeholder="Address"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <input
              ref={Refs.apartmentAndOthers}
              className=" focus:outline-red-500 my-2 w-full border rounded-md px-4 py-3 text-sm"
              placeholder="Apartment, suite, etc. (optional)"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="sm:flex">
            <input
              ref={Refs.city}
              className="focus:outline-red-500 my-2 w-full border rounded-md px-4 py-3 text-sm"
              placeholder="City"
              type="text"
              name=""
              id=""
            />
            <select
              ref={Refs.state}
              name=""
              id=""
              className="w-full px-3 my-2 py-3 sm:mx-4 bg-white border rounded-md text-sm"
            >
              <option value="-">State</option>
              {states.map((state) => (
                <>
                  <option key={state} value={state}>
                    {state}
                  </option>
                </>
              ))}
            </select>
            <input
              ref={Refs.zip}
              className="focus:outline-red-500 my-2 w-full border rounded-md px-4 py-3 text-sm"
              placeholder="PIN code"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="space-x-3 my-4 text-sm">
            <input ref={Refs.saveThis} type="checkbox" name="" id="" />
            <span>Save this information for next time</span>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:flex mb-10 sm:justify-between sm:items-center">
            <div className=" sm:my-0 flex justify-center">
              <Link to="/products" className="text-sm text-red-500">
                &lt; Return to Product
              </Link>
            </div>

            <div className="mb-5 sm:my-0">
              {loader ? (
                <button
                className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full"
              >
                <div>Loading...</div>
              </button>
              ) : (
                <button
                  onClick={() => orderPage1Data()}
                  className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full"
                >
                  <div>Continue to Shipping</div>
                </button>
              )}
            </div>
          </div>
        </div>

        <div>
          <hr className="bg-gray-300" />

          <div className="text-gray-500 my-4 text-xs">
            All Rights Reserved fittlyf
          </div>
        </div>
      </div>
    </div>
  );
};

const C2 = ({ pack }) => {
  return (
    <div className="bg-gray-50">
      <div className="h-screen w-[46vw]">
        <div className="p-12 max-w-[510px]">
          <div className="flex text-sm space-x-3 justify-center items-center my-5">
            <img
              className="w-20"
              src="https://cdn.shopify.com/s/files/1/0618/6765/5415/products/1_small.png?v=1654409191"
              alt=""
            />
            <div className="flex xl:w-96 flex-col">
              <h4 className="font-semibold">
                YOSHA PCOS PCOD tablets | Delayed Periods | Ayurvedic
              </h4>
              <p className="my-2">{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p>
            </div>
            <span className="font-semibold">{`₹${pack.price}`}</span>
          </div>

          <hr className="bg-gray-300" />

          <div className="flex items-center justify-between">
            <div>
              <h5 className="my-5">Subtotal</h5>
              <h5 className="my-5">Shipping</h5>
            </div>
            <div className="text-right">
              <h5 className="font-semibold my-4">{`₹${pack.price}`}</h5>
              <h5 className="font-semibold my-4">Free</h5>
            </div>
          </div>

          <hr className="bg-gray-300" />

          <div className="flex items-center justify-between my-5">
            <div>
              <div className="font-semibold">Total</div>
              <div className="text-xs">Including ₹76.12 in taxes</div>
            </div>
            <div>
              <span className="text-sm">INR</span>
              <span className="font-semibold text-2xl">{`₹${pack.price}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  const [{ pack }, dispatch] = useStateValue();

  const navigate = useNavigate();

  useEffect(() => {
    if (!pack) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div id="Form">
        <div className="flex items-center justify-center">
          <C1 pack={pack} />
          <div className="border-r h-screen hidden box:block bg-gray-300"></div>
          <div className="hidden box:block">
            <C2 pack={pack} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
