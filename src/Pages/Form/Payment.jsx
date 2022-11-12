import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendOrderPage2Data } from "../../APIs/OrdersAPI";
import { useStateValue } from "../../Context/StateProvider";

const C1 = () => {
  const [showSummary, setShowSummary] = useState(true);

  const [{id}, dispatch] = useStateValue();
  const [showSummary, setShowSummary] = useState(true);
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const shipping = useRef();

  const orderPage2data = async () => {

    setloader(true);
    const data = {
      mode : shipping.current.checked,
      id : id
    };

    let response = await sendOrderPage2Data(data);

    console.log(response.data.code);

    if (response.data.code === "success") {
      navigate("/shipping");
      setloader(false);
    }
  };

  return (
    <div className="flex justify-end box:w-[54vw]">
      <div className="w-screen sm:max-w-[45rem]">
        <div className="h-screen mx-4 md:mx-14 flex flex-col  justify-between">
          <div>
            <div>
              <h1 className="font-normal text-3xl mb-4 mt-3 box:mt-16">
                fittlyf
              </h1>
              <div>Order id : {id}</div>
              <div className="flex flex-col box:hidden bg-gray-100">
                <div className="flex justify-between items-center py-4 px-2">
                  <button
                    onClick={() => {
                      setShowSummary(!showSummary);
                    }}
                  >
                    <div className="text-red-500 text-sm">
                      <i className="fa-solid fa-cart-shopping mr-2"></i>Show
                      order summary
                      <i className="ml-2 fa-solid fa-chevron-down"></i>
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
                            YOSHA PCOS PCOD tablets | Delayed Periods |
                            Ayurvedic
                          </h4>
                          <p className="my-2">
                            1 Month ₹ 499 1 bottle 60 tablets
                          </p>
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
                          <div className="text-xs">
                            Including ₹76.12 in taxes
                          </div>
                        </div>
                        <div>
                          <span className="text-sm">INR</span>
                          <span className="font-semibold text-2xl">
                            ₹499.00
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr className="bg-gray-300" />
                  </div>
                )}
              </div>

              <p className="text-sm my-5">
                <span className="text-red-500">Cart</span> &gt;{" "}
                <span className="text-red-500">Information</span> &gt;{" "}
                <span className="text-gray-500">Shipping</span> &gt;{" "}
                <span className="text-gray-500">Payment</span>
              </p>
            </div>

            <div className="border text-sm rounded-md ">
              <p className="flex flex-wrap  items-center px-5 py-3 justify-between">
                <span className="text-gray-500">
                  Contact{" "}
                  <span className="text-black pl-6">myemail@gmail.com</span>{" "}
                </span>
                <span className="text-xs text-red-500">Change</span>
              </p>
              <hr />
              <p className="flex flex-wrap items-center px-5 py-3 justify-between">
                <span className="text-gray-500">
                  Ship to{" "}
                  <span className="text-black pl-6">address, MH, India</span>{" "}
                </span>
                <span className="text-xs text-red-500">Change</span>
              </p>
            </div>

            <div>
              <h1 className="text-lg mt-8 my-4">Shipping method</h1>
              <div className="border text-sm rounded-md">
                <div className="flex flex-wrap items-center px-5 py-4 justify-between">
                  <div className="flex">
                    <input ref={shipping} type="radio" name="method" id="" />
                    <p className="pl-4">Cash on Delivery - Shipping Charges</p>
                  </div>
                  <span>Free</span>
                </div>
                <hr />
                <div className="flex items-center px-5 py-4 justify-between">
                  <div className="flex">
                    <input type="radio" name="method" id="" />
                    <p className="pl-4">Prepaid - Free Shipping</p>
                  </div>
                  <span>Free</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex flex-col-reverse sm:flex-row sm:flex mb-10 sm:justify-between sm:items-center">
                <div className=" sm:my-0 flex justify-center">
                  <button className="text-sm text-red-500">
                    <Link to="/form">&lt; Return to Information</Link>
                  </button>
                </div>

                <div className="mb-5 sm:my-0">
                  <button className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full">
                    {loader ? (
                      <>
                        <div>Loading...</div>
                      </>
                    ) : (
                      <div onClick={() => orderPage2data()}>
                        Continue to Payment
                      </div>
                    )}
                  </button>
                </div>
              </div>
              {/* <div className="flex mb-10 items-center justify-between">
                                <Link to="/form" className="text-sm text-red-500">&lt; Return to Information</Link>
                                <Link
                                    to="/payment"
                                    //   onClick={() => orderPage1Data()} 
                                    className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold">
                                    Continue to Payment
                                </Link>
                            </div> */}
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
              <p>{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p>
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

const Shipping = () => {
  const [{ pack }, dispatch] = useStateValue();

  const navigate = useNavigate();

  useEffect(() => {
    if (!pack) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div id="Form" className="flex items-center justify-center">
        <C1 />

        <div className="border-r h-screen hidden box:block bg-gray-300"></div>

        <div className="hidden box:block">
          <C2 pack={pack} />
        </div>
      </div>
    </>
  );
};

export default Shipping;
