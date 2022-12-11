import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendOrderPage2Data } from "../../APIs/OrdersAPI";
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/reducer";

const C1 = () => {
  const [{ id, page2Data, page1Data, pack }, dispatch] = useStateValue();
  const [showSummary, setShowSummary] = useState(false);
  const [loader, setloader] = useState(false);

  const navigate = useNavigate();
  const cod = useRef();
  const prepaid = useRef();

  useEffect(() => {
    if (page2Data) {
      if (page2Data.cod) cod.current.checked = true;
      else prepaid.current.checked = true;
    } else prepaid.current.checked = true;
  }, []);

  const orderPage2data = async () => {
    setloader(true);
    const data = {
      cod: cod.current.checked,
      id: id,
    };

    dispatch({
      type: actionType.SET_PAGE2,
      page2Data: data,
    });

    let response = await sendOrderPage2Data(data);

    console.log(response.data.code);

    if (response.data.code === "success") {
      navigate("/shipping");
      setloader(false);
    }

    // navigate("/shipping");
  };

  return (
    <div className="flex justify-end box:w-[54vw] overflow-auto">
      <div className="w-screen sm:w-[44rem]">
        <div className="h-screen mx-4 sm:mx-14 flex flex-col  justify-between">
          <div>
            <div>
              <h1 className="font-normal text-3xl mb-4 mt-3 box:mt-16">
                fittlyf
              </h1>
              {/* <div>Order id : {id}</div> */}
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
                    <span className="font-semibold text-lg">
                      ₹{`${pack.price}`}
                    </span>
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
                          <p className="my-2">{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p>
                        </div>
                        <span className="font-semibold">
                          ₹{`${pack.price}`}
                        </span>
                      </div>

                      <hr className="bg-gray-300" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="my-5">Subtotal</h5>
                          <h5 className="my-5">Shipping</h5>
                        </div>
                        <div className="text-right">
                          <h5 className="font-semibold my-4">
                            ₹{`${pack.price}`}
                          </h5>
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
                            ₹{`${pack.price}`}
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
                <span className="text-gray-500">Payment</span> &gt;{" "}
                <span className="text-gray-500">Shipping</span>
              </p>
            </div>

            <div className="border text-sm rounded-md ">
              <p className="flex flex-wrap  items-center px-5 py-3 justify-between">
                <span className="text-gray-500">
                  Contact
                  <span className="text-black pl-6">
                    {page1Data.emailPhoneNumber}
                  </span>{" "}
                </span>
                <span className="text-xs text-red-500">
                  <Link
                    to="/form"
                    onClick={() => {
                      const data = {
                        cod: cod.current.checked,
                        id: id,
                      };

                      dispatch({
                        type: actionType.SET_PAGE2,
                        page2Data: data,
                      });
                    }}
                  >
                    Change
                  </Link>
                </span>
              </p>
              <hr />
              <p className="flex flex-wrap items-center px-5 py-3 justify-between">
                <span className="text-gray-500">
                  Ship to{" "}
                  <span className="text-black pl-6">{`${page1Data.city}, ${page1Data.state}, India`}</span>{" "}
                </span>
                <span className="text-xs text-red-500">
                  <Link
                    to="/form"
                    onClick={() => {
                      const data = {
                        cod: cod.current.checked,
                        id: id,
                      };

                      dispatch({
                        type: actionType.SET_PAGE2,
                        page2Data: data,
                      });
                    }}
                  >
                    Change
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <h1 className="text-lg mt-8 my-4">Shipping method</h1>
              <div className="border text-sm rounded-md">
                <div
                  onClick={() => {
                    cod.current.checked = true;
                  }}
                  className=" cursor-pointer flex flex-wrap items-center px-5 py-4 justify-between"
                >
                  <div className="flex">
                    <input ref={cod} type="radio" name="method" id="" />
                    <p className="pl-4">Cash on Delivery - Shipping Charges</p>
                  </div>
                  <span>Free</span>
                </div>
                <hr />
                <div
                  onClick={() => {
                    prepaid.current.checked = true;
                  }}
                  className=" cursor-pointer flex items-center px-5 py-4 justify-between"
                >
                  <div className="flex">
                    <input ref={prepaid} type="radio" name="method" id="" />
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
                    <Link
                      to="/form"
                      onClick={() => {
                        const data = {
                          cod: cod.current.checked,
                          id: id,
                        };

                        dispatch({
                          type: actionType.SET_PAGE2,
                          page2Data: data,
                        });
                      }}
                    >
                      &lt; Return to Information
                    </Link>
                  </button>
                </div>

                <div className="mb-5 sm:my-0">
                  {loader ? (
                    <button className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full">
                      <div>Loading...</div>
                    </button>
                  ) : (
                    <button
                      onClick={() => orderPage2data()}
                      className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full"
                    >
                      <div>Continue to Payment</div>
                    </button>
                  )}
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
